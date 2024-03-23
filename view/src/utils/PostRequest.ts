
const PostRequest = async (url: string, data: any) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        return response.json()
    } else {
        return response.json()
    }
}

export default PostRequest