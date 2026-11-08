import type { APIRequestContext, APIResponse } from '@playwright/test';

export default class BookingService {
    async booking(request: APIRequestContext): Promise<APIResponse> {
        const response = await request.get('/booking');
        return response;
    }
}