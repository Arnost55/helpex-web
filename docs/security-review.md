# Security review

## Checks performed

- The static site contains no API keys, secrets, analytics, tracking tags, or third-party script hosts.
- Contact fields are required/validated by the browser and length-limited. The email body and subject are URL-encoded before a `mailto:` handoff.
- The site has no form submission endpoint and does not store contact data. The visitor's email client opens a draft; the visitor decides whether to send it.
- Concept demo messages exist only in component state for the current page session and are explicitly not sent to a provider.
- Cloudflare Pages `_headers` applies a restrictive same-origin policy, denies framing, disables camera/microphone/location, and sets content-type/referrer protections. `unsafe-inline` is retained for Next.js static hydration scripts; no `unsafe-eval` or external scripts are allowed.
- All product demos are labeled as concepts and cannot invoke HelpeX tools.

## Limits

- Headers have not been verified on a deployed Cloudflare Pages response because no public deployment was authorized.
- Browser-based visual/accessibility checks and Lighthouse measurements were blocked because the local preview server is isolated from the connected browser and the local browser binary is incomplete.
- No independent penetration test or external security certification was performed.
