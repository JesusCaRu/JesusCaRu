import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
// The generator writes the final height, transform and points on each parent
// element, then adds SMIL entry tracks. Removing those tracks preserves that
// geometry; fill-opacity ends at 1, which is also the SVG default.
for (const name of ['profile-green.svg', 'profile-night-green.svg']) {
  const file = path.join(root, 'profile-3d-contrib', name);
  const original = fs.readFileSync(file, 'utf8');
  const result = original.replace(/<(animate|animateTransform)\b[^>]*(?:\/>|>[\s\S]*?<\/\1>)/g, tag => {
    const attribute = tag.match(/attributeName="([^"]+)"/)?.[1];
    const knownTrack = ['height', 'points', 'fill-opacity'].includes(attribute)
      || (attribute === 'transform' && /type="translate"/.test(tag));
    if (!knownTrack || !/values="[^"]+"/.test(tag)) {
      throw new Error(`Unexpected contribution animation in ${name}`);
    }
    return '';
  });
  if (/<(?:animate|animateTransform|animateMotion|set)\b/.test(result)) {
    throw new Error(`Unhandled contribution animation in ${name}`);
  }
  fs.writeFileSync(file, result);
  console.log(`Static contribution graphic: ${name}`);
}
