import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Forget from "./pages/forget";
import './assets/style.css'
import Signup from "./pages/signup";

const routes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/login" element={<Login/>} />
    <Route path='/reset_password' element={<Forget />} />
    <Route path="/signup" element={<Signup />} />  
  </Route>
))

function App() {

  return (
      <RouterProvider router={routes} />
  );
}

export default App
