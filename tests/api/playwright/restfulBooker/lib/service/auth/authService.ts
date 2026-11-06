import type { APIRequestContext, APIResponse } from '@playwright/test';
import Credentials from '../../type/credentials/credentials.d.ts/credentials';

export default class AuthService {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async login(credentials: Partial<Credentials>): Promise<APIResponse> {
        const response = await this.request.post('/auth', { data: credentials });
        return response;
    }
}