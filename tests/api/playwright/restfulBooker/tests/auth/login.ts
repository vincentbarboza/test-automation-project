import {test, expect} from '@playwright/test';
import credentials from '../../lib/default/defaultCredentials';
import LoginResponse from '../../lib/type/auth/loginResponse';

test.describe('Login API', () => {
    test('should return a token when valid credentials are provided', async ({ request }) => {
        const response = await request.post('/auth', {
            data: credentials
        }); 

        expect(response.status()).toBe(200);
        expect(await response.json()).toHaveProperty('token');

        const token = (await response.json()) as LoginResponse;
        expect(typeof token.token).toBe('string');
        expect(token.token.length).toBeGreaterThan(0);
    });
});