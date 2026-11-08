import loadEnvFile from '../../../../../testConfig/loadEnvFile';
import Credentials from '../type/credentials/credentials';

loadEnvFile();

class Config {
    public readonly credentials: Credentials;

    constructor() {
        this.credentials = {
            username: process.env.BOKKER_USERNAME || '',
            password: process.env.BOKKER_PASSWORD || '',
        };
    }
}

const config = new Config();
export default config;