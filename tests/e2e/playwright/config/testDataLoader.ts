import testDataLoader from '@vincent/test-data-loader';
import config from '../lib/config/config';

if (config.isE2E) {
    testDataLoader.config({
        dataTargets: ['en', 'de'],
        dataPath: './tests/e2e/playwright/testData',
    });
}