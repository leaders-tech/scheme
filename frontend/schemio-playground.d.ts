/* This file describes the browser-facing Schemio playground package.
   Edit it when the custom element's public tag or event details change.
   Copy it when another web-component package needs a small TypeScript API. */

export type SchemioChangeDetail = {
  source: string;
  isValid: boolean;
};

declare global {
  interface HTMLElementTagNameMap {
    "schemio-playground": HTMLElement;
  }

  interface HTMLElementEventMap {
    "schemio-change": CustomEvent<SchemioChangeDetail>;
  }
}
