/*
This file turns a valid Schemio program into a drawable logic graph and timed signal events.
Edit it when visual gates, layout, or the teaching delay model changes.
Copy its pure-model approach for another diagram that needs deterministic browser animation.
*/

import { getValidParsedScheme, type ParsedFile, type SchemeNode } from "./schemeLanguage";

export type SignalValue = 0 | 1;
export type GateKind = "and" | "or" | "not";
export type VisualNodeKind = "input" | "output" | "gate" | "constant";

export type VisualNode = {
  id: string;
  kind: VisualNodeKind;
  label: string;
  gate?: GateKind;
  value?: SignalValue;
  inputCount: number;
  isSource: boolean;
  inputName?: string;
  x: number;
  y: number;
};

export type VisualWire = {
  id: string;
  from: string;
  to: string;
};

export type VisualFrame = {
  id: string;
  label: string;
  nodeIds: string[];
  x: number;
  y: number;
  width: number;
  height: number;
};

export type VisualBounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type SchemeVisualization = {
  nodes: VisualNode[];
  wires: VisualWire[];
  frames: VisualFrame[];
  inputNodeIds: Record<string, string>;
  bounds: VisualBounds;
};

export type SimulationEvent = {
  time: number;
  target: "node" | "wire";
  id: string;
  value: SignalValue;
};

type Instance = {
  inputIds: Record<string, string>;
  outputIds: Record<string, string>;
};

type StatementTarget = {
  inputIds: string[];
  outputIds: string[];
};

const NODE_WIDTH = 92;
const NODE_HEIGHT = 56;
const LAYER_GAP = 164;
const ROW_GAP = 88;
const FRAME_PADDING = 30;

const BUILTIN_DELAYS: Record<GateKind, number> = {
  not: 1,
  and: 2,
  or: 2,
};

function getScheme(parsed: ParsedFile, name: string) {
  const scheme = parsed.schemes.find((item) => item.name.name === name);
  if (!scheme) {
    throw new Error(`Scheme ${name} was not found.`);
  }
  return scheme;
}

function isGate(name: string): name is GateKind {
  return name === "and" || name === "or" || name === "not";
}

export function buildSchemeVisualization(source: string): SchemeVisualization | null {
  const parsed = getValidParsedScheme(source);
  if (!parsed?.schemes[0]) {
    return null;
  }

  const nodes: VisualNode[] = [];
  const wires: VisualWire[] = [];
  const frames: VisualFrame[] = [];
  let nextId = 1;

  const createId = (prefix: string) => `${prefix}-${nextId++}`;
  const addNode = (node: Omit<VisualNode, "id" | "x" | "y">) => {
    const id = createId("node");
    nodes.push({ ...node, id, x: 0, y: 0 });
    return id;
  };
  const addWire = (from: string, to: string) => {
    wires.push({ id: createId("wire"), from, to });
  };

  const buildInstance = (scheme: SchemeNode, isMain: boolean): Instance => {
    const startNodeIndex = nodes.length;
    const inputIds = Object.fromEntries(
      scheme.inputs.items.map((signal) => [
        signal.name,
        addNode({
          kind: "input",
          label: signal.name,
          inputCount: isMain ? 0 : 1,
          isSource: isMain,
          inputName: isMain ? signal.name : undefined,
        }),
      ]),
    ) as Record<string, string>;
    const outputIds = Object.fromEntries(
      scheme.outputs.items.map((signal) => [
        signal.name,
        addNode({ kind: "output", label: signal.name, inputCount: 1, isSource: false }),
      ]),
    ) as Record<string, string>;
    const producers = new Map<string, string>(Object.entries(inputIds));
    const statementTargets: StatementTarget[] = [];

    for (const statement of scheme.statements) {
      if (isGate(statement.callee.name)) {
        const gateId = addNode({
          kind: "gate",
          label: statement.callee.name.toUpperCase(),
          gate: statement.callee.name,
          inputCount: statement.inputs.items.length,
          isSource: false,
        });
        statement.outputs.items.forEach((signal) => producers.set(signal.name, gateId));
        statementTargets.push({ inputIds: statement.inputs.items.map(() => gateId), outputIds: statement.outputs.items.map(() => gateId) });
        continue;
      }
      if (statement.callee.name === "zero" || statement.callee.name === "one") {
        const value: SignalValue = statement.callee.name === "one" ? 1 : 0;
        const constantId = addNode({ kind: "constant", label: String(value), value, inputCount: 0, isSource: true });
        statement.outputs.items.forEach((signal) => producers.set(signal.name, constantId));
        statementTargets.push({ inputIds: [], outputIds: statement.outputs.items.map(() => constantId) });
        continue;
      }

      const helper = buildInstance(getScheme(parsed, statement.callee.name), false);
      statement.outputs.items.forEach((signal, index) => producers.set(signal.name, helper.outputIds[getScheme(parsed, statement.callee.name).outputs.items[index].name]));
      statementTargets.push({
        inputIds: getScheme(parsed, statement.callee.name).inputs.items.map((signal) => helper.inputIds[signal.name]),
        outputIds: statement.outputs.items.map((signal) => producers.get(signal.name)!),
      });
    }

    for (const signal of [...scheme.locals, ...scheme.outputs.items]) {
      if (producers.has(signal.name)) {
        continue;
      }
      const implicitZero = addNode({ kind: "constant", label: "0", value: 0, inputCount: 0, isSource: true });
      producers.set(signal.name, implicitZero);
    }

    scheme.statements.forEach((statement, index) => {
      const target = statementTargets[index];
      statement.inputs.items.forEach((signal, signalIndex) => {
        const producer = producers.get(signal.name);
        const input = target.inputIds[signalIndex];
        if (producer && input) {
          addWire(producer, input);
        }
      });
    });
    scheme.outputs.items.forEach((signal) => {
      const producer = producers.get(signal.name);
      if (producer) {
        addWire(producer, outputIds[signal.name]);
      }
    });

    if (!isMain) {
      const nodeIds = nodes.slice(startNodeIndex).map((node) => node.id);
      frames.push({ id: createId("frame"), label: scheme.name.name, nodeIds, x: 0, y: 0, width: 0, height: 0 });
    }
    return { inputIds, outputIds };
  };

  const mainScheme = parsed.schemes[0];
  const main = buildInstance(mainScheme, true);
  const laidOutNodes = layoutNodes(nodes, wires);
  const laidOutFrames = layoutFrames(frames, laidOutNodes);
  const bounds = findBounds(laidOutNodes, laidOutFrames);
  return { nodes: laidOutNodes, wires, frames: laidOutFrames, inputNodeIds: main.inputIds, bounds };
}

function layoutNodes(nodes: VisualNode[], wires: VisualWire[]) {
  const inbound = new Map<string, string[]>();
  for (const node of nodes) {
    inbound.set(node.id, []);
  }
  for (const wire of wires) {
    inbound.get(wire.to)?.push(wire.from);
  }
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const depths = new Map<string, number>();
  const visiting = new Set<string>();
  const depthFor = (id: string): number => {
    if (depths.has(id)) {
      return depths.get(id)!;
    }
    if (visiting.has(id)) {
      return 0;
    }
    visiting.add(id);
    const next = Math.max(0, ...(inbound.get(id) ?? []).map((from) => depthFor(from) + 1));
    visiting.delete(id);
    depths.set(id, next);
    return next;
  };
  const layers = new Map<number, VisualNode[]>();
  for (const node of nodes) {
    const depth = depthFor(node.id);
    const layer = layers.get(depth) ?? [];
    layer.push(node);
    layers.set(depth, layer);
  }
  return nodes.map((node) => {
    const layer = layers.get(depths.get(node.id) ?? 0)!;
    const row = layer.findIndex((item) => item.id === node.id);
    return { ...node, x: 60 + (depths.get(node.id) ?? 0) * LAYER_GAP, y: 60 + row * ROW_GAP };
  });
}

function layoutFrames(frames: VisualFrame[], nodes: VisualNode[]) {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  return frames
    .map((frame) => {
      const members = frame.nodeIds.map((id) => byId.get(id)).filter((node): node is VisualNode => Boolean(node));
      const minX = Math.min(...members.map((node) => node.x));
      const minY = Math.min(...members.map((node) => node.y));
      const maxX = Math.max(...members.map((node) => node.x + NODE_WIDTH));
      const maxY = Math.max(...members.map((node) => node.y + NODE_HEIGHT));
      return {
        ...frame,
        x: minX - FRAME_PADDING,
        y: minY - FRAME_PADDING - 18,
        width: maxX - minX + FRAME_PADDING * 2,
        height: maxY - minY + FRAME_PADDING * 2 + 18,
      };
    })
    .sort((left, right) => right.nodeIds.length - left.nodeIds.length);
}

function findBounds(nodes: VisualNode[], frames: VisualFrame[]): VisualBounds {
  const right = Math.max(...nodes.map((node) => node.x + NODE_WIDTH), ...frames.map((frame) => frame.x + frame.width), 600);
  const bottom = Math.max(...nodes.map((node) => node.y + NODE_HEIGHT), ...frames.map((frame) => frame.y + frame.height), 360);
  return { x: 0, y: 0, width: right + 60, height: bottom + 60 };
}

export function buildSimulationTimeline(model: SchemeVisualization, inputs: Record<string, SignalValue>): SimulationEvent[] {
  const nodes = new Map(model.nodes.map((node) => [node.id, node]));
  const outgoing = new Map<string, VisualWire[]>();
  const incoming = new Map<string, VisualWire[]>();
  for (const wire of model.wires) {
    outgoing.set(wire.from, [...(outgoing.get(wire.from) ?? []), wire]);
    incoming.set(wire.to, [...(incoming.get(wire.to) ?? []), wire]);
  }

  const timeline: Array<SimulationEvent & { order: number }> = [];
  const received = new Map<string, Map<string, SignalValue>>();
  const scheduledGates = new Set<string>();
  let order = 0;
  const add = (event: SimulationEvent) => timeline.push({ ...event, order: order++ });
  const scheduleOutgoing = (nodeId: string, value: SignalValue, time: number) => {
    for (const wire of outgoing.get(nodeId) ?? []) {
      add({ time, target: "wire", id: wire.id, value });
    }
  };

  for (const node of model.nodes) {
    if (!node.isSource) {
      continue;
    }
    const value = node.kind === "constant" ? node.value ?? 0 : inputs[node.inputName ?? ""] ?? 0;
    add({ time: 0, target: "node", id: node.id, value });
  }

  for (let cursor = 0; cursor < timeline.length; cursor += 1) {
    timeline.sort((left, right) => left.time - right.time || left.order - right.order);
    const event = timeline[cursor];
    if (event.target === "node") {
      scheduleOutgoing(event.id, event.value, event.time);
      continue;
    }
    const wire = model.wires.find((item) => item.id === event.id)!;
    const target = nodes.get(wire.to)!;
    if (target.kind !== "gate") {
      add({ time: event.time, target: "node", id: target.id, value: event.value });
      continue;
    }
    const inputsForGate = received.get(target.id) ?? new Map<string, SignalValue>();
    inputsForGate.set(wire.id, event.value);
    received.set(target.id, inputsForGate);
    if (inputsForGate.size < target.inputCount || scheduledGates.has(target.id)) {
      continue;
    }
    scheduledGates.add(target.id);
    const values = (incoming.get(target.id) ?? []).map((inputWire) => inputsForGate.get(inputWire.id) ?? 0);
    const value: SignalValue = target.gate === "not" ? (values[0] === 1 ? 0 : 1) : target.gate === "and" ? (values.every((item) => item === 1) ? 1 : 0) : (values.some((item) => item === 1) ? 1 : 0);
    add({ time: event.time + BUILTIN_DELAYS[target.gate!], target: "node", id: target.id, value });
  }
  return timeline.sort((left, right) => left.time - right.time || left.order - right.order).map(({ order: _order, ...event }) => event);
}

export const SIGNAL_COLORS: Record<SignalValue, string> = { 0: "#f87171", 1: "#4ade80" };
