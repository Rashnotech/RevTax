import { NavLink } from "react-router-dom"
interface UrlItem {
    name: String,
    path: String
}

const url: UrlItem[] = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Payment", path: "/payment" },
    { name: "History", path: "/history" },
    { name: "Profile", path: "/profile" },
    { name: "Setting", path: "/setting" },
]

const Aside = () => {
    return (
        <aside className="w-[250px] h-full overflow-y-auto bg-white">
            <nav className="mt-4">
                <ul className="font-normal text-sm space-y-6">
                    {url.map((item, index) => {
                        return (
                            <li key={index} className="px-4 py-2">
                                <NavLink
                                    to={`${item.path}`}
                                    className={({ isActive }) => (isActive ?
                                        "bg-blue-600 text-slate-300 rounded-md flow-root px-4 py-3" : ""
                                    )}>
                                    {item.name}
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