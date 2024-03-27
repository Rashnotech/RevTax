import React from 'react'

interface UserprofileProps {
    data: any[];
}

const Info: React.FC<UserprofileProps> = ({ data }) => {
    return (
        <ul>
            {data && data.length > 0 ? data.map((items) => (
                Object.keys(items).filter(key => !['password', 'validated', 'createdAt',
                    'updatedAt', '_id', 'token', 'type', '__v' ].includes(key))
                .map((key, index) => (
                    <li key={index} className="flex items-center justify-between py-2">
                        <span className="font-normal text-sm font-sans">{key.toLocaleUpperCase()}:</span>
                        <span className="text-gray-700 font-light">{items[key]}</span>
                    </li>
                ))
            )): <li className="text-center text-slate-500">No data</li>}
        </ul>
    )
}

export default Info