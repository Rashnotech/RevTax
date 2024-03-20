import '../../pages/style.css'
import { NavLink } from "react-router-dom"
interface UrlItem {
    name: String,
    path: String,
    icon: String,
}

const url: UrlItem[] = [
    { name: "Dashboard", path: "/dashboard", icon: "radix-icons--dashboard" },
    { name: "Payment", path: "/payment", icon: "ri--hand-coin-line" },
    { name: "History", path: "/history", icon: "fluent--history-28-filled"},
    { name: "Profile", path: "/profile", icon: "solar--user-linear" },
    { name: "Setting", path: "/setting", icon: "lets-icons--setting-alt-line" },
]

const Aside = () => {
    return (
        <aside className="hidden md:block md:w-[250px] h-full overflow-y-auto bg-white">
            <nav className="mt-4">
                <ul className="font-normal text-sm space-y-6">
                    {url.map((item, index) => {
                        return (
                            <li key={index} className="px-4 py-2">
                                <NavLink
                                    to={`${item.path}`}
                                    className={({ isActive }) => (isActive ?
                                        "bg-blue-600 text-slate-200 rounded-md flow-root px-4 py-3" :
                                        "text-gray-600 px-4 py-3 flow-root"
                                    )}>
                                        <span className="flex items-center space-between">
                                            <span className={`${item.icon}`}></span>
                                            <span className='ml-4'>{item.name}</span>
                                        </span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Aside