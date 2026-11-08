import loadEnvFile from '../../../../testConfig/loadEnvFile';
import AvailableLanguage from '../type/availableLanguage/availableLanguage';
import Credentials from '../type/credentials/credentials';

loadEnvFile();

class Config {
    public readonly credentials: Credentials;
    public readonly languageCode: string;
    public readonly englishLanguage: AvailableLanguage;
    public readonly germanLanguage: AvailableLanguage;

    constructor() {
        this.credentials = {
            username: process.env.VENDURE_USERNAME || '',
            password: process.env.VENDURE_PASSWORD || '',
        };
        this.languageCode = process.env.dataTarget ?? '';
        this.englishLanguage = { code: 'en', name: 'English' };
        this.germanLanguage = { code: 'de', name: 'Deutsch' };
    }
}

const config = new Config();
export default config;