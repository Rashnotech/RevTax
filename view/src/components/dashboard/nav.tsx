import { NavLink } from 'react-router-dom'
import { UrlItem } from '../../utils/types'


const Nav: React.FC<{ url: UrlItem[] }> = ({ url }) => {
    return (
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
    )
}


export default Nav