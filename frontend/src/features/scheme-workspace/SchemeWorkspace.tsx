/*
This file shows the main logged-in scheme editor workspace with file list and visualizer.
Edit this file when workspace layout, autosave flow, or visualizer behavior changes.
Copy this file as a starting point when you add another rich logged-in workspace page.
*/

import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useMemo, useRef, useState } from "react";
import { postJson } from "../../shared/api";
import type { SchemeDiagnostic, SchemeFile, User } from "../../shared/types";
import { schemeLanguageSupport } from "./schemeEditor";
import { analyzeSchemeSource, evaluateMainScheme } from "./schemeLanguage";

type SaveState = "idle" | "saving" | "saved" | "error";

const ACTIVE_FILE_KEY = "scheme-workspace.active-file-id";

function buildSnapshot(file: SchemeFile) {
  return JSON.stringify({ name: file.name, content: file.content });
}

function buildNextFileName(files: SchemeFile[]) {
  const usedNames = new Set(files.map((file) => file.name));
  let index = 1;
  while (usedNames.has(`scheme ${index}`)) {
    index += 1;
  }
  return `scheme ${index}`;
}

function formatDiagnostic(error: SchemeDiagnostic) {
  return `Line ${error.line}, column ${error.column}: ${error.message}`;
}

export function SchemeWorkspace({ user, onLogout }: { user: User; onLogout: () => Promise<void> }) {
  const [files, setFiles] = useState<SchemeFile[]>([]);
  const [activeFileId, setActiveFileId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [saveError, setSaveError] = useState("");
  const [visualizerOpen, setVisualizerOpen] = useState(false);
  const [inputState, setInputState] = useState<Record<string, 0 | 1>>({});
  const lastSavedSnapshots = useRef<Record<number, string>>({});

  const activeFile = files.find((file) => file.id === activeFileId) ?? null;
  const analysis = useMemo(() => analyzeSchemeSource(activeFile?.content ?? ""), [activeFile?.content]);
  const evaluation = useMemo(
    () => (activeFile ? evaluateMainScheme(activeFile.content, inputState) : null),
    [activeFile, inputState],
  );
  const editorExtensions = useMemo(() => schemeLanguageSupport(), []);

  const updateFileLocally = (fileId: number, updater: (current: SchemeFile) => SchemeFile) => {
    setFiles((current) => current.map((file) => (file.id === fileId ? updater(file) : file)));
  };

  const saveFile = async (file: SchemeFile) => {
    const snapshot = buildSnapshot(file);
    if (lastSavedSnapshots.current[file.id] === snapshot) {
      return;
    }
    setSaveState("saving");
    setSaveError("");
    try {
      const data = await postJson<{ file: SchemeFile }>("/scheme-files/save", {
        id: file.id,
        name: file.name,
        content: file.content,
      });
      lastSavedSnapshots.current[data.file.id] = buildSnapshot(data.file);
      setFiles((current) => current.map((item) => (item.id === data.file.id ? data.file : item)));
      setSaveState("saved");
    } catch (error) {
      setSaveState("error");
      setSaveError(error instanceof Error ? error.message : "Could not save file.");
    }
  };

  useEffect(() => {
    const loadFiles = async () => {
      setLoading(true);
      setLoadError("");
      try {
        const data = await postJson<{ files: SchemeFile[] }>("/scheme-files/list");
        setFiles(data.files);
        lastSavedSnapshots.current = Object.fromEntries(data.files.map((file) => [file.id, buildSnapshot(file)]));
        const savedActiveId = Number(window.localStorage.getItem(ACTIVE_FILE_KEY) ?? "");
        const nextActive = data.files.find((file) => file.id === savedActiveId) ?? data.files[0] ?? null;
        setActiveFileId(nextActive?.id ?? null);
      } catch (error) {
        setLoadError(error instanceof Error ? error.message : "Could not load files.");
      } finally {
        setLoading(false);
      }
    };
    void loadFiles();
  }, []);

  useEffect(() => {
    if (activeFileId === null) {
      window.localStorage.removeItem(ACTIVE_FILE_KEY);
      return;
    }
    window.localStorage.setItem(ACTIVE_FILE_KEY, String(activeFileId));
  }, [activeFileId]);

  useEffect(() => {
    if (!activeFile) {
      return;
    }
    const snapshot = buildSnapshot(activeFile);
    if (lastSavedSnapshots.current[activeFile.id] === snapshot) {
      return;
    }
    const timer = window.setTimeout(() => {
      void saveFile(activeFile);
    }, 500);
    return () => window.clearTimeout(timer);
  }, [activeFile]);

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

  const createFile = async () => {
    if (activeFile) {
      await saveFile(activeFile);
    }
    const name = buildNextFileName(files);
    const data = await postJson<{ file: SchemeFile }>("/scheme-files/create", { name, content: "" });
    lastSavedSnapshots.current[data.file.id] = buildSnapshot(data.file);
    setFiles((current) => [...current, data.file]);
    setActiveFileId(data.file.id);
    setSaveState("saved");
    setSaveError("");
  };

  const selectFile = async (fileId: number) => {
    if (activeFile && activeFile.id !== fileId) {
      await saveFile(activeFile);
    }
    setActiveFileId(fileId);
    setSaveState("idle");
    setSaveError("");
  };

  const renameActiveFile = async () => {
    if (!activeFile) {
      return;
    }
    const nextName = window.prompt("New file name", activeFile.name)?.trim();
    if (!nextName || nextName === activeFile.name) {
      return;
    }
    const nextFile = { ...activeFile, name: nextName };
    updateFileLocally(activeFile.id, () => nextFile);
    await saveFile(nextFile);
  };

  const deleteActiveFile = async () => {
    if (!activeFile) {
      return;
    }
    if (!window.confirm(`Delete "${activeFile.name}"?`)) {
      return;
    }
    await postJson<{ deleted: boolean; id: number }>("/scheme-files/delete", { id: activeFile.id });
    delete lastSavedSnapshots.current[activeFile.id];
    const remaining = files.filter((file) => file.id !== activeFile.id);
    setFiles(remaining);
    setActiveFileId(remaining[0]?.id ?? null);
    setSaveState("idle");
    setSaveError("");
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <aside className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Scheme course</h2>
            <p className="mt-1 text-sm text-slate-600">Signed in as {user.username}.</p>
          </div>
          <button className="rounded-2xl border border-slate-300 px-3 py-2 text-sm text-slate-700" onClick={() => void onLogout()} type="button">
            Logout
          </button>
        </div>

        <div className="mt-5 flex gap-2">
          <button className="rounded-2xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white" onClick={() => void createFile()} type="button">
            New file
          </button>
          <button className="rounded-2xl border border-slate-300 px-3 py-2 text-sm text-slate-700" disabled={!activeFile} onClick={() => void renameActiveFile()} type="button">
            Rename
          </button>
          <button className="rounded-2xl border border-rose-300 px-3 py-2 text-sm text-rose-700" disabled={!activeFile} onClick={() => void deleteActiveFile()} type="button">
            Delete
          </button>
        </div>

        <div className="mt-5 space-y-2">
          {loading ? <p className="text-sm text-slate-600">Loading files...</p> : null}
          {loadError ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{loadError}</p> : null}
          {!loading && !loadError && files.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-sm text-slate-600">
              No files yet. Create your first scheme file.
            </div>
          ) : null}
          {files.map((file) => (
            <button
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm ${
                file.id === activeFileId ? "bg-sky-100 text-slate-900" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
              key={file.id}
              onClick={() => void selectFile(file.id)}
              type="button"
            >
              <div className="font-medium">{file.name}</div>
            </button>
          ))}
        </div>
      </aside>

      <div className="space-y-5">
        {!activeFile ? (
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-lg shadow-slate-200/60">
            <h2 className="text-2xl font-semibold text-slate-900">Create your first scheme file</h2>
            <p className="mt-2 text-slate-600">Each file stores one small workspace and uses the last scheme as the main visualizer interface.</p>
            <button className="mt-5 rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white" onClick={() => void createFile()} type="button">
              Create first file
            </button>
          </div>
        ) : (
          <>
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{activeFile.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">Last scheme in the file becomes the black-box visualizer.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                    {saveState === "saving" ? "Saving..." : saveState === "saved" ? "Saved" : saveState === "error" ? "Save failed" : "Ready"}
                  </span>
                  <button className="rounded-2xl bg-sky-600 px-4 py-3 font-semibold text-white" onClick={() => setVisualizerOpen((current) => !current)} type="button">
                    {visualizerOpen ? "Hide visualizer" : "Open visualizer"}
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
                  onChange={(value) => updateFileLocally(activeFile.id, (current) => ({ ...current, content: value }))}
                  value={activeFile.content}
                />
              </div>
            </div>

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
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">Visualizer</h3>
                    <p className="mt-1 text-sm text-slate-300">
                      {analysis.mainSchemeName ? `Main scheme: ${analysis.mainSchemeName}` : "Main scheme is not available yet."}
                    </p>
                  </div>
                </div>

                {!analysis.isValid ? (
                  <p className="mt-4 rounded-2xl bg-white/10 px-4 py-3 text-sm text-slate-200">Fix the file errors before the visualizer can run.</p>
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
          </>
        )}
      </div>
    </section>
  );
}
