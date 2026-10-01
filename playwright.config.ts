import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI
export default defineConfig({
  testDir: './tests/e2e/playwright/tests',
  testMatch: '**/*.ts',
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: 1,
  reporter: [
    ['html', { open: 'never' }],
  ],
  use: {
    baseURL: 'http://localhost:3001',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  webServer: isCI
  ? undefined
  : {
      command: 'npm run app:dev',
      url: 'http://localhost:3001',
      reuseExistingServer: true,
      timeout: 120_000,
    },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
