import type { Page, Locator, Response } from '@playwright/test';

export default class HeaderComponent {
    private readonly page: Page;
    public readonly logo: Locator;
    private readonly logoButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('[data-test="navbar-logo"]');
        this.logoButton = page.locator('[data-test="navbar-logo-button"]');
    }

    public async clickLogoButton(languageCode: string): Promise<Response> {
        return this.clickAwaitResponse({responseUrl: `/${languageCode}`, target: this.logoButton});
    }

    public async clickMenuItemButton(responseUrl: string, label: string): Promise<Response> {
        return this.clickAwaitResponse({responseUrl: responseUrl, target: this.menuItem(label)});
    }

    public async clickNavbarOptionLabel(languagecode: string): Promise<Response> {
        return this.clickAwaitResponse({responseUrl: `/${languagecode}?_rsc=`, target: this.navbarOptionLabel(languagecode)});
    }

    public menuItem(label: string): Locator {
        return this.page.locator(`[data-test="navbar-${label}-button"]`);
    }

    public languageButton(label: string): Locator {
        return this.page.locator(`[data-test="navbar-language-button-${label}"]`);
    }

    public navbarOptionSelected(label: string): Locator {
        return this.page.locator(`[data-test="navbar-${label}-option-selected"]`);
    }

    public navbarOptionLabel(label: string): Locator {
        return this.page.locator(`[data-test="navbar-${label}-option-label"]`);
    }

    public navbarLanguageLabel(label: string): Locator {
        return this.page.locator(`[data-test="navbar-language-label-${label}"]`);
    }

    private async clickAwaitResponse(options: {responseUrl: string, target: Locator}): Promise<Response> {
        const [response] = await Promise.all([
            this.page.waitForResponse((response) => response.url().includes(options.responseUrl) && response.request().method() === 'GET'),
            options.target.click(),
        ]);

        return response;
    }
}