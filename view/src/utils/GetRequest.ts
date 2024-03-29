import { getCookie } from './cookiemanager'


export const getRequest = async (url: string) => {
    const cookie = getCookie('rev_tax')
    const response = await fetch(url,
        {headers: new Headers({
            'Content-Type': 'application/json',
	    'Authorization': cookie,
        }),
        method: 'GET'
    })
    return response
}
