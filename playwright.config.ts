/**
 * Dakota: Playwright E2E test harness.
 * I run Next in dev mode with MOCK_AI=1 so responses are deterministic later.
 */
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ],
  webServer: {
    command: 'MOCK_AI=1 next dev',
    port: 3000,
    reuseExistingServer: !process.env.CI
  }
});
