import {test, expect} from '@playwright/test';
import BookingidResponse from '../../lib/type/booking/bookingResponse';
import bookingid from '../../testData/booking/bookingData';
import BookingService from '../../lib/service/booking/bookingService';

const bookingService = new BookingService();

test.describe('Bookings API', () => {
    test('should GET all bookings', async ({request}) => {
        const response = await bookingService.booking(request);
        const body = await response.json() as BookingidResponse[];

        expect(response.status()).toBe(200);
        expect(Array.isArray(body)).toBe(true);

        for (const item of body) {
            expect(item).toHaveProperty(bookingid);
            expect(typeof item.bookingid).toBe('number');
        }
    });
});