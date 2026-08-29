/*
This file renders the standalone Schemio editor and live input/output debugger.
Edit it when the embedded playground UI or its browser-only saving behavior changes.
Copy it when another small teaching widget needs the same React mounting pattern.
*/

import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useMemo, useState } from "react";
import { schemeLanguageSupport } from "../features/scheme-workspace/schemeEditor";
import { analyzeSchemeSource, evaluateMainScheme } from "../features/scheme-workspace/schemeLanguage";

export type SchemioPlaygroundProps = {
  initialSource: string;
  storageKey: string;
  persist: boolean;
  readOnly: boolean;
  onSourceChange: (source: string, isValid: boolean) => void;
};

function readSavedSource(storageKey: string, initialSource: string, persist: boolean) {
  if (!persist) {
    return initialSource;
  }
  try {
    return window.localStorage.getItem(storageKey) ?? initialSource;
  } catch {
    return initialSource;
  }
}

function saveSource(storageKey: string, source: string, persist: boolean) {
  if (!persist) {
    return;
  }
  try {
    window.localStorage.setItem(storageKey, source);
  } catch {
    // The editor still works when the browser blocks local storage.
  }
}

function clearSavedSource(storageKey: string, persist: boolean) {
  if (!persist) {
    return;
  }
  try {
    window.localStorage.removeItem(storageKey);
  } catch {
    // The editor still works when the browser blocks local storage.
  }
}

function formatDiagnostic(line: number, column: number, message: string) {
  return `Line ${line}, column ${column}: ${message}`;
}

export function SchemioPlayground({ initialSource, storageKey, persist, readOnly, onSourceChange }: SchemioPlaygroundProps) {
  const [source, setSource] = useState(() => readSavedSource(storageKey, initialSource, persist));
  const [inputState, setInputState] = useState<Record<string, 0 | 1>>({});
  const analysis = useMemo(() => analyzeSchemeSource(source), [source]);
  const evaluation = useMemo(() => (analysis.isValid ? evaluateMainScheme(source, inputState) : null), [analysis.isValid, inputState, source]);
  const editorExtensions = useMemo(() => schemeLanguageSupport(), []);

  useEffect(() => {
    setSource(readSavedSource(storageKey, initialSource, persist));
  }, [initialSource, persist, storageKey]);

  useEffect(() => {
    setInputState((current) =>
      Object.fromEntries(analysis.inputs.map((name) => [name, current[name] ?? 0])) as Record<string, 0 | 1>,
    );
  }, [analysis.inputs]);

  const updateSource = (nextSource: string) => {
    setSource(nextSource);
    saveSource(storageKey, nextSource, persist);
    onSourceChange(nextSource, analyzeSchemeSource(nextSource).isValid);
  };

  const resetSource = () => {
    clearSavedSource(storageKey, persist);
    updateSource(initialSource);
  };

  return (
    <section className="schemio-playground" aria-label="Schemio playground">
      <header className="schemio-playground__header">
        <div>
          <h2>Schemio playground</h2>
          <p>The first scheme is the main scheme. Change inputs to see outputs immediately.</p>
        </div>
        {!readOnly ? (
          <button className="schemio-playground__reset" onClick={resetSource} type="button">
            Reset saved code
          </button>
        ) : null}
      </header>

      <div className="schemio-playground__editor">
        <CodeMirror
          aria-label="Schemio code editor"
          basicSetup={{ foldGutter: false, highlightActiveLine: true }}
          editable={!readOnly}
          extensions={editorExtensions}
          height="340px"
          onChange={updateSource}
          value={source}
        />
      </div>

      <section className="schemio-playground__diagnostics" aria-live="polite">
        <h3>Diagnostics</h3>
        {analysis.diagnostics.length === 0 ? (
          <p className="schemio-playground__success">No syntax or structure errors found.</p>
        ) : (
          <ul>
            {analysis.diagnostics.map((item, index) => (
              <li key={`${item.line}:${item.column}:${index}`}>{formatDiagnostic(item.line, item.column, item.message)}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="schemio-playground__debugger">
        <div className="schemio-playground__debugger-title">
          <h3>Live debugger</h3>
          <p>{analysis.mainSchemeName ? `Main scheme: ${analysis.mainSchemeName}` : "Main scheme is not available yet."}</p>
        </div>
        {!analysis.isValid ? (
          <p className="schemio-playground__blocked">Fix the errors before the debugger can run.</p>
        ) : (
          <div className="schemio-playground__signals">
            <div>
              <h4>Inputs</h4>
              <div className="schemio-playground__signal-list">
                {analysis.inputs.map((name) => (
                  <button
                    aria-label={`${name} ${inputState[name] ?? 0}`}
                    className={inputState[name] === 1 ? "schemio-playground__bit schemio-playground__bit--on" : "schemio-playground__bit"}
                    key={name}
                    onClick={() => setInputState((current) => ({ ...current, [name]: current[name] === 1 ? 0 : 1 }))}
                    type="button"
                  >
                    <span>{name}</span>
                    <strong>{inputState[name] ?? 0}</strong>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4>Outputs</h4>
              <div className="schemio-playground__signal-list">
                {analysis.outputs.map((name) => (
                  <div aria-label={`${name} ${evaluation?.outputs[name] ?? 0}`} className="schemio-playground__bit schemio-playground__output" key={name}>
                    <span>{name}</span>
                    <strong>{evaluation?.outputs[name] ?? 0}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <p className="schemio-playground__storage">{persist ? "Your code is saved in this browser." : "Local saving is off."}</p>
    </section>
  );
}
