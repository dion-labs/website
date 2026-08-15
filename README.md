# dionlabs.ai

The source for [dionlabs.ai](https://dionlabs.ai), D's personal software-lab portfolio and project hub.

## Current state

The original AI streaming landing page has been replaced by a static portfolio for active, incubating, paused, and open-source DionLabs projects. The site is built with Vite and emits fully crawlable HTML and assets to `dist/`.

The previous homepage was manually uploaded. Its source remains in the streaming monolith as historical context while this repository becomes the canonical source for `dionlabs.ai`.

## Intended content

- A short introduction to D and DionLabs
- Featured active projects, beginning with PageEcho
- Clear project lifecycle labels
- Signals as the shared engineering journal
- Open-source projects and repositories
- A paused streaming-project card with a call for a streamer or collaborator

## Local development

```bash
npm install
npm run dev
```

Create the production bundle with `npm run build`.

## Cloudflare deployment

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Production branch: `main`
- Root directory: `/`

The site deploys as static assets on the existing Cloudflare Worker named `landing-page`. Cloudflare Workers Builds connects that Worker to `dion-labs/website`; pushes to `main` run the build and deploy commands automatically while preserving the existing `dionlabs.ai` custom domain.
