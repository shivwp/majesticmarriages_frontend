import { request } from './api';

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export const contactService = {
    submitContact: (data: ContactFormData) => {
        return request('/contact/submit', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
};
