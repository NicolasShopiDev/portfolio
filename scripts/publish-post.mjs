// Takes an article out of draft and dates it today, so publishing after a
// review is one command instead of hand-editing frontmatter.
//
//   npm run publish -- shopify-precios-por-volumen
//
// It touches the file and nothing else: the merge and the push stay manual,
// because that is what actually puts the article on nicolasmateos.com.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: npm run publish -- <slug>');
  process.exit(1);
}

const base = join('src', 'content', 'posts');
const found = [];
for (const lang of ['es', 'en']) {
  const dir = join(base, lang);
  const files = await readdir(dir).catch(() => []);
  if (files.includes(`${slug}.md`)) found.push({ lang, file: join(dir, `${slug}.md`) });
}

if (found.length === 0) {
  console.error(`No article named "${slug}" in ${base}/es or ${base}/en.`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

for (const { file } of found) {
  const source = await readFile(file, 'utf8');
  const end = source.indexOf('\n---', 4);
  if (!source.startsWith('---') || end === -1) {
    console.error(`${file} has no frontmatter block.`);
    process.exit(1);
  }
  let front = source.slice(0, end);
  const body = source.slice(end);

  if (!/^draft:\s*true\s*$/m.test(front)) {
    console.log(`${file} was not a draft, only its date is updated.`);
  }
  front = front.replace(/^draft:\s*true\s*$\n?/m, '');
  front = front.replace(/^date:\s*'[^']*'\s*$/m, `date: '${today}'`);
  await writeFile(file, front + body, 'utf8');
  console.log(`Ready to publish: ${file} (date ${today})`);
}

const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
console.log(`
Now:
  npm run build
  git add -A && git commit -m "blog: ${slug}"
  git checkout master && git merge --no-ff ${branch} && git push origin master

The push to master is the publication: Cloudflare deploys it in a couple of minutes.`);
