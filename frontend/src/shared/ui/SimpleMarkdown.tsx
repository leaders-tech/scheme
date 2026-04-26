/*
This file renders a small markdown subset for task statements without extra dependencies.
Edit this file when statement markdown rendering rules or styles change.
Copy this file as a starting point when you need another tiny rich-text renderer.
*/

import type { ReactNode } from "react";

type MarkdownBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; level: 1 | 2 | 3; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "code"; text: string };

type InlineMarkdownPart = { kind: "text"; text: string } | { kind: "code"; text: string };

function parseMarkdown(source: string): MarkdownBlock[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      index += 1;
      const codeLines: string[] = [];
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) {
        index += 1;
      }
      blocks.push({ kind: "code", text: codeLines.join("\n") });
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push({ kind: "heading", level: 3, text: trimmed.slice(4).trim() });
      index += 1;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      blocks.push({ kind: "heading", level: 2, text: trimmed.slice(3).trim() });
      index += 1;
      continue;
    }
    if (trimmed.startsWith("# ")) {
      blocks.push({ kind: "heading", level: 1, text: trimmed.slice(2).trim() });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2).trim());
        index += 1;
      }
      blocks.push({ kind: "list", items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const paragraphLine = lines[index].trim();
      if (!paragraphLine || paragraphLine.startsWith("#") || paragraphLine.startsWith("- ") || paragraphLine.startsWith("```")) {
        break;
      }
      paragraphLines.push(paragraphLine);
      index += 1;
    }
    blocks.push({ kind: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

function parseInlineMarkdown(text: string): InlineMarkdownPart[] {
  const parts: InlineMarkdownPart[] = [];
  let index = 0;

  while (index < text.length) {
    const codeStart = text.indexOf("`", index);
    if (codeStart === -1) {
      parts.push({ kind: "text", text: text.slice(index) });
      break;
    }

    const codeEnd = text.indexOf("`", codeStart + 1);
    if (codeEnd === -1) {
      parts.push({ kind: "text", text: text.slice(index) });
      break;
    }

    if (codeStart > index) {
      parts.push({ kind: "text", text: text.slice(index, codeStart) });
    }
    parts.push({ kind: "code", text: text.slice(codeStart + 1, codeEnd) });
    index = codeEnd + 1;
  }

  return parts;
}

function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode {
  return parseInlineMarkdown(text).map((part, index) => {
    if (part.kind === "code") {
      return (
        <code
          className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.95em] text-slate-950 ring-1 ring-slate-200"
          key={`${keyPrefix}-code-${index}`}
        >
          {part.text}
        </code>
      );
    }
    return part.text;
  });
}

export function SimpleMarkdown({ source }: { source: string }) {
  const blocks = parseMarkdown(source);
  return (
    <div className="space-y-3 text-slate-800">
      {blocks.map((block, index) => {
        if (block.kind === "heading") {
          if (block.level === 1) {
            return (
              <h1 className="text-2xl font-semibold text-slate-950" key={`h1-${index}`}>
                {renderInlineMarkdown(block.text, `h1-${index}`)}
              </h1>
            );
          }
          if (block.level === 2) {
            return (
              <h2 className="text-xl font-semibold text-slate-900" key={`h2-${index}`}>
                {renderInlineMarkdown(block.text, `h2-${index}`)}
              </h2>
            );
          }
          return (
            <h3 className="text-lg font-semibold text-slate-900" key={`h3-${index}`}>
              {renderInlineMarkdown(block.text, `h3-${index}`)}
            </h3>
          );
        }
        if (block.kind === "list") {
          return (
            <ul className="list-disc space-y-1 pl-6" key={`list-${index}`}>
              {block.items.map((item, itemIndex) => (
                <li key={`list-item-${index}-${itemIndex}`}>
                  {renderInlineMarkdown(item, `list-item-${index}-${itemIndex}`)}
                </li>
              ))}
            </ul>
          );
        }
        if (block.kind === "code") {
          return (
            <pre className="overflow-x-auto rounded-2xl bg-slate-950 px-4 py-3 text-sm text-slate-100" key={`code-${index}`}>
              <code>{block.text}</code>
            </pre>
          );
        }
        return <p key={`p-${index}`}>{renderInlineMarkdown(block.text, `p-${index}`)}</p>;
      })}
    </div>
  );
}
