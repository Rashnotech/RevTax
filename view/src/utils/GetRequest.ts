export const getRequest = async (url: string) => {
    const response = await fetch(url,
        {headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'GET'
    })
    return response
}