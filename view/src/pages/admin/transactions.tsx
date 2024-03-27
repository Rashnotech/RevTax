import Table from "../../components/dashboard/table"


const Transactions = () => {
    return (
        <section className="flex-1 w-full px-6 font-light">
            <h2 className="text-2xl font-sans font-semibold mt-4 text-slate-600">Transactions</h2>
            <div className="p-4 mt-3 flex md:flex-row flex-col items-center justify-between bg-white shadow-sm">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
                <div className="flex items-center space-x-4">
                    <div className="flex-1 md:flex space-x-4 items-center">
                        <div>
                            <label htmlFor="from" className="font-sans font-semibold text-sm">From:</label>
                            <input type="date" name="" className="border text-sm outline-none p-2 rounded-md" id="" />
                        </div>
                        <div>
                            <label htmlFor="to" className="font-sans font-semibold text-sm">To:</label>
                            <input type="date" name="" className="border text-sm outline-none rounded-md p-2" id="" />
                        </div>
                    </div>
                    <button className="rounded-md bg-primary text-sm border text-white bg-pink-700 hover:bg-pink-600 px-4 py-2">Download Statement</button>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <Table
                    caption="Revenue transaction history"
                    head={['S/N', 'Name', 'Business', 'Amount', 'Date', 'Status']}
                    body={[]}
                />
            </div>
           
        </section>
    )
}

export default Transactions