import { test, expect } from '@playwright/test';
import credentials from '../../lib/default/defaultCredentials';
import LoginResponse from '../../lib/type/auth/loginResponse';
import AuthService from '../../lib/service/auth/authService';
import token from '../../testData/auth/loginData';

test.describe('Login API', () => {
    test('should return a token when valid credentials are provided', async ({ request }) => {
        const authService = new AuthService(request);
        const response = await authService.login(credentials);

        expect(response.status()).toBe(200);
        expect(await response.json()).toHaveProperty(token);

        const body = (await response.json()) as LoginResponse;
        expect(typeof body.token).toBe('string');
        expect(body.token.length).toBeGreaterThan(0);
    });
});