# Portfolio Overhaul — Plan (2026-08-11)

Repo: `603-websites/portfolio-louis-sader` · branch to create: `feat/portfolio-overhaul`
Stack: Vite 7 + React 19 SPA, Tailwind, framer-motion. Client-rendered (`#root` empty at crawl time). Deployed on Vercel (`louissader.vercel.app`).

> Context note: a prior session *described* this work as done (Phase 0 committed, 4-commit branch, review workflow). None of it existed on disk — no branch, no commits, empty scratchpad. This plan builds it for real.

---

## Phase 0a — Truth & SEO fixes (safe to ship now, canonical stays on vercel.app)

- [ ] **Brand purge** — drop retired "(Website Upgraders)" parenthetical
  - `src/components/Experience.jsx:23` → `"Oryx Technologies LLC"`
  - `src/components/Projects.jsx:72` → `"Oryx Technologies"`
- [ ] **Client roster fix** — Elite Car Detailing is a *demo, not a client*; replace with Santella Designs
  - `src/components/Experience.jsx:30`
  - `src/components/Projects.jsx:76`
  - `src/components/About.jsx:126`
  - Result list everywhere: The Spot Nashua, VixFix Pro, Santella Designs
- [ ] **llms.txt** — create `public/llms.txt` (name, role, certs, real client roster, links). No security-clearance mention (hard rule).
- [ ] **JSON-LD upgrade** (`index.html`) — add `worksFor` (SSSC), `hasCredential` for AWS SAA + Security+ + AWS CCP (all earned), keep the Person graph. No clearance.
- [ ] **Resume PDFs de-index** — verify `public/robots.txt` + per-file handling so `/documents/*.pdf` aren't indexed (the PDFs say certs "in progress" and undersell). Regenerating the PDFs themselves is a separate, user-owned task.
- [ ] **Real 404s** — `vercel.json` currently rewrites `/(.*)` → `/`, so every unknown path returns 200 with the homepage. Make unknown routes serve the `NotFound` view with a real 404 status (static `/404.html` from prerender, or narrow the rewrite).
- [ ] Em-dash sweep on any copy I touch (team rule). No clearance strings (grep before commit).

## Phase 0b — Domain flip (BLOCKED, do NOT do yet)

- [ ] Attach `louissader.dev` to the Vercel project + verify it serves **200** (needs Vercel login — still pending).
- [ ] Only *after* it resolves: flip canonical, og:url, JSON-LD url, robots/sitemap host → `louissader.dev`; keep `.vercel.app` 308→`.dev`.
- Reason it's blocked: `louissader.dev` has Cloudflare NS but **no A record** today. Canonicalizing to a non-resolving host is an SEO own-goal.

## Phase 1 — Prerendering (real content in HTML at crawl time)

- [ ] SPA ships an empty `#root`; crawlers/preview bots see no content. Add build-time prerender for `/` (options: `vite-react-ssg`, or a small post-build Puppeteer/`@prerenderer` step — `sharp` already present, no puppeteer yet). Decision needed; I'll recommend the lightest that keeps `npm run build` green.
- [ ] Verify baked HTML contains real hero/experience/projects text; `dist/index.html` non-empty body.

## Phase 2 — Performance

- [ ] Audit bundle (framer-motion is heavy), lazy-load below-fold sections, confirm image `webp`/preload correctness, defer YouTube bg. Target Lighthouse perf ≥ 90 mobile.

## Phase 3 — Accessibility

- [ ] `prefers-reduced-motion` honored across framer-motion animations + particle bg; pause control for video/particles; focus states; alt text; heading order; color contrast. Verify in headless Chrome.

## Verify & ship

- [ ] `npm run build` green; `npm run lint` clean.
- [ ] Adversarial self-review of the diff (correctness, no clearance leak, no em-dashes, roster correct).
- [ ] Push branch, open PR with Vercel preview link. No merge without your OK.

## Review (filled in after build)
- _pending_
