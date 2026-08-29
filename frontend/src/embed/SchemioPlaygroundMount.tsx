/*
This file mounts the Schemio playground React tree into a web component shadow root.
Edit it when the standalone component needs another React lifecycle boundary.
Copy it when another web component wraps a small React feature.
*/

import { createRoot } from "react-dom/client";
import { SchemioPlayground, type SchemioPlaygroundProps } from "./SchemioPlaygroundApp";

export function mountSchemioPlayground(host: HTMLElement, options: SchemioPlaygroundProps) {
  const root = createRoot(host);
  root.render(<SchemioPlayground {...options} />);
  return { unmount: () => root.unmount() };
}
