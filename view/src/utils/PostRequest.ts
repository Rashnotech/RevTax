import { getCookie } from './cookiemanager';

export const UsersRequest = async (url: string, data: any) => {
    const cookie = getCookie('rev_tax')
    const response = await fetch(url,
        {headers: new Headers({
            'Content-Type': 'application/json',
	    'Authorization': cookie,
        }),
        method: 'POST',
        body: JSON.stringify(data),
    })
    return response
}
