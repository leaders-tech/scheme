/*
This file renders the fullscreen Schemio signal visualizer for one playground test case.
Edit it when the dialog controls, SVG interaction, or animation presentation changes.
Copy it when another small teaching diagram needs pan, zoom, and timed SVG states.
*/

import { useCallback, useEffect, useRef, useState } from "react";
import { buildSimulationTimeline, SIGNAL_COLORS, type SchemeVisualization, type SignalValue, type VisualNode } from "../features/scheme-workspace/schemeVisualizer";

type Transform = { scale: number; x: number; y: number };

type SchemioSignalVisualizerProps = {
  model: SchemeVisualization;
  inputs: Record<string, SignalValue>;
  testName: string;
  onClose: () => void;
};

const VIEWPORT_WIDTH = 1200;
const VIEWPORT_HEIGHT = 700;

function fitTransform(model: SchemeVisualization): Transform {
  const scale = Math.max(0.12, Math.min(1.1, (VIEWPORT_WIDTH - 96) / model.bounds.width, (VIEWPORT_HEIGHT - 96) / model.bounds.height));
  return {
    scale,
    x: (VIEWPORT_WIDTH - model.bounds.width * scale) / 2 - model.bounds.x * scale,
    y: (VIEWPORT_HEIGHT - model.bounds.height * scale) / 2 - model.bounds.y * scale,
  };
}

function nodeFill(value: SignalValue | undefined) {
  return value === undefined ? "#101827" : SIGNAL_COLORS[value];
}

function wirePath(from: VisualNode, to: VisualNode) {
  const startX = from.x + 92;
  const startY = from.y + 28;
  const endX = to.x;
  const endY = to.y + 28;
  const middle = Math.max(36, Math.abs(endX - startX) * 0.45);
  return `M ${startX} ${startY} C ${startX + middle} ${startY}, ${endX - middle} ${endY}, ${endX} ${endY}`;
}

function GateShape({ node, value }: { node: VisualNode; value: SignalValue | undefined }) {
  const fill = nodeFill(value);
  const common = { fill, stroke: "#cbd5e1", strokeWidth: 2 };
  if (node.gate === "not") {
    return (
      <>
        <polygon {...common} points={`${node.x + 10},${node.y + 5} ${node.x + 10},${node.y + 51} ${node.x + 56},${node.y + 28}`} />
        <circle cx={node.x + 63} cy={node.y + 28} fill={fill} r="6" stroke="#cbd5e1" strokeWidth="2" />
        <text className="schemio-visualizer__gate-text" x={node.x + 29} y={node.y + 32}>NOT</text>
      </>
    );
  }
  if (node.gate === "and") {
    return (
      <>
        <path {...common} d={`M ${node.x + 7} ${node.y + 4} H ${node.x + 46} A 24 24 0 0 1 ${node.x + 46} ${node.y + 52} H ${node.x + 7} Z`} />
        <text className="schemio-visualizer__gate-text" x={node.x + 31} y={node.y + 32}>AND</text>
      </>
    );
  }
  return (
    <>
      <path {...common} d={`M ${node.x + 7} ${node.y + 4} Q ${node.x + 28} ${node.y + 28} ${node.x + 7} ${node.y + 52} Q ${node.x + 46} ${node.y + 52} ${node.x + 76} ${node.y + 28} Q ${node.x + 46} ${node.y + 4} ${node.x + 7} ${node.y + 4} Z`} />
      <path d={`M ${node.x + 7} ${node.y + 4} Q ${node.x + 24} ${node.y + 28} ${node.x + 7} ${node.y + 52}`} fill="none" stroke="#cbd5e1" strokeWidth="2" />
      <text className="schemio-visualizer__gate-text" x={node.x + 36} y={node.y + 32}>OR</text>
    </>
  );
}

function DiagramNode({ node, value }: { node: VisualNode; value: SignalValue | undefined }) {
  let shape;
  if (node.kind === "gate") {
    shape = <GateShape node={node} value={value} />;
  } else if (node.kind === "constant") {
    shape = (
      <>
        <circle cx={node.x + 28} cy={node.y + 28} fill={nodeFill(value)} r="24" stroke="#cbd5e1" strokeWidth="2" />
        <text className="schemio-visualizer__constant-text" x={node.x + 28} y={node.y + 34}>{node.label}</text>
      </>
    );
  } else {
    shape = (
      <>
        <rect className="schemio-visualizer__port" fill={nodeFill(value)} height="42" rx="8" width="82" x={node.x + 5} y={node.y + 7} />
        <text className="schemio-visualizer__port-text" x={node.x + 46} y={node.y + 33}>{node.label}</text>
      </>
    );
  }
  return (
    <g data-node-id={node.id} data-node-kind={node.kind}>
      {shape}
    </g>
  );
}

export function SchemioSignalVisualizer({ model, inputs, testName, onClose }: SchemioSignalVisualizerProps) {
  const [transistorDelay, setTransistorDelay] = useState(120);
  const [nodeValues, setNodeValues] = useState<Record<string, SignalValue>>({});
  const [wireValues, setWireValues] = useState<Record<string, SignalValue>>({});
  const [transform, setTransform] = useState(() => fitTransform(model));
  const [running, setRunning] = useState(false);
  const timers = useRef<number[]>([]);
  const drag = useRef<{ pointerId: number; x: number; y: number } | null>(null);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);
  const reset = useCallback(() => {
    clearTimers();
    setNodeValues({});
    setWireValues({});
    setRunning(false);
  }, [clearTimers]);
  const fitDiagram = useCallback(() => setTransform(fitTransform(model)), [model]);

  useEffect(() => {
    reset();
    fitDiagram();
  }, [fitDiagram, reset]);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      clearTimers();
    };
  }, [clearTimers, onClose]);

  const simulate = () => {
    reset();
    setRunning(true);
    const timeline = buildSimulationTimeline(model, inputs);
    const finalTime = timeline.at(-1)?.time ?? 0;
    for (const event of timeline) {
      timers.current.push(
        window.setTimeout(() => {
          if (event.target === "node") {
            setNodeValues((current) => ({ ...current, [event.id]: event.value }));
          } else {
            setWireValues((current) => ({ ...current, [event.id]: event.value }));
          }
        }, event.time * transistorDelay),
      );
    }
    timers.current.push(window.setTimeout(() => setRunning(false), finalTime * transistorDelay + 180));
  };

  const nodeById = new Map(model.nodes.map((node) => [node.id, node]));
  return (
    <div className="schemio-visualizer" role="dialog" aria-label={`Signal visualizer for ${testName}`} aria-modal="true">
      <div className="schemio-visualizer__panel">
        <header className="schemio-visualizer__header">
          <div>
            <h3>Signal visualizer</h3>
            <p>{testName}. Black means the signal has not reached that part of the scheme yet.</p>
          </div>
          <button className="schemio-visualizer__close" onClick={onClose} type="button">Close</button>
        </header>
        <div className="schemio-visualizer__controls">
          <button className="schemio-visualizer__primary" disabled={running} onClick={simulate} type="button">Simulate</button>
          <button onClick={reset} type="button">Reset</button>
          <button onClick={fitDiagram} type="button">Fit diagram</button>
          <label>
            Transistor delay: <strong>{transistorDelay} ms</strong>
            <input aria-label="Transistor delay" max="400" min="40" onChange={(event) => setTransistorDelay(Number(event.target.value))} step="10" type="range" value={transistorDelay} />
          </label>
        </div>
        <svg
          className="schemio-visualizer__canvas"
          onPointerDown={(event) => {
            drag.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!drag.current || drag.current.pointerId !== event.pointerId) {
              return;
            }
            const rect = event.currentTarget.getBoundingClientRect();
            const scale = VIEWPORT_WIDTH / rect.width;
            const deltaX = (event.clientX - drag.current.x) * scale;
            const deltaY = (event.clientY - drag.current.y) * scale;
            drag.current = { ...drag.current, x: event.clientX, y: event.clientY };
            setTransform((current) => ({ ...current, x: current.x + deltaX, y: current.y + deltaY }));
          }}
          onPointerUp={() => {
            drag.current = null;
          }}
          onWheel={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const pointerX = ((event.clientX - rect.left) / rect.width) * VIEWPORT_WIDTH;
            const pointerY = ((event.clientY - rect.top) / rect.height) * VIEWPORT_HEIGHT;
            setTransform((current) => {
              const nextScale = Math.max(0.08, Math.min(3, current.scale * (event.deltaY < 0 ? 1.12 : 0.88)));
              return {
                scale: nextScale,
                x: pointerX - ((pointerX - current.x) * nextScale) / current.scale,
                y: pointerY - ((pointerY - current.y) * nextScale) / current.scale,
              };
            });
          }}
          viewBox={`0 0 ${VIEWPORT_WIDTH} ${VIEWPORT_HEIGHT}`}
        >
          <g transform={`translate(${transform.x} ${transform.y}) scale(${transform.scale})`}>
            {model.frames.map((frame) => (
              <g key={frame.id}>
                <rect className="schemio-visualizer__frame" height={frame.height} rx="14" width={frame.width} x={frame.x} y={frame.y} />
                <text className="schemio-visualizer__frame-label" x={frame.x + 12} y={frame.y + 20}>{frame.label}</text>
              </g>
            ))}
            {model.wires.map((wire) => {
              const value = wireValues[wire.id];
              return <path className={value === undefined ? "schemio-visualizer__wire" : "schemio-visualizer__wire schemio-visualizer__wire--active"} d={wirePath(nodeById.get(wire.from)!, nodeById.get(wire.to)!)} key={wire.id} stroke={value === undefined ? "#334155" : SIGNAL_COLORS[value]} />;
            })}
            {model.nodes.map((node) => <DiagramNode key={node.id} node={node} value={nodeValues[node.id]} />)}
          </g>
        </svg>
        <p className="schemio-visualizer__hint">Scroll to zoom. Drag the diagram to move around.</p>
      </div>
    </div>
  );
}
