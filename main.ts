// Tech support entry: writes one funny support line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'Have you tried turning it off and on again? It has never worked, but it buys me a lovely minute of silence.';

mkdirSync(outDir, { recursive: true });
// The support script keeps one address on file, so the advice always reaches the right customer.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
