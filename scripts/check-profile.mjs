import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
assert(!/<(?:script|iframe|style)\b/i.test(readme), 'Unsupported GitHub markup');
assert(!/shields\.io|vercel\.app\/api|capsule-render|komarev|skillicons/.test(readme), 'Remote image widget dependency');
for (const match of readme.matchAll(/(?:src|srcset)="([^"\s]+)"/g)) {
  assert(!/^https?:/.test(match[1]), `Remote image: ${match[1]}`);
  assert(fs.existsSync(path.join(root, match[1])), `Missing image: ${match[1]}`);
}
for (const match of readme.matchAll(/<img\b[^>]*>/g)) {
  assert(/alt="[^"]+"/.test(match[0]), 'Image needs descriptive alt text');
}
for (const name of fs.readdirSync(path.join(root, 'assets')).filter(name => name.endsWith('.svg'))) {
  const svg = fs.readFileSync(path.join(root, 'assets', name), 'utf8');
  assert(/viewBox=/.test(svg), `${name} needs a responsive viewBox`);
  assert(!/<text\b|<script\b|<foreignObject\b|https?:\/\/(?!www\.w3\.org)/.test(svg), `${name} must be self-contained`);
  assert(/<title\b/.test(svg) && /<desc\b/.test(svg), `${name} needs an accessible description`);
}
assert(readme.includes('mailto:jesuscanicio33@gmail.com'), 'Missing email contact');
assert(readme.includes('## Proyectos seleccionados'), 'Missing project section');
assert(readme.includes('## Con qué trabajo'), 'Missing technical stack');
console.log('Profile checks passed: local assets, supported markup, accessible images and essential content.');
