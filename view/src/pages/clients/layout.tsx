import { Outlet, Navigate } from "react-router-dom"
import Header from "../../components/dashboard/header"
import Aside from "../../components/dashboard/sidebar"
import { user } from "../../store/user"
import { useAtom } from 'jotai'

const Layout = () => {
    const [userData]: any = useAtom(user)
    return userData ? (
        <section className="flex bg-[#f3f4f6] flex-col h-[100vh]">
            <Header fullname ={`${userData.firstname} ${userData.lastname}`} />
            <div className="flex h-full">
                <Aside visibility='hidden' />
                <Outlet />
            </div>
        </section>
    ): (<Navigate to='/login' />)
}

export default Layout