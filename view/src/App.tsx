import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Forget from "./pages/forget";
import './assets/style.css'
import Signup from "./pages/signup";
import Verify from "./pages/VerifyEmail";
import Auth from "./utils/Auth";
import Layout from "./pages/clients/layout";
import Dashboard from "./pages/clients/dashboard";
import Home from "./pages/home";
import { ChakraProvider } from "@chakra-ui/react";

const routes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login/>} />
    <Route path='reset_password' element={<Forget />} />
    <Route path="signup" element={<Signup />} />
    <Route path="verify/:email" element={<Verify />} />
    <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
    </Route>
  </Route>
))

function App() {

  return (
    <ChakraProvider>
      <RouterProvider router={routes} />
    </ChakraProvider>
  );
}

export default App
