import { getCookie } from './cookiemanager';

export const UsersRequest = async (url: string, data: any) => {
    const cookie = getCookie('rev_tax')
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': cookie || '',
    });
    const response = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(data),
    });
    return response;
}
