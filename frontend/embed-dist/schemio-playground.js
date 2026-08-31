const a = ":host{color:#e2e8f0;display:block;font-family:Segoe UI,Helvetica Neue,sans-serif}*{box-sizing:border-box}.schemio-playground{background:#0f172a;border:1px solid #334155;border-radius:18px;padding:20px}.schemio-playground__header,.schemio-playground__debugger-title{align-items:start;display:flex;gap:16px;justify-content:space-between}.schemio-playground h2,.schemio-playground h3,.schemio-playground h4,.schemio-playground p{margin:0}.schemio-playground h2{font-size:1.25rem}.schemio-playground h3{font-size:1rem}.schemio-playground h4{color:#cbd5e1;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase}.schemio-playground__header p,.schemio-playground__debugger-title p{color:#94a3b8;font-size:.88rem;margin-top:4px}.schemio-playground__reset{background:#1e293b;border:1px solid #475569;border-radius:9px;color:#f8fafc;cursor:pointer;font:inherit;padding:8px 10px}.schemio-playground__reset:hover{background:#334155}.schemio-playground__editor{border:1px solid #334155;border-radius:12px;margin-top:18px;overflow:hidden}.schemio-playground__editor .cm-editor{height:auto;min-height:4.8rem}.schemio-playground__editor .cm-scroller{overflow:visible!important}.schemio-playground__editor .cm-content{padding-bottom:8px}.schemio-playground__diagnostics,.schemio-playground__debugger{background:#172033;border-radius:12px;margin-top:16px;padding:14px}.schemio-playground__diagnostics ul{color:#fecaca;margin:10px 0 0;padding-left:20px}.schemio-playground__blocked{color:#cbd5e1;margin-top:14px!important}.schemio-playground__test-actions{align-items:center;display:flex;justify-content:space-between;margin-top:14px}.schemio-playground__add-test,.schemio-playground__remove-test,.schemio-playground__visualize-test{background:#1e293b;border:1px solid #475569;border-radius:7px;color:#f8fafc;cursor:pointer;font:inherit;font-size:.78rem;padding:5px 8px}.schemio-playground__add-test:hover,.schemio-playground__remove-test:hover,.schemio-playground__visualize-test:hover{background:#334155}.schemio-playground__visualize-test{border-color:#2dd4bf;color:#99f6e4}.schemio-playground__test-header,.schemio-playground__test-case{display:grid;gap:10px;grid-template-columns:3.5rem minmax(0,1fr) minmax(0,1fr) auto}.schemio-playground__test-header{color:#94a3b8;font-size:.7rem;font-weight:700;letter-spacing:.07em;margin-top:12px;text-transform:uppercase}.schemio-playground__test-list{display:grid;gap:7px;margin-top:7px}.schemio-playground__test-case{align-items:center;background:#111827;border-radius:8px;padding:7px}.schemio-playground__test-number{color:#cbd5e1;font-size:.78rem;font-weight:600}.schemio-playground__signal-list{display:flex;flex-wrap:wrap;gap:5px}.schemio-playground__bit{align-items:center;background:#020617;border:1px solid #334155;border-radius:6px;color:#f8fafc;display:inline-flex;font:inherit;gap:6px;min-width:0;padding:4px 7px}button.schemio-playground__bit{cursor:pointer}.schemio-playground__bit--on{background:#34d399;border-color:#6ee7b7;color:#052e2b}.schemio-playground__bit span{font-size:.72rem;opacity:.72}.schemio-playground__bit strong{font-size:.9rem}.schemio-playground__output{background:#111827}@media(max-width:600px){.schemio-playground{border-radius:12px;padding:14px}.schemio-playground__header,.schemio-playground__debugger-title{flex-direction:column}.schemio-playground__test-header{display:none}.schemio-playground__test-case{grid-template-columns:1fr}.schemio-playground__signal-list:before{color:#94a3b8;content:attr(aria-label);font-size:.7rem;width:100%}}.schemio-visualizer{align-items:center;background:#020617d6;display:flex;inset:0;justify-content:center;padding:18px;position:fixed;z-index:20}.schemio-visualizer__panel{background:#0f172a;border:1px solid #475569;border-radius:16px;box-shadow:0 24px 70px #00000073;display:flex;flex-direction:column;height:min(820px,94vh);max-width:1500px;padding:16px;width:min(1500px,98vw)}.schemio-visualizer__header{align-items:start;display:flex;gap:16px;justify-content:space-between}.schemio-visualizer h3,.schemio-visualizer p{margin:0}.schemio-visualizer h3{font-size:1.1rem}.schemio-visualizer__header p,.schemio-visualizer__hint{color:#94a3b8;font-size:.82rem;margin-top:4px}.schemio-visualizer__close,.schemio-visualizer__controls button{background:#1e293b;border:1px solid #475569;border-radius:7px;color:#f8fafc;cursor:pointer;font:inherit;font-size:.82rem;padding:7px 10px}.schemio-visualizer__controls button:disabled{cursor:wait;opacity:.55}.schemio-visualizer__primary{background:#0f766e!important;border-color:#2dd4bf!important}.schemio-visualizer__controls{align-items:center;display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}.schemio-visualizer__controls label{align-items:center;color:#cbd5e1;display:flex;font-size:.78rem;gap:6px;margin-left:auto}.schemio-visualizer__controls input{accent-color:#2dd4bf;width:130px}.schemio-visualizer__canvas{background:#020617;border:1px solid #334155;border-radius:10px;cursor:grab;flex:1;min-height:0;touch-action:none;width:100%}.schemio-visualizer__canvas:active{cursor:grabbing}.schemio-visualizer__frame{fill:#0f766e1a;stroke:#2dd4bf;stroke-dasharray:7 5;stroke-width:2}.schemio-visualizer__frame-label{fill:#99f6e4;font-family:Segoe UI,sans-serif;font-size:15px;font-weight:700}.schemio-visualizer__wire{fill:none;stroke-linecap:round;stroke-width:4}.schemio-visualizer__wire--active{animation:schemio-signal-travel .18s ease-out both}.schemio-visualizer__gate-text,.schemio-visualizer__constant-text,.schemio-visualizer__port-text{dominant-baseline:middle;fill:#e2e8f0;font-family:Segoe UI,sans-serif;font-size:11px;font-weight:700;text-anchor:middle}.schemio-visualizer__constant-text{font-size:19px}.schemio-visualizer__port{stroke:#cbd5e1;stroke-width:2}.schemio-visualizer__hint{margin-top:8px}@keyframes schemio-signal-travel{0%{stroke-dasharray:1000;stroke-dashoffset:1000}to{stroke-dasharray:1000;stroke-dashoffset:0}}@media(max-width:600px){.schemio-visualizer{padding:6px}.schemio-visualizer__panel{border-radius:10px;height:98vh;padding:10px;width:100vw}.schemio-visualizer__header{align-items:stretch;flex-direction:column}.schemio-visualizer__controls label{margin-left:0;width:100%}}", n = `scheme (a b) xor (out):
 local either both not_both
 (a b) or (either)
 (a b) and (both)
 (both) not (not_both)
 (either not_both) and (out)
end
`;
function d(r) {
  const e = r.querySelector(':scope > script[type="text/plain"]');
  return e?.textContent ? e.textContent.replace(/^\s*\n/, "").trimEnd() + `
` : n;
}
function l(r) {
  return Array.from(document.querySelectorAll("schemio-playground")).indexOf(r);
}
class c extends HTMLElement {
  cleanup = null;
  host = null;
  observer = null;
  loaded = !1;
  connectedCallback() {
    if (this.loaded)
      return;
    if (!this.shadowRoot) {
      const t = this.attachShadow({ mode: "open" }), i = document.createElement("style");
      i.textContent = a, this.host = document.createElement("div"), t.append(i, this.host);
    }
    const e = this.host;
    e.textContent = "Loading Schemio playground…";
    const o = () => {
      this.loaded || (this.loaded = !0, this.observer?.disconnect(), this.mount(e));
    };
    this.getBoundingClientRect().top <= window.innerHeight + 320 || !("IntersectionObserver" in window) ? o() : (this.observer = new IntersectionObserver((t) => {
      t.some((i) => i.isIntersecting) && o();
    }, { rootMargin: "320px" }), this.observer.observe(this));
  }
  disconnectedCallback() {
    this.observer?.disconnect(), this.observer = null, this.cleanup?.(), this.cleanup = null, this.loaded = !1;
  }
  async mount(e) {
    try {
      const { mountSchemioPlayground: o } = await import("./chunks/SchemioPlaygroundMount-CHV3XjGt.js"), s = this.getAttribute("storage-key") ?? `schemio-playground:${window.location.pathname}:${this.id || l(this)}`;
      this.cleanup = o(e, {
        initialSource: d(this),
        storageKey: s,
        persist: this.getAttribute("storage") !== "off",
        readOnly: this.hasAttribute("readonly"),
        onSourceChange: (t, i) => {
          this.dispatchEvent(new CustomEvent("schemio-change", { bubbles: !0, composed: !0, detail: { source: t, isValid: i } }));
        }
      }).unmount;
    } catch (o) {
      e.textContent = "Schemio playground could not load. Please reload the page.", console.error("Could not load the Schemio playground.", o);
    }
  }
}
customElements.get("schemio-playground") || customElements.define("schemio-playground", c);
