import credentials from '../../lib/default/defaultCredentials';
import Credentials from '../../lib/type/credentials/credentials.d.ts/credentials';

const loginValidationCases: { description: string; partialCredentials: Partial<Credentials> }[] = [
    { description: 'credentials are missing', partialCredentials: {} },
    { description: 'only the username is provided', partialCredentials: { username: credentials.username } },
    { description: 'only the password is provided', partialCredentials: { password: credentials.password } },
    { description: 'the password is invalid', partialCredentials: { username: credentials.username, password: 'fakepassword' } },
    { description: 'the username is invalid', partialCredentials: { username: 'fakeusername', password: credentials.password } },
];

export default loginValidationCases;