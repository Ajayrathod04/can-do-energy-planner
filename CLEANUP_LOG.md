# CLEANUP_LOG.md

All changes on branch `cleanup/safe-refactor` (from tag `ui-v4-baseline`).
No UI appearance was altered. Every deletion was proven by `knip` + `grep` before removal.
Every change is covered by a passing test.

---

## Commit History

| Commit | Description |
|--------|-------------|
| `061ef88` | chore(c0): add scripts, prettier config, format all src files |
| `1687e36` | test(c1-c2): add guard + snapshot suites, fix jsdom polyfills and ROOT path |
| `715f759` | chore(c3): delete 7 orphaned files, remove 3 unused runtime deps, fix tsc+snapshot determinism |

---

## C0 - Tooling and Formatting

- Added npm scripts: typecheck, lint, format:check, test, test:coverage, knip, cycles, check
- Added .prettierrc and .prettierignore; formatted all .ts/.tsx source files (whitespace only)
- Dev deps added: knip, madge, @testing-library/user-event, @vitest/coverage-v8
- Note: eslint-plugin-jsx-a11y and eslint-plugin-boundaries omitted - ESLint v10 peer conflict

---

## C1 - Guard Tests (src/tests/guard.test.ts)

13 permanently-frozen tests that must NEVER be updated to pass a refactor.
Failure = revert immediately.

| Guard | What it checks |
|-------|----------------|
| 1 | README.md, SUBMISSION.md, Footer.tsx contain AJRathod + ajaybr2021@gmail.com |
| 2 | No stray email addresses in src/ or index.html |
| 3 | No third-party https:// URLs in runtime source files or index.html |
| 4 | Legal wall notice "Digital wall. Please paint legal walls only." in Footer.tsx + AppPage.tsx |
| 5 | Canvas export watermark "AJRathod / ajaybr2021@gmail.com" in TheWall.tsx, MonthMural.tsx, PermissionSlip.tsx |

Fixes applied to make guard tests compile:
- Used import.meta.url + fileURLToPath instead of __dirname (ESM compatibility)
- Added "node" to tsconfig.json types array for node:fs, node:path, node:url
- Removed unused DOCS constant; added explicit string types to URL filter lambdas

---

## C2 - Snapshot Tests (src/tests/snapshots.test.tsx)

4 page snapshots: LandingPage, AppPage, SystemPage, NotFoundPage.

- jsdom polyfills added in src/tests/setup.ts: window.matchMedia (for L0Preloader) and ResizeObserver (for @react-three/fiber Canvas)
- Clock pinned to 2024-01-15T08:00:00 via vi.useFakeTimers() so circadian wall-lighting always resolves to 'day' - making snapshots deterministic regardless of run time

---

## C3 - Dead-Code Deletion

### Orphaned source files deleted (proven unused by knip + grep, zero importers)

| File | Reason |
|------|--------|
| src/app/AppView.tsx | Never imported; superseded by current AppPage / app/ module structure |
| src/components/Navbar.tsx | Never imported; replaced by LandingNav in features/landing/ |
| src/components/SprayCanvasTrail.tsx | Never imported; experimental component, not wired up |
| src/components/TourGuide.tsx | Never imported; superseded by L9JudgeTour feature module |
| src/scenes/HeroScene.tsx | Never imported; old scene architecture replaced by feature modules |
| src/scenes/LandingPage.tsx | Never imported; replaced by src/pages/LandingPage.tsx |
| src/scenes/SystemShowcase.tsx | Never imported; replaced by src/pages/SystemPage.tsx |

### Unused runtime dependencies removed (proven by knip + grep, zero import occurrences in src/)

| Package | Why added originally | Proof of non-use |
|---------|----------------------|------------------|
| @dnd-kit/core | Planned drag-and-drop for task reordering | Zero imports in src/ |
| @dnd-kit/utilities | Companion to @dnd-kit/core | Zero imports in src/ |
| tailwind-merge | Planned utility for conditional class merging | Zero imports in src/ |

---

## Bugs Fixed

A bug may be fixed only if a test proves it.

| Bug | Fix | Test |
|-----|-----|------|
| Snapshot non-determinism: wall-lighting period depended on real system clock, causing night/day flips between test runs | Pinned vi.setSystemTime(new Date('2024-01-15T08:00:00')) in snapshots.test.tsx beforeAll | C2 - UI snapshots > Landing page matches snapshot |

---

## Final State

Test Files: 8 passed (8)
Tests: 43 passed (43)
TypeScript: 0 errors (tsc --noEmit)

Branch cleanup/safe-refactor is ready to merge to main.
