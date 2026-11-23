import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

/**
 * Entry for make.fun's "The One-Line Laugh" (u-ronigrv-the-one-line-laugh-7ccca46f).
 * Writes a single standalone funny sentence (<= 200 UTF-8 characters) to /output/entry.txt.
 */
const LINE =
  "When the mechanic holds up my dirty air filter, I nod solemnly like I didn't just learn my car has lungs.";

function validateLine(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length === 0 || trimmed.length > 200) {
    throw new Error(`Invalid line length: ${trimmed.length}`);
  }
  if (/[\r\n]/.test(trimmed)) {
    throw new Error("Line must be a single line without line breaks");
  }
  return trimmed;
}

const outputPath = process.argv[2] ?? "/output/entry.txt";
const payload = validateLine(LINE);

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, payload, "utf8");
