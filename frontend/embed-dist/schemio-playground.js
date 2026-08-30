const s = ":host{color:#e2e8f0;display:block;font-family:Segoe UI,Helvetica Neue,sans-serif}*{box-sizing:border-box}.schemio-playground{background:#0f172a;border:1px solid #334155;border-radius:18px;padding:20px}.schemio-playground__header,.schemio-playground__debugger-title{align-items:start;display:flex;gap:16px;justify-content:space-between}.schemio-playground h2,.schemio-playground h3,.schemio-playground h4,.schemio-playground p{margin:0}.schemio-playground h2{font-size:1.25rem}.schemio-playground h3{font-size:1rem}.schemio-playground h4{color:#cbd5e1;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase}.schemio-playground__header p,.schemio-playground__debugger-title p,.schemio-playground__storage{color:#94a3b8;font-size:.88rem;margin-top:4px}.schemio-playground__reset{background:#1e293b;border:1px solid #475569;border-radius:9px;color:#f8fafc;cursor:pointer;font:inherit;padding:8px 10px}.schemio-playground__reset:hover{background:#334155}.schemio-playground__editor{border:1px solid #334155;border-radius:12px;margin-top:18px;overflow:hidden}.schemio-playground__diagnostics,.schemio-playground__debugger{background:#172033;border-radius:12px;margin-top:16px;padding:14px}.schemio-playground__diagnostics ul{color:#fecaca;margin:10px 0 0;padding-left:20px}.schemio-playground__success{color:#86efac;font-size:.9rem;margin-top:8px!important}.schemio-playground__blocked{color:#cbd5e1;margin-top:14px!important}.schemio-playground__signals{display:grid;gap:14px;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:14px}.schemio-playground__signal-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:9px}.schemio-playground__bit{align-items:center;background:#020617;border:1px solid #334155;border-radius:9px;color:#f8fafc;display:flex;flex-direction:column;font:inherit;min-width:72px;padding:8px 12px}button.schemio-playground__bit{cursor:pointer}.schemio-playground__bit--on{background:#34d399;border-color:#6ee7b7;color:#052e2b}.schemio-playground__bit span{font-size:.75rem;opacity:.72}.schemio-playground__bit strong{font-size:1.3rem}.schemio-playground__output{background:#111827}.schemio-playground__storage{margin-top:14px!important}@media(max-width:600px){.schemio-playground{border-radius:12px;padding:14px}.schemio-playground__header,.schemio-playground__debugger-title{flex-direction:column}.schemio-playground__signals{grid-template-columns:1fr}}", a = `scheme (a b) xor (out):
 local either both not_both
 (a b) or (either)
 (a b) and (both)
 (both) not (not_both)
 (either not_both) and (out)
end
`;
function d(n) {
  const e = n.querySelector(':scope > script[type="text/plain"]');
  return e?.textContent ? e.textContent.replace(/^\s*\n/, "").trimEnd() + `
` : a;
}
function l(n) {
  return Array.from(document.querySelectorAll("schemio-playground")).indexOf(n);
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
      const r = this.attachShadow({ mode: "open" }), t = document.createElement("style");
      t.textContent = s, this.host = document.createElement("div"), r.append(t, this.host);
    }
    const e = this.host;
    e.textContent = "Loading Schemio playground…";
    const o = () => {
      this.loaded || (this.loaded = !0, this.observer?.disconnect(), this.mount(e));
    };
    this.getBoundingClientRect().top <= window.innerHeight + 320 || !("IntersectionObserver" in window) ? o() : (this.observer = new IntersectionObserver((r) => {
      r.some((t) => t.isIntersecting) && o();
    }, { rootMargin: "320px" }), this.observer.observe(this));
  }
  disconnectedCallback() {
    this.observer?.disconnect(), this.observer = null, this.cleanup?.(), this.cleanup = null, this.loaded = !1;
  }
  async mount(e) {
    try {
      const { mountSchemioPlayground: o } = await import("./chunks/SchemioPlaygroundMount-DdNsPNrS.js"), i = this.getAttribute("storage-key") ?? `schemio-playground:${window.location.pathname}:${this.id || l(this)}`;
      this.cleanup = o(e, {
        initialSource: d(this),
        storageKey: i,
        persist: this.getAttribute("storage") !== "off",
        readOnly: this.hasAttribute("readonly"),
        onSourceChange: (r, t) => {
          this.dispatchEvent(new CustomEvent("schemio-change", { bubbles: !0, composed: !0, detail: { source: r, isValid: t } }));
        }
      }).unmount;
    } catch (o) {
      e.textContent = "Schemio playground could not load. Please reload the page.", console.error("Could not load the Schemio playground.", o);
    }
  }
}
customElements.get("schemio-playground") || customElements.define("schemio-playground", c);
