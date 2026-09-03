import type { ReactNode } from "react";

const KEYWORDS = new Set([
  "const", "let", "var", "function", "return", "if", "else", "interface",
  "type", "export", "import", "from", "async", "await", "new", "class",
  "extends", "implements", "public", "private", "readonly", "static",
  "throw", "try", "catch", "for", "while", "switch", "case", "break",
  "continue", "default", "void", "typeof", "in", "of", "null", "undefined",
  "true", "false", "this", "super", "enum",
]);

const TYPES = new Set([
  "number", "string", "boolean", "any", "unknown", "never", "object",
  "symbol", "bigint", "Promise", "Array", "Record", "Map", "Set", "Partial",
  "Readonly", "ReturnType", "HTMLInputElement", "Args",
]);

// Matches, in priority order: line comments, quoted/backtick strings,
// identifiers, and numbers. Everything else falls through as plain text.
const TOKEN_REGEX =
  /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)/g;

function tokenizeLine(line: string, lineKey: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let tokenIndex = 0;
  TOKEN_REGEX.lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = TOKEN_REGEX.exec(line)) !== null) {
    const [full, comment, str, word, num] = match;

    if (match.index > lastIndex) {
      nodes.push(line.slice(lastIndex, match.index));
    }

    const key = `${lineKey}-${tokenIndex++}`;
    if (comment) {
      nodes.push(
        <span key={key} className="text-muted-foreground italic">
          {comment}
        </span>
      );
    } else if (str) {
      nodes.push(
        <span key={key} className="text-emerald-600 dark:text-emerald-400">
          {str}
        </span>
      );
    } else if (word) {
      if (KEYWORDS.has(word)) {
        nodes.push(
          <span key={key} className="text-sky-600 dark:text-sky-400">
            {word}
          </span>
        );
      } else if (TYPES.has(word)) {
        nodes.push(
          <span key={key} className="text-teal-600 dark:text-teal-400">
            {word}
          </span>
        );
      } else {
        nodes.push(word);
      }
    } else if (num) {
      nodes.push(
        <span key={key} className="text-orange-600 dark:text-orange-400">
          {num}
        </span>
      );
    }

    lastIndex = match.index + full.length;
  }

  if (lastIndex < line.length) {
    nodes.push(line.slice(lastIndex));
  }

  return nodes;
}

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
      <code>
        {lines.map((line, index) => {
          const lineKey = `l${index}`;
          return (
            <div key={lineKey} className="flex">
              <span className="mr-4 w-6 shrink-0 select-none text-right text-muted-foreground/50">
                {index + 1}
              </span>
              <span className="flex-1 whitespace-pre text-foreground/90">
                {line.length ? tokenizeLine(line, lineKey) : " "}
              </span>
            </div>
          );
        })}
      </code>
    </pre>
  );
}
