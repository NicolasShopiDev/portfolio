import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Lists every built page that still contains a <Pending> block. On the production branch the
// build fails, so a draft can be previewed on its branch URL but never reaches nicolasmateos.com.
// Workers Builds sets WORKERS_CI_BRANCH; PENDING_GUARD=strict forces the check locally.
export default function pendingGuard() {
  return {
    name: 'pending-guard',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = (await readdir(root, { recursive: true })).filter((f) => f.endsWith('.html'));
        const pages = [];
        for (const file of files) {
          const html = await readFile(join(root, file), 'utf8');
          const count = html.split('data-pending').length - 1;
          if (count) pages.push(`${file.replaceAll('\\', '/')} (${count})`);
        }
        if (!pages.length) return;
        const list = pages.map((p) => `  - ${p}`).join('\n');
        if (process.env.WORKERS_CI_BRANCH === 'master' || process.env.PENDING_GUARD === 'strict') {
          throw new Error(`Pages with pending content cannot be published:\n${list}`);
        }
        logger.warn(`${pages.length} pages still have pending content (fine on a preview, blocked on master):\n${list}`);
      },
    },
  };
}
