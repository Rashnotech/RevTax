import { getCookie } from './cookiemanager'


export const PUTRequest = async (url: string, data: any) => {
    const cookie = getCookie('rev_tax')
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': cookie || '',
    });
    const response = await fetch(url, { headers, method: 'PUT', body: JSON.stringify(data) });
    return response;
}
