import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    const originalGoto = page.goto.bind(page);

    page.goto = async (url, options) => {
      if (url.startsWith('/')) {
        const dataTarget = process.env.dataTarget;

        url = `/${dataTarget}${url}`;
      }

      return originalGoto(url, options);
    };

    await use(page);
  },
});