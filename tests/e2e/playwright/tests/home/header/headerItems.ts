import { expect } from '@playwright/test';
import { test } from '../../../fixture/base';
import testDataLoader from '@vincent/test-data-loader';
import HeaderItemsTestData from '../../../lib/type/home/header/headerItesmsTestData';

const selectors = {
    logo: '[data-test="navbar-logo"]',
    logoButton: '[data-test="navbar-logo-button"]',
    languageLabel: '[data-test="navbar-language-label"]',
    languageButton: (label: string) => `[data-test="navbar-language-button-${label}"]`,
    menuItem: (label: string) => `[data-test="navbar-${label}-button"]`,
    navbarOptionLabel: (label: string) => `[data-test="navbar-${label}-option-label"]`,
    navbarlanguageLabel: (label: string) => `[data-test="navbar-language-label-${label}"]`,
    navbarOptionSelected: (label: string) => `[data-test="navbar-${label}-option-selected"]`,
};

const headerItesmsTestData = testDataLoader<HeaderItemsTestData>('/home/header/headerItems');

test.describe('Header items', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Check the navbar logo', async ({ page }) => {
        await expect(page.locator(selectors.logo)).toBeVisible();

        const [response] = await Promise.all([
            page.waitForResponse((response) => response.url().includes(`/${headerItesmsTestData.languageCode}`) && response.request().method() === 'GET'),
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
        });
    }

    test('Check the navbar language picker', async ({ page }) => {
        await expect(page.locator(selectors.navbarlanguageLabel(headerItesmsTestData.languageName))).toHaveText(headerItesmsTestData.languageName);
        await page.locator(selectors.languageButton(headerItesmsTestData.languageName)).click();

        const siteLanguageOption = page.locator(selectors.navbarOptionSelected(headerItesmsTestData.languageCode));
        await expect(siteLanguageOption).toHaveText(headerItesmsTestData.optionSelectedText);

        for (const language of headerItesmsTestData.availableLanguages) {
            const navbarLabel = page.locator(selectors.navbarOptionLabel(language.code));
            await expect(navbarLabel).toHaveText(language.name);

            const [response] = await Promise.all([
                page.waitForResponse((response) => response.url().includes(`/${language.code}?_rsc=`) && response.request().method() === 'GET'),
                page.locator(selectors.navbarOptionLabel(language.code)).click(),
            ]);

            expect(response.status()).toBe(200);


            await expect(page.locator(selectors.navbarlanguageLabel(language.name))).toBeVisible();

            await page.locator(selectors.languageButton(language.name)).click();
            await expect(page.locator(selectors.navbarOptionSelected(language.code))).toHaveText(headerItesmsTestData.optionSelectedText);
        }
    })
});
