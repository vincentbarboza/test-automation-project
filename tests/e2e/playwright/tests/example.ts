import { test } from '../fixture/base';
import { expect } from '@playwright/test';
import testDataLoader from '@vincent/test-data-loader';
import ExampleData from '../lib/type/exampleData';

const exampleData = testDataLoader<ExampleData>('/');

// test('Example Test', async ({ page }) => {
//   await page.goto('/');

//   await expect(page.locator('h1')).toHaveText(exampleData.title);
// });

test('Example Test', async ({ page }) => {
  const response = await page.goto('/');

  console.log('URL:', page.url());
  console.log('Status:', response?.status());
  console.log('Body:', await page.locator('body').innerText());

  await expect(page.locator('h1')).toHaveText(exampleData.title);
});