import { Link } from 'react-router-dom'
import { user } from '../../store/user'
import { useAtom } from 'jotai'


const Usersetting = () => {
    const [userData]: any = useAtom(user)
    return (
        <section className="flex-1 w-full px-6 font-light">
            <h2 className="text-2xl font-sans font-semibold mt-4 text-slate-600">Settings</h2>
            <div className="p-4 mt-3 flex md:flex-row flex-col items-center justify-between bg-white shadow-sm">
                <ul role="list" className="divide-y divide-slate-200 w-full bg-white p-2">
                    <li className="first:pt-0 last:pb-0">
                        <Link to='' className='flex py-2'>
                            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-200">
                                <span className="mage--email-fill"></span>
                            </span>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900">Email</p>
                                <p className="text-sm text-slate-500 truncate">{userData.email}</p>
                            </div>
                        </Link>
                    </li>
                    <li className="first:pt-0 last:pb-0">
                        <Link to='' className='flex py-2'>
                            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-200">
                                <span className="mingcute--notification-fill"></span>
                            </span>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900">Notification</p>
                                <p className="text-sm text-slate-500 truncate">Choose what we get in touch about</p>
                            </div>
                        </Link>
                    </li>
                    <li className="first:pt-0 last:pb-0">
                        <Link to='' className='flex py-2'>
                            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-200">
                                <span className="carbon--business-processes"></span>
                            </span>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900">Business</p>
                                <p className="text-sm text-slate-500 truncate">Update few information about business</p>
                            </div>
                        </Link>
                    </li>
                    <li className="first:pt-0 last:pb-0">
                        <Link to='' className='flex py-2'>
                            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-200">
                                <span className="ph--password-bold"></span>
                            </span>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900">Change password</p>
                                <p className="text-sm text-slate-500 truncate">***********</p>
                            </div>
                        </Link>
                    </li>
                    <li className="first:pt-0 last:pb-0">
                        <Link to='' className='flex py-2'>
                            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-200">
                                <span className="mdi--two-factor-authentication"></span>
                            </span>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900">2-step verification</p>
                                <p className="text-sm text-slate-500 truncate">Manage your 20step verification methods</p>
                            </div>
                        </Link>
                    </li>

                    <li className="first:pt-0 last:pb-0">
                        <Link to='' className='flex py-2'>
                            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-200">
                                <span className="fluent--delete-16-regular"></span>
                            </span>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-red-500">Delete account</p>
                                <p className="text-sm text-red-500 truncate">This action cannot be undone</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Usersetting