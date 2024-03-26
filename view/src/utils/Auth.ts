import { redirect } from "react-router-dom";
import PostRequest from '../utils/PostRequest'


const AuthLoader = async () => {
  const cookie = document.cookie

  let token = cookie.split(';')
    .find((row) => row.startsWith('rev_tax'))

  token = token ? token.split("=")[1] : "";
  if (token) {
    const url = `${import.meta.env.VITE_API_URL}/auth_token`
    const response = await PostRequest(url, { token })
    const text = await response.status
    if (response.ok) {
	    return null;
    }
  }
  throw redirect('/login')
	
}

export default AuthLoader
