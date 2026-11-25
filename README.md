# HelpeX public website

Standalone Next.js + TypeScript static website for HelpeX. The project uses the saved Graphite + Sage theme board as a provisional reference because the newer Figma frames were not discoverable through the connected Figma tools during this sprint.

## Design tokens

The selected Graphite + Sage concept uses `#0E1211` for the base, `#1A1F1D` for raised surfaces, `#2A332F` for separators, `#D8DED8` for primary text, and `#79A996` for the semantic accent. Tokens are centralized in `app/globals.css`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is written to `out/`. It can be served from Cloudflare Pages or another static host. The contact form opens the visitor's email client; this site does not send or store form submissions. Read `docs/content-and-claims.md`, `docs/security-review.md`, and `docs/deployment.md` for the implementation boundary and handoff.

## Deploy to Cloudflare Pages

1. Create a Cloudflare Pages project from this source.
2. Set the build command to `npm run build` and output directory to `out`.
3. Preview the project URL and verify the contact email and page metadata.
4. Add `helpex.dev` as a custom domain only after the site owner approves production publication.
5. Keep DNS changes separate from source deployment and check current records before changing them.

The interactive lifecycle, workspace, and architecture views are concept demonstrations. No model, MCP server, approval backend, analytics, or tracking script is connected.
