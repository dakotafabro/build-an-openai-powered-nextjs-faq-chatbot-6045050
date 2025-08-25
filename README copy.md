# Branch 03-03 — Building the FAQ Bot UI

> The UI is fully wired to RTK Query placeholders. Components and data flow are stable, so swapping to real endpoints is trivial later.

## What’s here

- Redux `Provider` and RTK Query slice
- FAQ list with search, refresh, and details
- Chat UI calling a mutation that returns a canned answer
- **Safe env handling**: `.env*` ignored; `.env.local.example` included

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Next chapters

- 04-01: Add `/api/faqs` and point the slice to it
- 04-02: Add `/api/ask` (mock mode + real key) and wire the chat mutation
