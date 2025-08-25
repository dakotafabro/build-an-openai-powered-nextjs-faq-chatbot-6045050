# Branch 04-01 — Setting up mock data & /api/faqs

> Dakota: This snapshot switches `getFaqs` to a real Next.js route backed by a local JSON file, so the UI reads from a stable API.

## What’s here
- `data/faqs.json` — single source of truth
- `GET /api/faqs` — returns the JSON
- RTK Query `getFaqs` calls the route
- Chat still returns a placeholder answer
- **Safe env handling**: `.env*` ignored; `.env.local.example` included

## Run it
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Next chapters
- 04-02: Add `/api/ask` with mock mode and OpenAI wiring
- 04-03: Connect the chat UI to `/api/ask`
