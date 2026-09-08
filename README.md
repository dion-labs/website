# dionlabs.ai

The source for [dionlabs.ai](https://dionlabs.ai), D's personal software-lab portfolio and project hub.

## Current state

The homepage presents DionLabs as an independent software lab, hosted by D/0 and the characters from its five featured projects. The site is built with Vite and emits fully crawlable HTML and assets to `dist/`. Content and navigation work without JavaScript; the small script adds optional motion controls and a subtle pointer response.

The approved Ensemble design is the production homepage. Local design studies in `design-lab/` are excluded from version control and deployment. Fonts and approved character artwork are served locally from `public/fonts/`, `public/characters/`, and `public/brand/characters/`; font licenses accompany the font files. The footer provides a motion toggle, and the site respects the system's reduced-motion preference.

The previous homepage was manually uploaded. Its source remains in the streaming monolith as historical context while this repository becomes the canonical source for `dionlabs.ai`.

## Intended content

- A short introduction to D and DionLabs
- Featured active projects, beginning with FolioDuet (formerly PageEcho)
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
