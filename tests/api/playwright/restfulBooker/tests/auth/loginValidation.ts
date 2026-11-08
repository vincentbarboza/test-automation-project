import { test, expect } from '@playwright/test';
import loginValidationCases from '../../testData/auth/loginValidationData';
import AuthService from '../../lib/service/auth/authService';

test.describe('Login API Validation', () => {
    for (const { description, partialCredentials } of loginValidationCases) {
        test(`should return "Bad credentials" when ${description}`, async ({ request }) => {
            const authService = new AuthService(request);
            const response = await authService.login(partialCredentials);

            expect(response.status()).toBe(200);
            expect(await response.json()).toEqual({ reason: 'Bad credentials' });
        });
    }
});