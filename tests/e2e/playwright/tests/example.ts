import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('data-test="hahaha"')).toBeVisible()
});

test('get started link', async ({ page }) => {
  await page.goto('/');
});
