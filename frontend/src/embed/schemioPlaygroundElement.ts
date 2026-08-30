/*
This file registers the standalone <schemio-playground> web component.
Edit it when the public HTML API, lazy loading, or browser events change.
Copy it when another Island page needs an independently deployable widget.
*/

import playgroundStyles from "./schemioPlayground.css?inline";

const DEFAULT_SOURCE = `scheme (a b) xor (out):
 local either both not_both
 (a b) or (either)
 (a b) and (both)
 (both) not (not_both)
 (either not_both) and (out)
end
`;

type PlaygroundMount = {
  unmount: () => void;
};

type MountPlayground = (host: HTMLElement, options: {
  initialSource: string;
  storageKey: string;
  persist: boolean;
  readOnly: boolean;
  onSourceChange: (source: string, isValid: boolean) => void;
}) => PlaygroundMount;

function sourceFromElement(element: HTMLElement) {
  const sourceNode = element.querySelector(':scope > script[type="text/plain"]');
  if (sourceNode?.textContent) {
    return sourceNode.textContent.replace(/^\s*\n/, "").trimEnd() + "\n";
  }
  return DEFAULT_SOURCE;
}

function elementPosition(element: HTMLElement) {
  return Array.from(document.querySelectorAll("schemio-playground")).indexOf(element);
}

class SchemioPlaygroundElement extends HTMLElement {
  private cleanup: (() => void) | null = null;
  private host: HTMLElement | null = null;
  private observer: IntersectionObserver | null = null;
  private loaded = false;

  connectedCallback() {
    if (this.loaded) {
      return;
    }
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = playgroundStyles;
      this.host = document.createElement("div");
      shadow.append(style, this.host);
    }
    const host = this.host!;
    host.textContent = "Loading Schemio playground…";

    const load = () => {
      if (this.loaded) {
        return;
      }
      this.loaded = true;
      this.observer?.disconnect();
      void this.mount(host);
    };

    const isNearViewport = this.getBoundingClientRect().top <= window.innerHeight + 320;
    if (isNearViewport || !("IntersectionObserver" in window)) {
      load();
    } else {
      this.observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          load();
        }
      }, { rootMargin: "320px" });
      this.observer.observe(this);
    }
  }

  disconnectedCallback() {
    this.observer?.disconnect();
    this.observer = null;
    this.cleanup?.();
    this.cleanup = null;
    this.loaded = false;
  }

  private async mount(host: HTMLElement) {
    try {
      const { mountSchemioPlayground } = (await import("./SchemioPlaygroundMount")) as { mountSchemioPlayground: MountPlayground };
      const storageKey = this.getAttribute("storage-key") ?? `schemio-playground:${window.location.pathname}:${this.id || elementPosition(this)}`;
      this.cleanup = mountSchemioPlayground(host, {
        initialSource: sourceFromElement(this),
        storageKey,
        persist: this.getAttribute("storage") !== "off",
        readOnly: this.hasAttribute("readonly"),
        onSourceChange: (source, isValid) => {
          this.dispatchEvent(new CustomEvent("schemio-change", { bubbles: true, composed: true, detail: { source, isValid } }));
        },
      }).unmount;
    } catch (error) {
      host.textContent = "Schemio playground could not load. Please reload the page.";
      console.error("Could not load the Schemio playground.", error);
    }
  }
}

if (!customElements.get("schemio-playground")) {
  customElements.define("schemio-playground", SchemioPlaygroundElement);
}
