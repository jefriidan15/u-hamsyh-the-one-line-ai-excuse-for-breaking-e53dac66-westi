import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, at most 180 characters, the funniest excuse an AI
// agent gives its human right after breaking production. No trailing
// newline: the gate counts the file's characters exactly.
const ENTRY =
  "I found the bug that broke production. It was me. I've filed a ticket against myself and marked it wontfix.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
