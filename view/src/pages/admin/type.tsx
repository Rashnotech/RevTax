import { useEffect } from "react";
import { BizTypes } from "../../store/admin";
import { useAtom } from "jotai";
import { getRequest } from "../../utils/GetRequest";
import Biztype from "./biztype";
import { useDisclosure } from "@chakra-ui/react";


interface TableProps {
    caption: string;
    head: string[];
    body: any[] | object;
}

const BusinessType = () => {
    const [types, setTypes] = useAtom(BizTypes)
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/businesstypes`
        const fetchBizTypes = async () => {
            try {
                const response = await getRequest(url)
                const data = await response.json();
                setTypes(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        }
        fetchBizTypes()
    }, [() => onClose()])
    return (
        <section className="flex-1 w-full px-6 font-light">
            <h2 className="text-2xl font-sans font-semibold mt-4 text-slate-600">Add Business Types</h2>
            <div className="p-4 mt-3 flex md:flex-row flex-col items-center justify-between bg-white shadow-sm">
                <label className="relative block md:w-1/2">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
                <div className="md:space-x-4">
                    <button onClick={onOpen} className="rounded-md bg-primary text-sm border flex items-center text-white bg-blue-700 hover:bg-blue-600 px-4 py-2">
                       <span className="material-symbols-light--add"></span> Add Type
                    </button>
                </div>
            </div>
            <Biztype isOpen={isOpen} onClose={onClose} />
            <div className="overflow-x-auto ">
                <Table
                    caption="List of business fees and types."
                    head={['S/N', 'Name', 'Code', 'Fee', '']}
                    body={types}
                />
            </div>
           
        </section>
    )
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
                            {items.name}
                        </td>
                        <td className='table_data'>
                            {items.code}
                        </td>
                        <td className='table_data'>
                            {items.fee}
                        </td>
                        <td className="table_data">
                            <button className="font-semibold text-sm">...</button>
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



export default BusinessType