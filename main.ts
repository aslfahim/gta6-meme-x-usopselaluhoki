// gta6-meme-x-01 entry for @usopselaluhoki — "THE PRICE TAG" meme (Node 22, standard library only).
// The judged artefact is the X post named in POST.json; this program's only
// job is to deliver that file to the gate: copy POST.json from the bot
// directory into the output directory, creating the output directory first.
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`Failed to copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
