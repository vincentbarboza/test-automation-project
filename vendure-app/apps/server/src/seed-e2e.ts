import { access } from 'fs/promises';
import path from 'path';
import { bootstrap, JobQueueService } from '@vendure/core';
import { populate } from '@vendure/core/cli';
import { config } from './vendure-config';

async function seedE2eData() {
    if (process.env.CI !== 'true') {
        throw new Error('The E2E sample data can only be populated in CI.');
    }

    const assetsDir = process.env.VENDURE_FACTORY_ASSETS_DIR;
    if (!assetsDir) {
        throw new Error('VENDURE_FACTORY_ASSETS_DIR must point to the Vendure factory assets.');
    }

    const initialDataPath = path.join(assetsDir, 'initial-data.json');
    const productsCsvPath = path.join(assetsDir, 'products.csv');
    const imagesDir = path.join(assetsDir, 'images');
    await Promise.all([access(initialDataPath), access(productsCsvPath), access(imagesDir)]);

    const app = await populate(
        async () => {
            const vendureApp = await bootstrap({
                ...config,
                importExportOptions: {
                    ...config.importExportOptions,
                    importAssetsDir: imagesDir,
                },
            });
            await vendureApp.get(JobQueueService).start();
            return vendureApp;
        },
        initialDataPath,
        productsCsvPath,
    );

    await app.close();
}

seedE2eData().catch(error => {
    console.error('Failed to populate Vendure E2E sample data:', error);
    process.exitCode = 1;
});
