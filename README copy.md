# Branch 05-01 — Implementing a Playwright testing suite

> Dakota: This branch adds the Playwright test runner and config. We’ll write tests in the next chapter.

## What’s here
- <code>@playwright/test</code> dev dependency
- <code>playwright.config.ts</code> with a dev webServer command (<code>MOCK_AI=1 next dev</code>)
- npm scripts: <code>test:e2e</code>, <code>test:e2e:headed</code>
- App remains functional (FAQ list + chat placeholder)
- **Safe env handling**: <code>.env*</code> ignored; <code>.env.local.example</code> included

## Run E2E locally
```bash
npm install
npx playwright install --with-deps   # once per machine/CI image
npm run test:e2e                     # 0 tests right now
```

## Next chapter
Add actual tests under <code>tests/e2e/</code> (we’ll cover examples for the FAQ list and the chat flow).
