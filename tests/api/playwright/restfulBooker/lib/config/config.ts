import Credentials from '../type/credentials/credentials.d.ts/credentials';
import { existsSync } from 'node:fs';

if (existsSync('./tests/api/env.api')) {
    process.loadEnvFile('./tests/api/env.api');
}

class Config {
    public readonly credentials: Credentials;

    constructor() {
        this.credentials = {
            username: process.env.API_USERNAME || '',
            password: process.env.API_PASSWORD || ''
        };
    }
}

const config = new Config();
export default config;