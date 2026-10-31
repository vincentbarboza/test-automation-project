import {test, expect} from '@playwright/test';

test.describe('example test', () => {
    test('this is an example', async ({request}) => {
        const response = await request.get('/ping');

        expect(response.status()).toBe(201);
    });
});