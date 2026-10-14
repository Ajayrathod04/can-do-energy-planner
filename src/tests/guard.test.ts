/**
 * C1 GUARD TESTS — file-scanning, node environment (not jsdom)
 * These tests NEVER get updated to pass a refactor.
 * Failure = STOP and revert.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// ── helpers ──────────────────────────────────────────────────────────────────

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');

function walkFiles(dir: string, exts: string[]): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '.git'].includes(entry.name)) continue;
      out.push(...walkFiles(full, exts));
    } else if (exts.includes(extname(entry.name))) {
      out.push(full);
    }
  }
  return out;
}

function readAll(paths: string[]): string {
  return paths.map((p) => readFileSync(p, 'utf-8')).join('\n');
}

const TS_TSX = ['.ts', '.tsx'];
const ALL_SRC = walkFiles(join(ROOT, 'src'), TS_TSX);
const PUB_HTML = [join(ROOT, 'index.html')];

const EXACT_EMAIL = 'ajaybr2021@gmail.com';
const EXACT_CREDIT = 'AJRathod';
const LEGAL_WALL_NOTICE = 'Digital wall. Please paint legal walls only.';
const ALLOWED_URLS = [
  'https://github.com/Ajayrathod04/can-do-energy-planner',
  'mailto:ajaybr2021@gmail.com',
];

// ── Guard 1: credit footer email in docs / index.html ────────────────────────
describe('Guard 1 – Credit attribution in source files', () => {
  it('README.md contains AJRathod and ajaybr2021@gmail.com', () => {
    const readme = readFileSync(join(ROOT, 'README.md'), 'utf-8');
    expect(readme).toContain(EXACT_CREDIT);
    expect(readme).toContain(EXACT_EMAIL);
  });

  it('SUBMISSION.md contains AJRathod and ajaybr2021@gmail.com', () => {
    const submission = readFileSync(join(ROOT, 'SUBMISSION.md'), 'utf-8');
    expect(submission).toContain(EXACT_CREDIT);
    expect(submission).toContain(EXACT_EMAIL);
  });

  it('Footer.tsx contains AJRathod and ajaybr2021@gmail.com', () => {
    const footer = readFileSync(join(ROOT, 'src', 'components', 'Footer.tsx'), 'utf-8');
    expect(footer).toContain(EXACT_CREDIT);
    expect(footer).toContain(EXACT_EMAIL);
  });

  it('Footer.tsx has a mailto link to ajaybr2021@gmail.com', () => {
    const footer = readFileSync(join(ROOT, 'src', 'components', 'Footer.tsx'), 'utf-8');
    expect(footer).toContain(`mailto:${EXACT_EMAIL}`);
  });
});

// ── Guard 2: No stray email addresses ────────────────────────────────────────
describe('Guard 2 – No stray email addresses', () => {
  it('No email address other than ajaybr2021@gmail.com exists in src', () => {
    const content = readAll(ALL_SRC);
    const emails = content.match(/[\w.+-]+@[\w.-]+\.\w{2,}/g) ?? [];
    const alien = emails.filter((e) => e !== EXACT_EMAIL);
    expect(alien).toEqual([]);
  });

  it('No email address other than ajaybr2021@gmail.com in index.html', () => {
    const content = readAll(PUB_HTML);
    const emails = content.match(/[\w.+-]+@[\w.-]+\.\w{2,}/g) ?? [];
    const alien = emails.filter((e) => e !== EXACT_EMAIL);
    expect(alien).toEqual([]);
  });
});

// ── Guard 3: No third-party URLs ─────────────────────────────────────────────
describe('Guard 3 – No third-party URLs at runtime', () => {
  it('src files contain no third-party https:// URLs outside the allow-list', () => {
    const content = readAll(ALL_SRC);
    // Find all https:// URLs
    const urls = content.match(/https:\/\/[^\s"')`>]+/g) ?? [];
    const blocked = urls.filter((u: string) => !ALLOWED_URLS.some((allowed) => u.startsWith(allowed)));
    expect(blocked).toEqual([]);
  });

  it('index.html contains no CDN or third-party https:// links', () => {
    const html = readFileSync(join(ROOT, 'index.html'), 'utf-8');
    const urls = html.match(/https:\/\/[^\s"'>`]+/g) ?? [];
    const blocked = urls.filter((u: string) => !ALLOWED_URLS.some((allowed) => u.startsWith(allowed)));
    expect(blocked).toEqual([]);
  });
});

// ── Guard 4: Legal wall notice ────────────────────────────────────────────────
describe('Guard 4 – Legal wall notice in rendered pages', () => {
  it('Footer.tsx contains the legal wall notice', () => {
    const footer = readFileSync(join(ROOT, 'src', 'components', 'Footer.tsx'), 'utf-8');
    expect(footer).toContain(LEGAL_WALL_NOTICE);
  });

  it('AppPage.tsx contains the legal wall notice', () => {
    const appPage = readFileSync(join(ROOT, 'src', 'pages', 'AppPage.tsx'), 'utf-8');
    expect(appPage).toContain(LEGAL_WALL_NOTICE);
  });
});

// ── Guard 5: Canvas exports watermark ────────────────────────────────────────
describe('Guard 5 – Canvas export watermark attribution', () => {
  const WATERMARK = 'AJRathod / ajaybr2021@gmail.com';

  it('TheWall.tsx canvas export contains the exact watermark string', () => {
    const content = readFileSync(join(ROOT, 'src', 'app', 'TheWall.tsx'), 'utf-8');
    expect(content).toContain(WATERMARK);
  });

  it('MonthMural.tsx canvas export contains the exact watermark string', () => {
    const content = readFileSync(join(ROOT, 'src', 'app', 'MonthMural.tsx'), 'utf-8');
    expect(content).toContain(WATERMARK);
  });

  it('PermissionSlip.tsx canvas export contains the exact watermark string', () => {
    const content = readFileSync(join(ROOT, 'src', 'app', 'PermissionSlip.tsx'), 'utf-8');
    expect(content).toContain(WATERMARK);
  });
});
