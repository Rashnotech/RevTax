import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Forget from "./pages/forget";
import './assets/style.css'
import Signup from "./pages/signup";
import Verify from "./pages/VerifyEmail";
import Layout from "./pages/clients/layout";
import Dashboard from "./pages/clients/dashboard";
import Home from "./pages/home";
import { ChakraProvider } from "@chakra-ui/react";
import Transacthistory from "./pages/clients/history";
import Userprofile from "./pages/clients/profile";
import Payrevenue from "./pages/clients/payment";
import Usersetting from "./pages/clients/settings";
import Paytax from "./pages/clients/paytax";
import Admin from "./pages/admin/layout";
import Settings from "./pages/admin/settings";
import Transactions from "./pages/admin/transactions";
import Users from "./pages/admin/users";
import Business from "./pages/admin/business";
import Moboard from "./pages/admin/dashboard";
import BusinessType from "./pages/admin/type";
import ScanResult from "./services/scanner";

const routes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login/>} />
    <Route path='reset_password' element={<Forget />} />
    <Route path="signup" element={<Signup />} />
    <Route path="verify" element={<Verify />} />
    <Route path="user" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="history" element={<Transacthistory />} />
        <Route path="profile" element={<Userprofile />} />
        <Route path="payment" element={<Payrevenue />}>
          <Route path="paytax" element={<Paytax />} />
        </Route>
        <Route path="setting" element={<Usersetting />} />
    </Route>

    <Route path="admin" element={<Admin />}>
        <Route path="dashboard" element={<Moboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="users" element={<Users />} />
        <Route path="business/types" element={<BusinessType />} />
        <Route path="business" element={<Business />} />
        <Route path="settings" element={<Settings />} />
    </Route>
    <Route path="check" element={<ScanResult />} />
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
