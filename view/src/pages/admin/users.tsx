import Table from "../../components/dashboard/table"
import { useDisclosure } from "@chakra-ui/react"
import Register from "./register";
import { useEffect } from "react";
import { allUsers } from "../../store/admin";
import { useAtom } from "jotai";
import { getRequest } from "../../utils/GetRequest";

const Users = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [users, setUsers] = useAtom(allUsers)
    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/users`
        const fetchUsers = async () => {
            try {
                const response = await getRequest(url)
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        }
        fetchUsers()
    }, [onClose || ''])
    return (
        <section className="flex-1 w-full px-6 font-light">
            <h2 className="text-2xl font-sans font-semibold mt-4 text-slate-600">Users</h2>
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
                       <span className="material-symbols-light--add"></span> Add Staff
                    </button>
                </div>
            </div>
            <Register isOpen={isOpen} onClose={onClose} />
            <div className="overflow-x-auto ">
                <Table
                    caption="Revenue transaction history"
                    head={['S/N', 'Name', 'Telephone', 'Email', 'Role', '']}
                    body={users}
                />
            </div>
           
        </section>
    )
}

export default Users