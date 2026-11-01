import AvailableLanguage from "../type/availableLanguage/availableLanguage";

class Config {
    public readonly languageCode: string;
    public readonly englishLanguage: AvailableLanguage;
    public readonly germanLanguage: AvailableLanguage;

    constructor() {
        this.languageCode = process.env.dataTarget ?? '';
        this.englishLanguage = { code: 'en', name: 'English' };
        this.germanLanguage = { code: 'de', name: 'Deutsch' };
    }
}

const config = new Config();
export default config;