# QA report

## Completed checks

- `npm run build` — passed. Next.js generated a static export for all requested pages.
- `npm run verify:export` — passed. Checked 10 generated HTML pages, 16 internal routes/assets, required route files, robots, sitemap, headers, page titles/descriptions, and absence of external script hosts. No failures.
- `npx tsc --noEmit` — passed.
- `npm audit --omit=dev` — passed with 0 production dependency vulnerabilities at the time of the run.

## Not completed

- Desktop/mobile browser interaction checks and screenshots were blocked: the connected browser could not reach the local preview server, and the local Chromium wrapper had no installed browser binary. The attempted browser download was denied by the network policy.
- Lighthouse was not run, so no performance/accessibility/SEO score is claimed.
- Cloudflare Pages response headers and the production custom-domain flow remain unverified because no public deployment or DNS edit was performed.

## Follow-up before publication

1. Open the Cloudflare Pages preview and verify all page layouts and interactions at desktop and 390 px mobile widths.
2. Run Lighthouse on the preview and address any score below the target.
3. Verify the deployed `_headers` policy and the email handoff on the actual custom-domain HTTPS origin.
4. Review the approved latest Figma frames when the file can be located, then tune the provisional Graphite + Sage implementation against them.
