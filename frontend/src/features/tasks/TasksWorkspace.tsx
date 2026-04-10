/*
This file shows the student task-solving workspace with markdown statement and submit checks.
Edit this file when task list UX, submit flow, or draft persistence behavior changes.
Copy this file as a starting point when you add another task-based student workflow.
*/

import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useMemo, useState } from "react";
import { postJson } from "../../shared/api";
import type { Task, TaskSubmitResult, User } from "../../shared/types";
import { SimpleMarkdown } from "../../shared/ui/SimpleMarkdown";
import { schemeLanguageSupport } from "../scheme-workspace/schemeEditor";
import { analyzeSchemeSource } from "../scheme-workspace/schemeLanguage";

const ACTIVE_TASK_KEY = "tasks-workspace.active-task-id";
const SOLUTION_PREFIX = "tasks-workspace.solution.";

function formatDiagnostic(error: { line: number; column: number; message: string }) {
  return `Line ${error.line}, column ${error.column}: ${error.message}`;
}

export function TasksWorkspace({ user, onLogout }: { user: User; onLogout: () => Promise<void> }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [solution, setSolution] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [submitResult, setSubmitResult] = useState<TaskSubmitResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const editorExtensions = useMemo(() => schemeLanguageSupport(), []);
  const analysis = useMemo(() => analyzeSchemeSource(solution), [solution]);

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
        if (nextTask) {
          setSolution(window.localStorage.getItem(`${SOLUTION_PREFIX}${nextTask.id}`) ?? "");
        }
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
      return;
    }
    window.localStorage.setItem(ACTIVE_TASK_KEY, String(activeTaskId));
    const loadTask = async () => {
      try {
        const data = await postJson<{ task: Task }>("/tasks/get", { id: activeTaskId });
        setActiveTask(data.task);
        const savedDraft = window.localStorage.getItem(`${SOLUTION_PREFIX}${activeTaskId}`) ?? "";
        setSolution(savedDraft);
        setSubmitResult(null);
        setSubmitError("");
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : "Could not load task details.");
      }
    };
    void loadTask();
  }, [activeTaskId]);

  useEffect(() => {
    if (activeTaskId === null) {
      return;
    }
    window.localStorage.setItem(`${SOLUTION_PREFIX}${activeTaskId}`, solution);
  }, [activeTaskId, solution]);

  const submitSolution = async () => {
    if (!activeTaskId) {
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const data = await postJson<{ result: TaskSubmitResult }>("/tasks/submit", { task_id: activeTaskId, solution });
      setSubmitResult(data.result);
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
          {tasks.map((task) => (
            <button
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm ${
                task.id === activeTaskId ? "bg-sky-100 text-slate-900" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
              key={task.id}
              onClick={() => setActiveTaskId(task.id)}
              type="button"
            >
              <div className="font-medium">{task.title}</div>
              <div className="mt-1 text-xs text-slate-500">
                N={task.input_count}, M={task.output_count}
              </div>
            </button>
          ))}
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
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">Your solution</h3>
                <button
                  className="rounded-2xl bg-sky-600 px-4 py-3 font-semibold text-white disabled:opacity-60"
                  disabled={submitting}
                  onClick={() => void submitSolution()}
                  type="button"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
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
