import { Link } from "react-router-dom"

const Business = () => {
    return (
        <section className="flex-1 w-full px-6 font-light">
            <h2 className="text-2xl font-sans font-semibold mt-4 text-slate-600">Business Policies</h2>
            <div className="p-4 mt-3 flex md:flex-row flex-col items-center justify-between bg-white shadow-sm">
                <ul role="list" className="divide-y divide-slate-200 w-full bg-white p-2">
                    <li className="first:pt-0 last:pb-0">
                        <Link to='' className='flex py-4'>
                            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-200">
                                <span className="mage--email-fill"></span>
                            </span>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900">Broadcast Email</p>
                                <p className="text-sm text-slate-500 truncate">support@revtax.com</p>
                            </div>
                        </Link>
                    </li>
                    <li className="first:pt-0 last:pb-0">
                        <Link to='/admin/business/types' className='flex py-4'>
                            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-200">
                                <span className="carbon--business-processes"></span>
                            </span>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900">Business Policy</p>
                                <p className="text-sm text-slate-500 truncate">Add business policies to app.</p>
                            </div>
                        </Link>
                    </li>
                    <li className="first:pt-0 last:pb-0">
                        <Link to='' className='flex py-4'>
                            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-200">
                                <span className="ion--card"></span>
                            </span>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900">Payment methods</p>
                                <p className="text-sm text-slate-500 truncate">Card, Bank</p>
                            </div>
                        </Link>
                    </li>
                    
                  
                  

                    
                </ul>
            </div>
        </section>
    )
}

export default Business