import suite from "../../config/suite";
import AvailableLanguage from "../type/availableLanguage/availableLanguage";
import Suite from "../type/config/suite";

class Config {
    public readonly isCI: boolean;
    public readonly isE2E: boolean;
    public readonly isApi: boolean;
    public readonly languageCode: string;
    public readonly englishLanguage: AvailableLanguage;
    public readonly germanLanguage: AvailableLanguage;

    constructor() {
        this.isCI = !!process.env.CI;
        this.isE2E = suite === Suite.E2E;
        this.isApi = suite === Suite.API;
        this.languageCode = process.env.dataTarget ?? '';
        this.englishLanguage = { code: 'en', name: 'English' };
        this.germanLanguage = { code: 'de', name: 'Deutsch' };
    }
}

const config = new Config();
export default config;