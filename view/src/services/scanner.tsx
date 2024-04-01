import { Link } from "react-router-dom";
import './style.css'

const ScanResult = () => {
    return (
        <section className="flex-1 w-full px-6 font-light">
            <h2 className="text-2xl font-sans font-semibold mt-4 text-slate-600 text-center">Verify payment</h2>
            <div className="p-4 mt-3 w-full grid grid-cols-3 gap-4 items-center flex-wrap justify-between bg-white shadow-sm">
                <Link to='#' className="group block my-4 rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500">
                    <div className="flex items-center space-x-3">
                        <span className="uil--qrcode-scan"></span>
                        <h3 className="text-sm text-slate-900 font-semibold group-hover:text-white">
                            Scan Receipt
                        </h3>
                    </div>
                </Link>
                <Link to='#' className="group block my-4 rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500">
                    <div className="flex items-center space-x-3">
                        <span className="mdi--barcode-scan"></span>
                        <h3 className="text-sm text-slate-900 font-semibold group-hover:text-white">
                            Scan Barcode
                        </h3>
                    </div>
                </Link>
                <Link to='#' className="group block my-4 rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500">
                    <div className="flex items-center space-x-3">
                        <span className='bi--phone'></span>
                        <h3 className="text-sm text-slate-900 font-semibold group-hover:text-white">
                            Enter mobile/email
                        </h3>
                    </div>
                </Link>
            </div>
        </section>
    )
}


export default ScanResult;