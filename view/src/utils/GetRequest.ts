import { getCookie } from './cookiemanager'


export const getRequest = async (url: string) => {
    const cookie = getCookie('rev_tax')

    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': cookie || '',
    });
    const response = await fetch(url, { headers, method: 'GET' });
    return response;

}


export const putRequest = async (url: string, data: any) => {
	const cookie = getCookie('rev_tax')
	alert(cookie)
    const response = await fetch(url,
        {headers: new Headers({
	    'Content-Type': 'application/json',
            'Authorization': cookie,
        }),
	method: 'PUT',
	body: JSON.stringify(data),
    })
    return response
}
