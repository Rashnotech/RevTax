import { getCookie } from './cookiemanager'

export const DELRequest = async (url: string) => {
    const cookie = getCookie('rev_tax')
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': cookie || '',
    });
    const response = await fetch(url, {
        headers,
        method: 'DELETE'
    });
    return response;
}
