import { Outlet } from "react-router-dom"
import Header from "../../components/dashboard/header"
import Aside from "../../components/dashboard/sidebar"

const Layout = () => {
    return (
        <section className="flex bg-[#f3f4f6] flex-col h-[100vh]">
            <Header />
            <div className="flex h-full">
                <Aside />
                <Outlet />
            </div>
        </section>
    )
}

export default Layout