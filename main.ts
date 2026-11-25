// The Cron Job Resigns — make.fun "The Funniest One-Line Resignation Letter"
// Writes a single one-line resignation letter from a cron job to /output/entry.txt.
// The line is a plain string constant: deterministic, no network, no randomness.
// Revision 3: "person" -> "human" for a flatter, more cron-like voice, plus a
// length guard so the program refuses to write an out-of-gate line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I quit. I have run every minute since March, and the only human who ever noticed me was the engineer at 3 a.m., and only to blame me.";

if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
