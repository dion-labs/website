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

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`
- Root directory: `/`

Connect the independent GitHub repository to Cloudflare Pages, attach `dionlabs.ai`, and verify the production build before retiring the manual upload workflow.
