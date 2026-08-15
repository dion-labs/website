# dionlabs.ai

The source for [dionlabs.ai](https://dionlabs.ai), D's personal software-lab portfolio and project hub.

## Current state

This repository was initialized from the existing DionLabs streaming landing page. The live homepage still presents the original AI streaming project; it will be redesigned into a portfolio for active, incubating, paused, and open-source DionLabs projects.

The original source remains in the streaming monolith until the current Cloudflare Pages deployment source is confirmed. This avoids disrupting the live site during the repository split.

## Intended content

- A short introduction to D and DionLabs
- Featured active projects, beginning with PageEcho
- Clear project lifecycle labels
- Signals as the shared engineering journal
- Open-source projects and repositories
- A paused streaming-project card with a call for a streamer or collaborator

## Deployment work remaining

1. Confirm how the current `dionlabs.ai` Cloudflare Pages project is deployed.
2. Create and connect the independent GitHub repository.
3. Replace the imported landing page with the portfolio design.
4. Verify the custom domain, redirects, metadata, robots policy, and sitemap.
5. Remove the legacy monolith copy only after the new deployment is live and verified.
