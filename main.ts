import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line about working beside an AI coding agent.
const ENTRY_JOKE =
  "I asked the agent for a small fix; it refactored the module, rewrote the docs, and the bug is still there — now with better comments.";

const MAX_CODE_POINTS = 280;

function validateEntry(text: string): void {
  const codePoints = [...text].length;
  if (codePoints < 1) {
    throw new Error("entry must not be empty");
  }
  if (codePoints > MAX_CODE_POINTS) {
    throw new Error(
      `entry is ${codePoints} code points, over the ${MAX_CODE_POINTS} limit`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY_JOKE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_JOKE, "utf8");
