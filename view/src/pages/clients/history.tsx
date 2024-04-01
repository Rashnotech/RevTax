import { useAtom } from 'jotai'
import { payment } from '../../store/client'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

interface TableProps {
    caption: string;
    head: string[];
    body: any[] | object;
}

export const Table: React.FC<TableProps> = ({caption, head, body}) => {

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
                
                    {Array.isArray(body) && body.length > 0 ? body.map((items, idx) => (
                    <tr key={idx}>
                        <td className='table_data'>
                            {idx + 1}
                        </td>                 
                        <td className='table_data'>
                            {items.amount}
                        </td>
                        <td className='table_data'>
                            {items.payment_method}
                        </td>
                        <td className='table_data'>
                            {new Date(items.created_at).toDateString()}
                        </td>
                        <td className='table_data'>
                            {items.status}
                        </td>
                        <td className='table_data'>
                            <Menu>
                                <MenuButton>...</MenuButton>
                                <MenuList fontSize={'small'}>
                                    <MenuItem>View</MenuItem>
                                    <MenuItem textColor={'red'}>Delete</MenuItem>
                                </MenuList>
                            </Menu>
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




const Transacthistory = () => {
    const [paymentData]: any = useAtom(payment)

    return (
        <section className="flex-1 w-full px-6 font-light">
            <h2 className="text-2xl font-sans font-semibold mt-4 text-slate-600">Transaction History</h2>
            <div className="p-4 mt-3 flex flex-row items-center justify-between bg-white shadow-sm">
                <label className="relative block md:w-1/2">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
                <div>
                    <button className="rounded-md bg-primary text-sm border text-white bg-pink-700 hover:bg-pink-600 px-4 py-2">Download statement</button>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <Table
                    caption="Revenue transaction history"
                    head={['S/N', 'Amount', 'Method', 'Date', 'Status', '']}
                    body={paymentData}
                />
            </div>
           
        </section>
    )
}

export default Transacthistory
