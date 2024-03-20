import { FC } from "react"
import PaymentIcon from '../../assets/images/money-bag.png'
import PanelItem from "../../components/dashboard/panel"

const Dashboard: FC = () => {
    return (
        <main className="flex-1 w-full px-6 font-light">
            <div className="rounded-md bg-sky-500/10 p-4 md:p-8 my-4 ring-blue-400 ring-1 relative">
                <h2 className="md:text-xl w-3/5 font-semibold text-slate-600">Hello name, Welcome to your Dashboard</h2>
                <img src={PaymentIcon} alt="" className="object-contain w-16 md:w-32 absolute top-0 md:-top-10 md:z-20 right-0"/>
            </div>
            <div className="flex flex-wrap gap-4 box-border">
                <PanelItem />
                <PanelItem />
                <PanelItem />
            </div>
        </main>   
    )
}

export default Dashboard