# Branch 03-02 — Setting up Next.js

> Dakota: We add the Redux Provider and an RTK Query slice with placeholder endpoints. The UI calls hooks now, so swapping to real APIs is a zero-diff change for components.

## What’s here
- App Router scaffold with Redux `Provider`
- `lib/store.ts` + `lib/services/faqBotApi.ts` (placeholder `getFaqs` + `askAi`)
- `FAQList` and `Chatbot` now use RTK Query hooks
- **Safe env handling**: `.env*` is ignored; `.env.local.example` is included for later chapters

## Run it
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Next steps
- 03-03: strengthen the UI and prepare for real data
- 04-01: introduce `/api/faqs`
- 04-02: add `/api/ask` with mock mode, then connect the chat
