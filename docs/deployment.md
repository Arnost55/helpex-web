# Deployment handoff — helpex.dev and GitHub Pages

## GitHub Pages

The repository workflow at `.github/workflows/deploy-pages.yml` builds and publishes `out/` whenever a commit reaches `main`. It can also be started manually from the repository’s **Actions** tab using **Build and deploy HelpeX website → Run workflow**. The run’s deployment job exposes the published URL, and GitHub shows the same address under **Settings → Pages**.

For the default project-site URL (`https://<owner>.github.io/<repository>/`), the workflow builds with `SITE_BASE_PATH=/<repository-name>` so generated routes and assets resolve below the repository path. In repository settings, set **Build and deployment → Source** to **GitHub Actions** if GitHub has not selected it automatically.

If attaching `helpex.dev` directly to GitHub Pages, change the workflow build’s `SITE_BASE_PATH` to an empty value and configure the custom domain in Pages settings. Review existing DNS records before any cutover; this sprint did not change DNS. This Pages workflow is public deployment once enabled, so review the content before its first run.

GitHub Pages does not apply the `_headers` file as response-header configuration. The static output includes it, but Pages serves static files without those custom Cloudflare-style headers. Use a hosting layer that supports response headers if the CSP and other `_headers` directives are required.

## Alternative: Cloudflare Pages

This site is a Next.js static export. Cloudflare Pages is a compatible target; the build output is `out/` and the public `_headers` file is included in that output.

1. Connect the website source to a Cloudflare Pages project, or upload the `out/` directory using Direct Upload.
2. For a Git-connected build, use `npm run build` and output directory `out`.
3. Open the Pages preview URL and check the navigation, concept interactions, contact email, response headers, and mobile layout.
4. Add `helpex.dev` as a custom domain in the Pages project only after publication approval.
5. Review the existing apex DNS records before changing them. This sprint did not modify DNS.
6. Confirm HTTPS is active for the custom domain before sharing the URL publicly.

## Runtime and data

- No server functions, database, runtime secrets, or environment variables are required.
- Contact is a `mailto:` flow to `spolupraca.arnost@helpex.dev`; nothing is sent by the site itself.
- The interactive product views are local simulations and do not reach HelpeX services.

## Preview and publication

No public deployment, domain attachment, or DNS edit was performed in this sprint. Higgsfield's deploy action publishes a live public site and does not provide a separate preview deployment; it was not used.
