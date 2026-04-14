/*
This file shows the public admin task editor for creating and maintaining prepared tasks.
Edit this file when admin task form fields, validation UX, or CRUD flow changes.
Copy this file as a starting point when you add another compact admin CRUD panel.
*/

import { useEffect, useMemo, useState } from "react";
import { postJson } from "../../shared/api";
import type { AdminTask } from "../../shared/types";

type FormState = {
  title: string;
  statement_markdown: string;
  input_count: string;
  output_count: string;
  expected_outputs_text: string;
  reference_solution: string;
};

function emptyForm(): FormState {
  return {
    title: "",
    statement_markdown: "",
    input_count: "2",
    output_count: "1",
    expected_outputs_text: "",
    reference_solution: "",
  };
}

function buildExpectedOutputsValidationText(inputCount: number, outputCount: number, expectedOutputsText: string): string | null {
  if (!expectedOutputsText.trim()) {
    return null;
  }
  const lines = expectedOutputsText.split(/\r?\n/).map((line) => line.trim());
  if (lines.some((line) => line.length === 0)) {
    return "Expected outputs must not contain empty lines.";
  }
  const expectedLines = 2 ** inputCount;
  if (lines.length !== expectedLines) {
    return `Expected outputs must contain exactly ${expectedLines} line(s) for N=${inputCount}.`;
  }
  for (const line of lines) {
    if (line.length !== outputCount) {
      return `Each expected output line must contain exactly ${outputCount} bit(s).`;
    }
    if (!/^[01]+$/.test(line)) {
      return 'Expected output lines can contain only "0" and "1".';
    }
  }
  return null;
}

function parsePositiveInt(value: string): number | null {
  const parsed = Number(value);
  if (!Number.isInteger(parsed)) {
    return null;
  }
  return parsed;
}

function validateForm(form: FormState): string | null {
  if (!form.title.trim()) {
    return "Title is required.";
  }
  if (!form.statement_markdown.trim()) {
    return "Statement markdown is required.";
  }
  const inputCount = parsePositiveInt(form.input_count);
  if (inputCount === null || inputCount < 0 || inputCount > 10) {
    return "Input count must be an integer from 0 to 10.";
  }
  const outputCount = parsePositiveInt(form.output_count);
  if (outputCount === null || outputCount < 1 || outputCount > 10) {
    return "Output count must be an integer from 1 to 10.";
  }
  if (!form.expected_outputs_text.trim() && !form.reference_solution.trim()) {
    return "Task must include expected outputs, reference solution, or both.";
  }
  return buildExpectedOutputsValidationText(inputCount, outputCount, form.expected_outputs_text);
}

function taskToForm(task: AdminTask): FormState {
  return {
    title: task.title,
    statement_markdown: task.statement_markdown,
    input_count: String(task.input_count),
    output_count: String(task.output_count),
    expected_outputs_text: task.expected_outputs_text ?? "",
    reference_solution: task.reference_solution ?? "",
  };
}

export function AdminTasksWorkspace() {
  const [tasks, setTasks] = useState<AdminTask[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm());
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [saveError, setSaveError] = useState("");
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved">("idle");

  const validationError = useMemo(() => validateForm(form), [form]);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      setLoadError("");
      try {
        const data = await postJson<{ tasks: AdminTask[] }>("/admin/tasks/list");
        setTasks(data.tasks);
        const first = data.tasks[0] ?? null;
        setActiveTaskId(first?.id ?? null);
        setForm(first ? taskToForm(first) : emptyForm());
      } catch (error) {
        setLoadError(error instanceof Error ? error.message : "Could not load tasks.");
      } finally {
        setLoading(false);
      }
    };
    void loadTasks();
  }, []);

  const selectTask = (task: AdminTask) => {
    setActiveTaskId(task.id);
    setForm(taskToForm(task));
    setSaveError("");
    setSaveState("idle");
  };

  const createTask = async () => {
    setActiveTaskId(null);
    setForm(emptyForm());
    setSaveError("");
    setSaveState("idle");
  };

  const saveTask = async () => {
    const error = validateForm(form);
    if (error) {
      setSaveError("");
      return;
    }
    setSaveState("saving");
    setSaveError("");
    const payload = {
      title: form.title.trim(),
      statement_markdown: form.statement_markdown.trim(),
      input_count: Number(form.input_count),
      output_count: Number(form.output_count),
      expected_outputs_text: form.expected_outputs_text.trim() || null,
      reference_solution: form.reference_solution.trim() || null,
    };
    try {
      if (activeTaskId === null) {
        const data = await postJson<{ task: AdminTask }>("/admin/tasks/create", payload);
        setTasks((current) => [...current, data.task]);
        setActiveTaskId(data.task.id);
      } else {
        const data = await postJson<{ task: AdminTask }>("/admin/tasks/save", { id: activeTaskId, ...payload });
        setTasks((current) => current.map((task) => (task.id === data.task.id ? data.task : task)));
        setActiveTaskId(data.task.id);
      }
      setSaveState("saved");
    } catch (submitError) {
      setSaveError(submitError instanceof Error ? submitError.message : "Could not save task.");
      setSaveState("idle");
    }
  };

  const deleteTask = async () => {
    if (activeTaskId === null) {
      return;
    }
    if (!window.confirm("Delete this task?")) {
      return;
    }
    try {
      await postJson<{ deleted: boolean; id: number }>("/admin/tasks/delete", { id: activeTaskId });
      const remaining = tasks.filter((task) => task.id !== activeTaskId);
      setTasks(remaining);
      const first = remaining[0] ?? null;
      setActiveTaskId(first?.id ?? null);
      setForm(first ? taskToForm(first) : emptyForm());
      setSaveError("");
      setSaveState("idle");
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : "Could not delete task.");
    }
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <aside className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Admin tasks</h2>
            <p className="mt-1 text-sm text-slate-600">Public editor for prepared assignments.</p>
          </div>
        </div>
        <div className="mt-5">
          <button className="w-full rounded-2xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white" onClick={() => void createTask()} type="button">
            New task
          </button>
        </div>
        <div className="mt-5 space-y-2">
          {loading ? <p className="text-sm text-slate-600">Loading tasks...</p> : null}
          {loadError ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{loadError}</p> : null}
          {tasks.map((task) => (
            <button
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm ${
                task.id === activeTaskId ? "bg-sky-100 text-slate-900" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
              key={task.id}
              onClick={() => selectTask(task)}
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

      <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
        {loading ? (
          <>
            <h2 className="text-2xl font-semibold text-slate-900">Loading tasks</h2>
            <p className="mt-4 text-sm text-slate-600">Wait for the task editor to finish loading before you start typing.</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-slate-900">{activeTaskId === null ? "Create task" : `Edit task #${activeTaskId}`}</h2>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Title
                <input
                  className="rounded-2xl border border-slate-300 px-3 py-2"
                  onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                  value={form.title}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Statement markdown
                <textarea
                  className="min-h-40 rounded-2xl border border-slate-300 px-3 py-2 font-mono text-sm"
                  onChange={(event) => setForm((current) => ({ ...current, statement_markdown: event.target.value }))}
                  value={form.statement_markdown}
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Input count (N)
                  <input
                    className="rounded-2xl border border-slate-300 px-3 py-2"
                    onChange={(event) => setForm((current) => ({ ...current, input_count: event.target.value }))}
                    value={form.input_count}
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Output count (M)
                  <input
                    className="rounded-2xl border border-slate-300 px-3 py-2"
                    onChange={(event) => setForm((current) => ({ ...current, output_count: event.target.value }))}
                    value={form.output_count}
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Expected outputs (2^N lines of M bits)
                <textarea
                  className="min-h-40 rounded-2xl border border-slate-300 px-3 py-2 font-mono text-sm"
                  onChange={(event) => setForm((current) => ({ ...current, expected_outputs_text: event.target.value }))}
                  placeholder={"Example for N=2, M=1:\n0\n1\n1\n0"}
                  value={form.expected_outputs_text}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Reference solution (scheme)
                <textarea
                  className="min-h-48 rounded-2xl border border-slate-300 px-3 py-2 font-mono text-sm"
                  onChange={(event) => setForm((current) => ({ ...current, reference_solution: event.target.value }))}
                  value={form.reference_solution}
                />
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                className="rounded-2xl bg-sky-600 px-4 py-3 font-semibold text-white disabled:opacity-60"
                disabled={saveState === "saving"}
                onClick={() => void saveTask()}
                type="button"
              >
                {saveState === "saving" ? "Saving..." : "Save task"}
              </button>
              <button className="rounded-2xl border border-rose-300 px-4 py-3 font-semibold text-rose-700" disabled={activeTaskId === null} onClick={() => void deleteTask()} type="button">
                Delete task
              </button>
            </div>
            {validationError ? <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-700">{validationError}</p> : null}
            {saveError ? <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{saveError}</p> : null}
            {saveState === "saved" ? <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">Task saved.</p> : null}
          </>
        )}
      </div>
    </section>
  );
}
