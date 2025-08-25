# Branch 02-03 — Enhancing user flow & UX considerations

> This snapshot adds a11y and UX polish to the wireframe. Still no data calls — that comes next.

## What’s here

- Skip link and landmark roles
- Input labels, `aria-live` chat log, and safer submit behavior
- Strong focus styles and reduced-motion defaults
- **Safe env handling**: `.env*` is ignored and only `.env.local.example` is committed

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Don’t commit secrets

Your real `.env.local` stays local and ignored. Use `.env.local.example` for template.
