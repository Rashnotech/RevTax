
export const UsersRequest = async (url: string, data: any) => {
    const response = await fetch(url,
        {headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'POST',
        body: JSON.stringify(data)
    })
    alert(await response.text())
    return response
}

