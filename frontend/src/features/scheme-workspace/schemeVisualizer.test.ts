/*
This file tests the pure graph and timed-event model behind the Schemio signal visualizer.
Edit it when gate delays, helper expansion, or visual graph connections change.
Copy it when another teaching diagram needs deterministic model tests before browser rendering.
*/

import { describe, expect, it } from "vitest";
import { buildSchemeVisualization, buildSimulationTimeline } from "./schemeVisualizer";

const helperSource = `scheme (a b) main (out):
 local inverted
 (a b) helper (inverted)
 (inverted) not (out)
end

scheme (x y) helper (result):
 local both
 (x y) and (both)
 (both) not (result)
end
`;

describe("scheme visualizer model", () => {
  it("expands every helper call into a framed graph with connected gates", () => {
    const model = buildSchemeVisualization(helperSource);

    expect(model).not.toBeNull();
    expect(model!.frames.map((frame) => frame.label)).toEqual(["helper"]);
    expect(model!.nodes.filter((node) => node.kind === "gate").map((node) => node.gate)).toEqual(["and", "not", "not"]);
    expect(model!.wires.length).toBeGreaterThan(5);
    expect(model!.bounds.width).toBeGreaterThan(300);
  });

  it("uses constant sources and the configured gate stage counts", () => {
    const constants = buildSchemeVisualization(`scheme () main (low high):
 () zero (low)
 () one (high)
end
`);
    const model = buildSchemeVisualization(helperSource)!;
    const timeline = buildSimulationTimeline(model, { a: 1, b: 1 });
    const gateEvents = timeline.filter((event) => event.target === "node" && model.nodes.find((node) => node.id === event.id)?.kind === "gate");

    expect(constants!.nodes.filter((node) => node.kind === "constant").map((node) => node.value)).toEqual([0, 1]);
    expect(gateEvents.map((event) => event.time)).toEqual([2, 3, 4]);
    expect(gateEvents.map((event) => event.value)).toEqual([1, 0, 1]);
  });

  it("does not build a graph for invalid source text", () => {
    expect(buildSchemeVisualization("scheme () broken ():")) .toBeNull();
  });
});
