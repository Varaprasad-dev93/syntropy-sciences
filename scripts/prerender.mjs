// Fills the built HTML templates with server-rendered markup, so every page
// ships its full text in the HTML (crawlers and the AWS Activate check do not
// run JavaScript). Runs after both `vite build` passes; see package.json.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(fileURLToPath(import.meta.url), '../..');
const { render } = await import(pathToFileURL(resolve(root, 'dist-server/entry-server.js')).href);

const pages = [
  { file: 'dist/index.html', page: 'home' },
  { file: 'dist/404.html', page: 'notFound' },
];

for (const { file, page } of pages) {
  const path = resolve(root, file);
  const template = await readFile(path, 'utf8');
  if (!template.includes('<!--app-html-->')) {
    throw new Error(`${file} has no <!--app-html--> placeholder`);
  }
  const { html, head } = render(page);
  const out = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  await writeFile(path, out);
  console.log(`prerendered ${file}`);
}

await rm(resolve(root, 'dist-server'), { recursive: true, force: true });
