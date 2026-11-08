import loadEnvFile from '../../../../testConfig/loadEnvFile';
import getRequiredEnv from '../../../../testConfig/getRequiredEnv';
import AvailableLanguage from '../type/availableLanguage/availableLanguage';
import Credentials from '../type/credentials/credentials';

loadEnvFile();

class Config {
    public readonly languageCode: string;
    public readonly englishLanguage: AvailableLanguage;
    public readonly germanLanguage: AvailableLanguage;

    public get credentials(): Credentials {
        return {
            username: getRequiredEnv('VENDURE_USERNAME'),
            password: getRequiredEnv('VENDURE_PASSWORD'),
        };
    }

    constructor() {
        this.languageCode = process.env.dataTarget ?? '';
        this.englishLanguage = { code: 'en', name: 'English' };
        this.germanLanguage = { code: 'de', name: 'Deutsch' };
    }
}

const config = new Config();
export default config;