import React from 'react'

interface TableProps {
    caption: string;
    head: string[];
    body: any[] | object;
}
const roles = ['User', 'Staff', 'Admin']

const Table: React.FC<TableProps> = ({caption, head, body}) => {

    return (
        <table className="border-collapse table-auto w-full my-8 font-sans text-sm">
            <caption className='caption-bottom mt-4'>
                {caption && caption}
            </caption>
            <thead>    
                <tr>
                    {head && head.map((item, index) => (
                        <th key={index}
                            className='border-b dark:border-slate-600 font-normal font-sans p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className='bg-white dark:bg-slate-800'>
                
                    {Array.isArray(body) ? body.map((items, idx) => (
                    <tr key={idx}>
                        <td className='table_data'>
                            {idx + 1}
                        </td>                 
                        <td className='table_data'>
                            {items.firstname} {items.lastname}
                        </td>
                        <td className='table_data'>
                            {items.telephone}
                        </td>
                        <td className='table_data'>
                            {items.email}
                        </td>
                        <td className='table_data'>
                            {roles[items.type - 1]}
                        </td>
                        <td>
                            <button className='font-medium text-sm'>...</button>
                        </td>
                     </tr>
                    )) :
                    <tr>
                        <td colSpan={head.length}
                            className='border-b text-center border-slate-100 text-slate-500 p-4 pl-8'>
                                No data
                            </td>
                    </tr>}
            </tbody>
        </table>
    )
}

export default Table
