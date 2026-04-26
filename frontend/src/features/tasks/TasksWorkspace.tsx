/*
This file shows the student task-solving workspace with markdown statement and submit checks.
Edit this file when task list UX, submit flow, or draft persistence behavior changes.
Copy this file as a starting point when you add another task-based student workflow.
*/

import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { postJson } from "../../shared/api";
import type { Task, TaskProgress, TaskSubmitResult, User } from "../../shared/types";
import { SimpleMarkdown } from "../../shared/ui/SimpleMarkdown";
import { schemeLanguageSupport } from "../scheme-workspace/schemeEditor";
import { analyzeSchemeSource, evaluateMainScheme } from "../scheme-workspace/schemeLanguage";

const ACTIVE_TASK_KEY = "tasks-workspace.active-task-id";
const SOLUTION_PREFIX = "tasks-workspace.solution.";

type SaveState = "idle" | "saving" | "saved" | "error";

function formatDiagnostic(error: { line: number; column: number; message: string }) {
  return `Line ${error.line}, column ${error.column}: ${error.message}`;
}

function taskAttemptLabel(task: Task) {
  const attempts = task.attempt_count ?? 0;
  if (task.passed) {
    return "Passed";
  }
  if (attempts > 0) {
    return `Tried ${attempts}`;
  }
  return "";
}

export function TasksWorkspace({ user, onLogout }: { user: User; onLogout: () => Promise<void> }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [solution, setSolution] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [saveError, setSaveError] = useState("");
  const [submitResult, setSubmitResult] = useState<TaskSubmitResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [visualizerOpen, setVisualizerOpen] = useState(false);
  const [inputState, setInputState] = useState<Record<string, 0 | 1>>({});
  const lastSavedDrafts = useRef<Record<number, string>>({});
  const latestSaveRequestIds = useRef<Record<number, number>>({});

  const editorExtensions = useMemo(() => schemeLanguageSupport(), []);
  const analysis = useMemo(() => analyzeSchemeSource(solution), [solution]);
  const evaluation = useMemo(
    () => (activeTask ? evaluateMainScheme(solution, inputState) : null),
    [activeTask, inputState, solution],
  );

  const applyProgressToTask = useCallback((taskId: number, progress: TaskProgress) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId
          ? {
              ...task,
              passed: progress.passed,
              attempt_count: progress.attempt_count,
              latest_result: progress.latest_result,
              latest_submitted_at: progress.latest_submitted_at,
            }
          : task,
      ),
    );
    setActiveTask((current) =>
      current?.id === taskId
        ? {
            ...current,
            passed: progress.passed,
            attempt_count: progress.attempt_count,
            latest_result: progress.latest_result,
            latest_submitted_at: progress.latest_submitted_at,
          }
        : current,
    );
  }, []);

  const saveDraft = useCallback(
    async (taskId: number, nextSolution: string) => {
      if (lastSavedDrafts.current[taskId] === nextSolution) {
        return null;
      }
      const requestId = (latestSaveRequestIds.current[taskId] ?? 0) + 1;
      latestSaveRequestIds.current[taskId] = requestId;
      setSaveState("saving");
      setSaveError("");
      try {
        const data = await postJson<{ progress: TaskProgress }>("/tasks/save-draft", {
          task_id: taskId,
          solution: nextSolution,
        });
        if ((latestSaveRequestIds.current[taskId] ?? 0) !== requestId) {
          return data.progress;
        }
        lastSavedDrafts.current[taskId] = nextSolution;
        applyProgressToTask(taskId, data.progress);
        setSaveState("saved");
        return data.progress;
      } catch (error) {
        if ((latestSaveRequestIds.current[taskId] ?? 0) !== requestId) {
          return null;
        }
        setSaveState("error");
        setSaveError(error instanceof Error ? error.message : "Could not save draft.");
        return null;
      }
    },
    [applyProgressToTask],
  );

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      setLoadError("");
      try {
        const data = await postJson<{ tasks: Task[] }>("/tasks/list");
        setTasks(data.tasks);
        const savedTaskId = Number(window.localStorage.getItem(ACTIVE_TASK_KEY) ?? "");
        const nextTask = data.tasks.find((task) => task.id === savedTaskId) ?? data.tasks[0] ?? null;
        setActiveTaskId(nextTask?.id ?? null);
        setActiveTask(nextTask);
      } catch (error) {
        setLoadError(error instanceof Error ? error.message : "Could not load tasks.");
      } finally {
        setLoading(false);
      }
    };
    void loadTasks();
  }, []);

  useEffect(() => {
    if (activeTaskId === null) {
      window.localStorage.removeItem(ACTIVE_TASK_KEY);
      setActiveTask(null);
      setSolution("");
      setSubmitResult(null);
      setSaveState("idle");
      setSaveError("");
      return;
    }

    let cancelled = false;
    window.localStorage.setItem(ACTIVE_TASK_KEY, String(activeTaskId));

    const loadTask = async () => {
      try {
        const data = await postJson<{ task: Task; progress: TaskProgress }>("/tasks/get", { id: activeTaskId });
        if (cancelled) {
          return;
        }
        const legacyKey = `${SOLUTION_PREFIX}${activeTaskId}`;
        const legacyDraft = window.localStorage.getItem(legacyKey) ?? "";
        const nextSolution = data.progress.draft_solution || legacyDraft;
        setActiveTask(data.task);
        applyProgressToTask(activeTaskId, data.progress);
        setSolution(nextSolution);
        setSubmitResult(data.progress.latest_result);
        setSubmitError("");
        setSaveError("");
        setSaveState("idle");
        lastSavedDrafts.current[activeTaskId] = data.progress.draft_solution;
        if (!data.progress.draft_solution && legacyDraft) {
          window.localStorage.removeItem(legacyKey);
          void saveDraft(activeTaskId, legacyDraft);
        }
      } catch (error) {
        if (!cancelled) {
          setSubmitError(error instanceof Error ? error.message : "Could not load task details.");
        }
      }
    };

    void loadTask();
    return () => {
      cancelled = true;
    };
  }, [activeTaskId, applyProgressToTask, saveDraft]);

  useEffect(() => {
    if (activeTaskId === null) {
      return;
    }
    if (lastSavedDrafts.current[activeTaskId] === solution) {
      return;
    }
    const timer = window.setTimeout(() => {
      void saveDraft(activeTaskId, solution);
    }, 500);
    return () => window.clearTimeout(timer);
  }, [activeTaskId, saveDraft, solution]);

  useEffect(() => {
    const nextInputs = analysis.inputs;
    setInputState((current) => {
      const currentNames = Object.keys(current);
      if (currentNames.length === nextInputs.length && currentNames.every((name, index) => name === nextInputs[index])) {
        return current;
      }
      return Object.fromEntries(nextInputs.map((name) => [name, 0])) as Record<string, 0 | 1>;
    });
  }, [analysis.inputs]);

  const selectTask = async (taskId: number) => {
    if (activeTaskId !== null && activeTaskId !== taskId) {
      await saveDraft(activeTaskId, solution);
    }
    window.localStorage.setItem(ACTIVE_TASK_KEY, String(taskId));
    setActiveTaskId(taskId);
    setSubmitError("");
    setSaveError("");
    setVisualizerOpen(false);
  };

  const submitSolution = async () => {
    if (activeTaskId === null) {
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const data = await postJson<{ result: TaskSubmitResult; progress: TaskProgress }>("/tasks/submit", {
        task_id: activeTaskId,
        solution,
      });
      setSubmitResult(data.result);
      applyProgressToTask(activeTaskId, data.progress);
      lastSavedDrafts.current[activeTaskId] = solution;
      setSaveState("saved");
      setSaveError("");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Could not submit solution.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <aside className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Tasks</h2>
            <p className="mt-1 text-sm text-slate-600">Signed in as {user.username}.</p>
          </div>
          <button className="rounded-2xl border border-slate-300 px-3 py-2 text-sm text-slate-700" onClick={() => void onLogout()} type="button">
            Logout
          </button>
        </div>
        <div className="mt-5 space-y-2">
          {loading ? <p className="text-sm text-slate-600">Loading tasks...</p> : null}
          {loadError ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{loadError}</p> : null}
          {!loading && !loadError && tasks.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-sm text-slate-600">No tasks created yet.</div>
          ) : null}
          {tasks.map((task) => {
            const attemptLabel = taskAttemptLabel(task);
            return (
              <button
                className={`block w-full rounded-2xl px-4 py-3 text-left text-sm ${
                  task.id === activeTaskId ? "bg-sky-100 text-slate-900" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
                key={task.id}
                onClick={() => void selectTask(task.id)}
                type="button"
              >
                <div className="font-medium">{task.title}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span>
                    N={task.input_count}, M={task.output_count}
                  </span>
                  {attemptLabel ? (
                    <span className={`rounded-full px-2 py-1 ${task.passed ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                      {attemptLabel}
                    </span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </aside>
      <div className="space-y-5">
        {!activeTask ? (
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-lg shadow-slate-200/60">
            <h2 className="text-2xl font-semibold text-slate-900">Choose a task</h2>
            <p className="mt-2 text-slate-600">Pick a prepared task from the list and submit your scheme solution.</p>
          </div>
        ) : (
          <>
            <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">{activeTask.title}</h2>
                <span className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                  Inputs: {activeTask.input_count} | Outputs: {activeTask.output_count}
                </span>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <SimpleMarkdown source={activeTask.statement_markdown} />
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">Your solution</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                    {saveState === "saving" ? "Saving..." : saveState === "saved" ? "Saved" : saveState === "error" ? "Save failed" : "Ready"}
                  </span>
                  <button className="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white" onClick={() => setVisualizerOpen((current) => !current)} type="button">
                    {visualizerOpen ? "Hide visualizer" : "Open visualizer"}
                  </button>
                  <button
                    className="rounded-2xl bg-sky-600 px-4 py-3 font-semibold text-white disabled:opacity-60"
                    disabled={submitting}
                    onClick={() => void submitSolution()}
                    type="button"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
              {saveError ? <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{saveError}</p> : null}
              <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200">
                <CodeMirror
                  basicSetup={{
                    foldGutter: false,
                    highlightActiveLine: true,
                  }}
                  extensions={editorExtensions}
                  height="420px"
                  onChange={(value) => setSolution(value)}
                  value={solution}
                />
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
              <h3 className="text-xl font-semibold text-slate-900">Diagnostics</h3>
              {analysis.diagnostics.length === 0 ? (
                <p className="mt-3 text-sm text-emerald-700">No syntax or structure errors found.</p>
              ) : (
                <div className="mt-4 space-y-3">
                  {analysis.diagnostics.map((item, index) => (
                    <article className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700" key={`${item.line}:${item.column}:${index}`}>
                      {formatDiagnostic(item)}
                    </article>
                  ))}
                </div>
              )}
            </section>

            {visualizerOpen ? (
              <section className="rounded-3xl border border-slate-200/80 bg-slate-950 p-5 text-white shadow-lg shadow-slate-900/20">
                <div>
                  <h3 className="text-xl font-semibold">Visualizer</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {analysis.mainSchemeName ? `Main scheme: ${analysis.mainSchemeName}` : "Main scheme is not available yet."}
                  </p>
                </div>

                {!analysis.isValid ? (
                  <p className="mt-4 rounded-2xl bg-white/10 px-4 py-3 text-sm text-slate-200">Fix the solution errors before the visualizer can run.</p>
                ) : (
                  <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    <div className="rounded-3xl bg-white/5 p-4">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Inputs</h4>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {analysis.inputs.map((name) => (
                          <button
                            aria-label={`${name} ${inputState[name] ?? 0}`}
                            className={`rounded-2xl px-4 py-3 text-left ${inputState[name] === 1 ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-white"}`}
                            key={name}
                            onClick={() =>
                              setInputState((current) => ({
                                ...current,
                                [name]: current[name] === 1 ? 0 : 1,
                              }))
                            }
                            type="button"
                          >
                            <div className="text-xs uppercase tracking-[0.18em] opacity-70">{name}</div>
                            <div className="mt-1 text-2xl font-semibold">{inputState[name] ?? 0}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl bg-white/5 p-4">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Outputs</h4>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {analysis.outputs.map((name) => (
                          <div aria-label={`${name} ${evaluation?.outputs[name] ?? 0}`} className="rounded-2xl bg-black/30 px-4 py-3" key={name}>
                            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{name}</div>
                            <div className="mt-1 text-2xl font-semibold">{evaluation?.outputs[name] ?? 0}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </section>
            ) : null}

            <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
              <h3 className="text-xl font-semibold text-slate-900">Submit result</h3>
              {submitError ? <p className="mt-3 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{submitError}</p> : null}
              {!submitResult && !submitError ? <p className="mt-3 text-sm text-slate-600">No submit yet.</p> : null}
              {submitResult ? (
                <div className="mt-4 space-y-3">
                  <p className={`rounded-2xl px-4 py-3 text-sm ${submitResult.accepted ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
                    {submitResult.message}
                  </p>
                  {submitResult.mismatch ? (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      <p>Case index: {submitResult.mismatch.case_index}</p>
                      <p>Input bits: {submitResult.mismatch.input_bits}</p>
                      <p>Expected: {submitResult.mismatch.expected_output}</p>
                      <p>Actual: {submitResult.mismatch.actual_output}</p>
                    </div>
                  ) : null}
                  {submitResult.diagnostics?.length ? (
                    <div className="space-y-2">
                      {submitResult.diagnostics.map((item, index) => (
                        <article className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700" key={`submit-diagnostic-${index}`}>
                          {formatDiagnostic(item)}
                        </article>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </section>
          </>
        )}
      </div>
    </section>
  );
}
