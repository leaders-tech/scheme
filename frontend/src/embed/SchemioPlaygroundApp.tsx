/*
This file renders the standalone Schemio editor and live input/output debugger.
Edit it when the embedded playground UI or its browser-only saving behavior changes.
Copy it when another small teaching widget needs the same React mounting pattern.
*/

import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { useEffect, useMemo, useState } from "react";
import { schemeLanguageSupport } from "../features/scheme-workspace/schemeEditor";
import { analyzeSchemeSource, evaluateMainScheme } from "../features/scheme-workspace/schemeLanguage";
import { buildSchemeVisualization, type SignalValue } from "../features/scheme-workspace/schemeVisualizer";
import { SchemioSignalVisualizer } from "./SchemioSignalVisualizer";

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

function normaliseInputs(inputNames: string[], values: Record<string, 0 | 1>) {
  return Object.fromEntries(inputNames.map((name) => [name, values[name] ?? 0])) as Record<string, 0 | 1>;
}

export function SchemioPlayground({ initialSource, storageKey, persist, readOnly, onSourceChange }: SchemioPlaygroundProps) {
  const [source, setSource] = useState(() => readSavedSource(storageKey, initialSource, persist));
  const [testCases, setTestCases] = useState<Array<Record<string, 0 | 1>>>([{}]);
  const [visualizedTest, setVisualizedTest] = useState<{ inputs: Record<string, SignalValue>; name: string } | null>(null);
  const analysis = useMemo(() => analyzeSchemeSource(source), [source]);
  const visualModel = useMemo(() => (analysis.isValid ? buildSchemeVisualization(source) : null), [analysis.isValid, source]);
  const evaluations = useMemo(
    () => (analysis.isValid ? testCases.map((inputValues) => evaluateMainScheme(source, inputValues)) : []),
    [analysis.isValid, source, testCases],
  );
  const editorExtensions = useMemo(() => [...schemeLanguageSupport(), EditorView.lineWrapping], []);

  useEffect(() => {
    setSource(readSavedSource(storageKey, initialSource, persist));
  }, [initialSource, persist, storageKey]);

  useEffect(() => {
    setTestCases((current) => current.map((testCase) => normaliseInputs(analysis.inputs, testCase)));
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

  const addTestCase = () => {
    setTestCases((current) => [...current, normaliseInputs(analysis.inputs, {})]);
  };

  const removeTestCase = (index: number) => {
    setTestCases((current) => current.filter((_, testIndex) => testIndex !== index));
  };

  const toggleInput = (testIndex: number, name: string) => {
    setTestCases((current) =>
      current.map((testCase, index) =>
        index === testIndex ? { ...testCase, [name]: testCase[name] === 1 ? 0 : 1 } : testCase,
      ),
    );
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
          minHeight="4.8rem"
          onChange={updateSource}
          value={source}
        />
      </div>

      {analysis.diagnostics.length > 0 ? (
        <section className="schemio-playground__diagnostics" aria-live="polite">
          <h3>Diagnostics</h3>
          <ul>
            {analysis.diagnostics.map((item, index) => (
              <li key={`${item.line}:${item.column}:${index}`}>{formatDiagnostic(item.line, item.column, item.message)}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="schemio-playground__debugger">
        <div className="schemio-playground__debugger-title">
          <h3>Live debugger</h3>
          <p>{analysis.mainSchemeName ? `Main scheme: ${analysis.mainSchemeName}` : "Main scheme is not available yet."}</p>
        </div>
        {!analysis.isValid ? (
          <p className="schemio-playground__blocked">Fix the errors before the debugger can run.</p>
        ) : (
          <>
            <div className="schemio-playground__test-actions">
              <h4>Test cases</h4>
              <button className="schemio-playground__add-test" onClick={addTestCase} type="button">
                Add test
              </button>
            </div>
            <div className="schemio-playground__test-header" aria-hidden="true">
              <span>Test</span>
              <span>Inputs</span>
              <span>Outputs</span>
            </div>
            <div className="schemio-playground__test-list">
              {testCases.map((testCase, testIndex) => (
                <div className="schemio-playground__test-case" key={testIndex}>
                  <span className="schemio-playground__test-number">Test {testIndex + 1}</span>
                  <div className="schemio-playground__signal-list" aria-label={`Test ${testIndex + 1} inputs`}>
                    {analysis.inputs.map((name) => (
                      <button
                        aria-label={`Test ${testIndex + 1}: ${name} ${testCase[name] ?? 0}`}
                        className={testCase[name] === 1 ? "schemio-playground__bit schemio-playground__bit--on" : "schemio-playground__bit"}
                        key={name}
                        onClick={() => toggleInput(testIndex, name)}
                        type="button"
                      >
                        <span>{name}</span>
                        <strong>{testCase[name] ?? 0}</strong>
                      </button>
                    ))}
                  </div>
                  <div className="schemio-playground__signal-list" aria-label={`Test ${testIndex + 1} outputs`}>
                    {analysis.outputs.map((name) => (
                      <div
                        aria-label={`Test ${testIndex + 1}: ${name} ${evaluations[testIndex]?.outputs[name] ?? 0}`}
                        className="schemio-playground__bit schemio-playground__output"
                        key={name}
                      >
                        <span>{name}</span>
                        <strong>{evaluations[testIndex]?.outputs[name] ?? 0}</strong>
                      </div>
                    ))}
                  </div>
                  {testCases.length > 1 ? (
                    <button aria-label={`Remove test ${testIndex + 1}`} className="schemio-playground__remove-test" onClick={() => removeTestCase(testIndex)} type="button">
                      Remove
                    </button>
                  ) : null}
                  {visualModel ? (
                    <button
                      aria-label={`Visualize test ${testIndex + 1}`}
                      className="schemio-playground__visualize-test"
                      onClick={() => setVisualizedTest({ inputs: normaliseInputs(analysis.inputs, testCase), name: `Test ${testIndex + 1}` })}
                      type="button"
                    >
                      Visualize
                    </button>
                  ) : null}
                </div>
              ))}
            </div>
          </>
        )}
      </section>
      {visualizedTest && visualModel ? (
        <SchemioSignalVisualizer inputs={visualizedTest.inputs} model={visualModel} onClose={() => setVisualizedTest(null)} testName={visualizedTest.name} />
      ) : null}
    </section>
  );
}
