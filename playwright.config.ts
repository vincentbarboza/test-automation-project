import { defineConfig, devices } from '@playwright/test';
import testDataLoader from '@vincent/test-data-loader';

testDataLoader.config({
  dataTargets: ['en', 'de'],
  dataPath: './tests/e2e/playwright/testData',
});

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
      name: `Chromium ${process.env.dataTarget}`,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
