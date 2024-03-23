import React from 'react'

interface TableProps {
    caption: string;
    head: string[];
    body: any[];
}

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
                <tr>
                    {body && body.length > 0 ? body.map((item, index) => (
                        <td
                            key={index}
                            className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:test-slate-400'
                        >
                            {item}
                        </td>
                    )) : <td colSpan={head.length} className='border-b text-center border-slate-100 text-slate-500 p-4 pl-8'>No data</td>}
                </tr>
            </tbody>
        </table>
    )
}

export default Table