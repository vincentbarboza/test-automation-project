import testDataLoader from '@vincent/test-data-loader';
import testConfig from '../../../testConfig/testConfig';

if (testConfig.isE2E) {
    testDataLoader.config({
        dataTargets: ['en', 'de'],
        dataPath: './tests/e2e/playwright/testData',
    });
}