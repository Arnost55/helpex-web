# Public content and claim boundaries

This site describes HelpeX as an independent personal agent platform in private alpha. It avoids presenting roadmap items as released product features.

## Evidence-backed copy used on the site

- The current project is divided into Core, App, Guard, Integrations, Vision, Infra, and documentation responsibilities.
- Current code includes provider adapters, MCP tool discovery/lifecycle, permission decisions, approval lifecycle code, and audit/redaction logic.
- Permission decisions can allow, ask for approval, or deny. The website itself does not connect to these services.
- The current product is in private alpha. Live deployment, a released public approval UI, and end-to-end behavior across all setups are not claimed.
- Local Ollama is one supported provider path. The site does not claim every deployment is local-first or that every request stays on the user's device.
- Audit and redaction code exists. The site does not claim tamper-proof logs, certification, or an independent security audit.

## Demonstration boundary

The workspace, lifecycle trace, approval controls, and architecture explorer are local concept interactions. They do not call a model, connect to MCP, send tool requests, persist messages, or execute actions. The demo labels this wherever a user can interact with it.

## Design source

The connected Figma account did not expose a file search/list operation, and no current file key was available. The saved `HelpeX Theme Variations Board.png` identifies Graphite + Sage as the recommended theme. Its tokens and visual cues were used provisionally; this is not represented as a verified implementation of the latest Figma frame.
