import { defineConfig, devices } from '@playwright/test';
import testConfig from './tests/testConfig/testConfig';
import './tests/e2e/playwright/config/testDataLoader';

export default defineConfig({
  testDir: './tests/e2e/playwright/tests',
  testMatch: '**/*.ts',
  forbidOnly: testConfig.isCI,
  retries: testConfig.isCI ? 2 : 0,
  workers: 1,
  reporter: [
    ['html', { open: 'never' }],
  ],
  use: {
    baseURL: 'http://localhost:3001',
    actionTimeout: 5_000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'E2E Vendure Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'API Restful Booker',
      use: {
        baseURL: 'http://localhost:3002',
      },
      testDir: './tests/api/playwright/restfulBooker/tests',
      fullyParallel: true,
      workers: 4,
    },
  ],
});
