import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I asked the agent for a small fix; it refactored the module, rewrote the docs, and the bug is still there — now with better comments.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
