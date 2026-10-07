import { expect } from '@playwright/test';
import { test } from '../../../fixture/base';
import testDataLoader from '@vincent/test-data-loader';
import HeaderItemsTestData from '../../../lib/type/home/header/headerItesmsTestData';

const selectors = {
    logo: '[data-test="navbar-logo"]',
    logoButton: '[data-test="navbar-logo-button"]',
    menuItem: (label: string) => `[data-test="navbar-${label}-button"]`
};

const headerItesmsTestData = testDataLoader<HeaderItemsTestData>('/home/header/headerItems');

test.describe('Header items', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Check the navbar logo', async ({ page }) => {
        await expect(page.locator(selectors.logo)).toBeVisible();

        const [response] = await Promise.all([
            page.waitForResponse((response) => response.url().includes(`/${headerItesmsTestData.language}`) && response.request().method() === 'GET'),
            page.locator(selectors.logoButton).click(),
        ]);

        expect(response.status()).toBe(200);
    });

    for (const menuItem of headerItesmsTestData.menuItems) {
        test(`Check the navbar menu item: ${menuItem.label}`, async ({ page }) => {
            await expect(page.locator(selectors.menuItem(menuItem.label))).toHaveText(menuItem.label);

            const [response] = await Promise.all([
                page.waitForResponse((response) => response.url().includes(menuItem.url) && response.request().method() === 'GET'),
                page.locator(selectors.menuItem(menuItem.label)).click(),
            ]); 

            expect(response.status()).toBe(200);
        })
    }
});