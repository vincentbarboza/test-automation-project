import testSuite from './testSuite';
import Suite from './type/suite';

class TestConfig {
    public readonly isCI: boolean;
    public readonly isE2E: boolean;
    public readonly isApi: boolean;

    constructor() {
        this.isCI = !!process.env.CI;
        this.isE2E = testSuite === Suite.E2E;
        this.isApi = testSuite === Suite.API;
    }
}

const testConfig = new TestConfig();
export default testConfig;