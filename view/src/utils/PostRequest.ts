
const PostRequest = async (url: string, data: any) => {
    const response = await fetch(url,
        {headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        }),
        method: 'POST',
        body: JSON.stringify(data)
    })
    return response
}


export const UsersRequest = async (url: string, data: any) => {
    const response = await fetch(url,
        {headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'POST',
        body: JSON.stringify(data)
    })
    return response
}

export default PostRequest
