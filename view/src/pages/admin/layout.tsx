import { Outlet } from "react-router-dom"
import Header from "../../components/dashboard/header"
import Aside from "../../components/dashboard/sidebar"


const url = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "radix-icons--dashboard" },
    { name: "Transactions", path: "/admin/transactions", icon: "ri--hand-coin-line" },
    { name: "Business", path: "/admin/business", icon: "fa-solid--business-time"},
    { name: "Users", path: "/admin/users", icon: "solar--user-linear" },
    { name: "Settings", path: "/admin/settings", icon: "lets-icons--setting-alt-line" },
]

const Admin = () => {
    return (
        <section className="flex bg-[#f3f4f6] flex-col h-[100vh]">
            <Header fullname='' />
            <div className="flex h-full">
                <Aside visibility='hidden' url={url} />
                <Outlet />
            </div>
        </section>
    )
}

export default Admin