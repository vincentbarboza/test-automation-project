import { expect } from '@playwright/test';
import { test } from '../../../fixture/base';
import testDataLoader from '@vincent/test-data-loader';
import HeaderItemsTestData from '../../../lib/type/home/header/headerItesmsTestData';
import HomePage from '../../../lib/patterns/page/homePage';
import HeaderComponent from '../../../lib/patterns/component/headerComponent';

const headerItesmsTestData = testDataLoader<HeaderItemsTestData>('/home/header/headerItems');

test.describe('Header items', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
    });

    test('Check the navbar logo', async ({ page }) => {
        const headerComponent = new HeaderComponent(page);
        await expect(headerComponent.logo).toBeVisible();

        const response = await headerComponent.clickLogoButton(headerItesmsTestData.languageCode);
        expect(response.status()).toBe(200);
    });

    for (const menuItem of headerItesmsTestData.menuItems) {
        test(`Check the navbar menu item: ${menuItem.label}`, async ({ page }) => {
            const headerComponent = new HeaderComponent(page);
            await expect(headerComponent.menuItem(menuItem.label)).toHaveText(menuItem.label);

            const response = await headerComponent.clickMenuItemButton(menuItem.url, menuItem.label);
            expect(response.status()).toBe(200);
        });
    }

    test('Check the navbar language picker', async ({ page }) => {
        const headerComponent = new HeaderComponent(page);
        await expect(headerComponent.languageButton(headerItesmsTestData.languageName)).toHaveText(headerItesmsTestData.languageName);

        await headerComponent.languageButton(headerItesmsTestData.languageName).click();
        await expect(headerComponent.navbarOptionSelected(headerItesmsTestData.languageCode)).toHaveText(headerItesmsTestData.optionSelectedText);

        for (const language of headerItesmsTestData.availableLanguages) {
            await expect(headerComponent.navbarOptionLabel(language.code)).toHaveText(language.name);

            const response = await headerComponent.clickNavbarOptionLabel(language.code);
            expect(response.status()).toBe(200);

            await expect(headerComponent.navbarLanguageLabel(language.name)).toBeVisible();

            await headerComponent.languageButton(language.name).click();
            await expect(headerComponent.navbarOptionSelected(language.code)).toHaveText(headerItesmsTestData.optionSelectedText);
        }
    });
});
