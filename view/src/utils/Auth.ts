import { redirect } from "react-router-dom";
import { UsersRequest } from '../utils/PostRequest'


const AuthLoader = async () => {
  const cookie = document.cookie
  let token = cookie.split('; ')[1]
  token = token ? token.split("=")[1] : "";
  if (token) {
    const url = `${import.meta.env.VITE_API_URL}/auth_token`
    const res = await UsersRequest(url, { token })
    const text = await res.status
    console.log(text)
    if (res.ok) {
	    return null;
    }
  }
  throw redirect('/login')
	
}

export default AuthLoader
