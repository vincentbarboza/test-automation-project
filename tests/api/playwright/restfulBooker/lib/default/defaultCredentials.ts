import config from '../../lib/config/config';
import Credentials from '../../lib/type/credentials/credentials.d.ts/credentials';

const credentials: Credentials = {
    username: config.credentials.username,
    password: config.credentials.password,
};

export default credentials;
