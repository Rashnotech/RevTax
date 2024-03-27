import Icon from "../../components/dashboard/icon"
import '../..//pages/style.css'
import { Outlet, useLocation } from "react-router-dom"
import React from "react";


const Payrevenue = () => {
    const navurl = useLocation();
    return (
        <section className="flex-1 w-full px-6 font-light">
            <h2 className="text-2xl font-sans font-semibold mt-4 text-slate-600">Pay Revenue</h2>
            <div className="p-4 mt-3 flex flex-row items-center flex-wrap justify-between bg-white shadow-sm">
                <Icon name="Pay Taxes" icon="ph--hand-coins" href="paytax" />
                <Icon name="Pay Water" icon="game-icons--tap" href="#" />
                <Icon name="Bills & Purchase" icon="solar--bill-list-outline" href="#" />
                <Icon name="Buy Electricity" icon="mingcute--light-line" href="#" />
            </div>

            <div className="px-4 py-6 mt-3 rounded-md bg-white">
                {!navurl.pathname.includes('paytax') 
                ?   <p className="text-center italic">You need to select an icon</p>
                :   <Outlet />}
            </div>
        </section>
    )
}

export default Payrevenue