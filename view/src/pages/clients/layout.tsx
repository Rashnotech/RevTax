import { Outlet, Navigate } from "react-router-dom"
import Header from "../../components/dashboard/header"
import Aside from "../../components/dashboard/sidebar"
import { user } from "../../store/user"
import { useAtom } from 'jotai'


const url = [
    { name: "Dashboard", path: "/user/dashboard", icon: "radix-icons--dashboard" },
    { name: "Payment", path: "/user/payment", icon: "ri--hand-coin-line" },
    { name: "History", path: "/user/history", icon: "fluent--history-28-filled"},
    { name: "Profile", path: "/user/profile", icon: "solar--user-linear" },
    { name: "Setting", path: "/user/setting", icon: "lets-icons--setting-alt-line" },
]


const Layout = () => {
    const [userData]: any = useAtom(user)
    return Object.keys(userData).length ? (
            <section className="flex bg-[#f3f4f6] flex-col h-[100vh]">
                <Header fullname ={`${userData.firstname} ${userData.lastname}`} url={url} />
                <div className="flex h-full">
                    <Aside visibility='hidden' url={url} />
                    <Outlet />
                </div>
            </section>
    ): (<Navigate to='/login' />)
}

export default Layout