import { test } from '../fixture/base';
import { expect } from '@playwright/test';
import testDataLoader from '@vincent/test-data-loader';
import ExampleData from '../lib/type/exampleData';

const exampleData = testDataLoader<ExampleData>('/haha/');

test('Example Test', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toHaveText(exampleData.title);
});
