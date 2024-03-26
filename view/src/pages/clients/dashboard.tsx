import { FC } from "react"
import PaymentIcon from '../../assets/images/money-bag.png'
import PanelItem from "../../components/dashboard/panel"
import Table from "../../components/dashboard/table"

const Dashboard: FC = () => {
    return (
        <main className="flex-1 w-full px-6 font-light">
            <div className="rounded-md bg-sky-500/10 p-4 md:p-8 my-4 ring-blue-400 ring-1 relative">
                <h2 className="text-xl font-semibold text-slate-600">Hello name, Welcome to your Dashboard</h2>
            </div>
            <div className="flex flex-wrap gap-4 box-border">
                <PanelItem label="Total revenue" number={23000} percent={52} type="increase" />
                <PanelItem label="Days left" number={23} percent={31} type="increase" />
                <PanelItem label="Total Revenue debt" number={23000} percent={12} type="decrease" />
            </div>
            <div className="overflow-x-auto bg-white my-4 p-4 shadow-sm">
                <h2 className="font-sans font-semibold text-xl text-blue-700">Last Activity</h2>
                <Table
                    caption="Last recent activities"
                    head={['S/N', 'Amount', 'Method', 'Date', 'Status']}
                    body={[]}
                />
            </div>
        </main>   
    )
}

export default Dashboard