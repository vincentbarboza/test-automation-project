import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('data-test="haha"')).toBeVisible()
});

test('get started link', async ({ page }) => {
  await page.goto('/');
});
