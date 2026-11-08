import loadEnvFile from '../../../../../testConfig/loadEnvFile';
import getRequiredEnv from '../../../../../testConfig/getRequiredEnv';
import Credentials from '../type/credentials/credentials';

loadEnvFile();

class Config {
    public readonly credentials: Credentials;

    constructor() {
        this.credentials = {
            username: getRequiredEnv('BOOKER_USERNAME'),
            password: getRequiredEnv('BOOKER_PASSWORD'),
        };
    }
}

const config = new Config();
export default config;