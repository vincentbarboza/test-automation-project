import { defineConfig, devices } from '@playwright/test';
import testDataLoader from '@vincent/test-data-loader';
import { resolve } from 'node:path';

const projectRoot = __dirname;
const vendureRoot = resolve(projectRoot, 'vendure-app');

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
    actionTimeout: 5_000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: `E2E Vendure Chromium ${process.env.dataTarget}`,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'API Restful Booeker',
      use: { baseURL: 'http://localhost:3002' },
      testDir: './tests/api/playwright/restfulBooker/tests',
      fullyParallel: true,
      workers: 4,
    },
  ],
});
