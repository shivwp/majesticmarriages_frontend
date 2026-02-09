import { request } from './api';

export interface BookingFormData {
    eventType: string;
    eventDate: string;
    location: string;
    guestCount: string;
    budgetRange: string;
    name: string;
    email: string;
    phone: string;
    message?: string;
}

export const bookingService = {
    submitBooking: (data: BookingFormData) => {
        return request('/booking/submit', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
};
