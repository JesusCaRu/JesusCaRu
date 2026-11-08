import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import { buildGraphics } from './build-graphic-assets.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const fontRoot = path.join(root, 'node_modules/@fontsource/manrope');
const fonts = Object.fromEntries([400, 600, 700, 800].map(weight => [
  weight, opentype.parse(fs.readFileSync(path.join(fontRoot, `files/manrope-latin-${weight}-normal.woff`))),
]));
const out = path.join(root, 'assets');
fs.mkdirSync(out, { recursive: true });
fs.copyFileSync(path.join(fontRoot, 'LICENSE'), path.join(out, 'Manrope-OFL.txt'));

function lettering(value, x, y, size, color, weight = 700) {
  const outline = fonts[weight].getPath(value, x, y, size);
  const n = value => Number(value.toFixed(2));
  const data = outline.commands.map(c => {
    if (c.type === 'M' || c.type === 'L') return `${c.type} ${n(c.x)} ${n(c.y)}`;
    if (c.type === 'Q') return `Q ${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
    if (c.type === 'C') return `C ${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
    if (c.type === 'Z') return 'Z';
    throw new Error(`Unsupported outline command: ${c.type}`);
  }).join(' ');
  return `<path d="${data}" fill="${color}"/>`;
}

for (const dark of [true, false]) {
  const bg = dark ? '#15221d' : '#f3f4ec';
  const ink = dark ? '#f3f4ec' : '#15221d';
  const muted = dark ? '#b4c7bb' : '#455c50';
  const accent = dark ? '#c1f17e' : '#32611e';
  const panel = dark ? '#253a2e' : '#e0e8d8';
  for (const mobile of [false, true]) {
    const width = mobile ? 720 : 1280;
    const height = mobile ? 540 : 430;
    let content = `<rect width="${width}" height="${height}" fill="${bg}"/>`;
    const left = mobile ? 44 : 64;
    content += lettering('Jesús', left, mobile ? 122 : 125, mobile ? 82 : 90, ink, 800);
    content += lettering('Canicio Ruiz', left, mobile ? 215 : 226, mobile ? 82 : 90, ink, 800);
    content += lettering('Desarrollador Full Stack', left, mobile ? 280 : 290, mobile ? 32 : 34, muted, 600);
    if (mobile) {
      content += `<path d="M44 328H676" stroke="${muted}" stroke-opacity=".35"/>`;
      content += lettering('Interfaces claras.', left, 391, 34, ink, 600);
      content += lettering('Sistemas sólidos.', left, 437, 34, ink, 600);
      content += `<path d="M600 387V441H650M624 363V417H674" fill="none" stroke="${accent}" stroke-width="7"/>`;
      content += lettering('React · Laravel · Python · Java', left, 498, 23, muted, 400);
    } else {
      content += `<path d="M64 336H766" stroke="${muted}" stroke-opacity=".35"/>`;
      content += lettering('Interfaces claras. Sistemas sólidos.', left, 382, 28, ink, 600);
      content += `<path d="M869 80H847V351H869M1196 80H1218V351H1196" fill="none" stroke="${accent}" stroke-width="3"/>`;
      content += `<path d="M1032 143V292" fill="none" stroke="${accent}" stroke-width="3"/>`;
      for (const [y, label, color] of [[92, 'Interfaz', '#8bb9ff'], [185, 'API', '#c1f17e'], [278, 'Datos', '#d6b6ff']]) {
        content += `<rect x="883" y="${y}" width="299" height="60" fill="${panel}"/>`;
        content += lettering(label, 911, y + 40, 26, ink, 600);
        content += `<circle cx="1154" cy="${y + 30}" r="12" fill="${dark ? color : accent}"/>`;
      }
      content += lettering('Una visión de conjunto.', 883, 385, 22, muted, 400);
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc"><title id="title">Jesús Canicio Ruiz · Desarrollador Full Stack</title><desc id="desc">Interfaces claras. Sistemas sólidos. Desarrollo desde la interfaz hasta la API y los datos.</desc>${content}</svg>\n`;
    const name = `header-${dark ? 'dark' : 'light'}${mobile ? '-mobile' : ''}.svg`;
    fs.writeFileSync(path.join(out, name), svg);
    console.log(`Built assets/${name}`);
  }
}

buildGraphics({ lettering, root, out });
