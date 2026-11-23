import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can fly, but only backwards and three inches off the ground, so every heroic escape ends with me moonwalking into traffic.";

if (LINE.length === 0 || LINE.length > 200) {
  throw new Error("entry line must be 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
