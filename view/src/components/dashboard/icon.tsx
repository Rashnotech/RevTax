import React from 'react'
import { Link } from 'react-router-dom'

interface IconProps {
    name: string;
    href: string;
    icon: string;
}

const Icon: React.FC<IconProps> = ({name, href, icon}) => {
    return (
        <Link to={href} className="group block max-w-xs sm:w-full md:my-0 my-4 rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500">
            <div className="flex items-center space-x-3">
                <span className={`${icon}`}></span>
                <h3 className="text-sm text-slate-900 font-semibold group-hover:text-white">{name}</h3>
            </div>
        </Link>
    )
}

export default Icon