import { FC } from "react"
import PanelItem from "../../components/dashboard/panel"
import Table from "../../components/dashboard/table"

const Moboard: FC = () => {
    return (
        <main className="flex-1 w-full px-6 font-light">
            <div className="rounded-md bg-sky-500/10 p-4 md:p-8 my-4 ring-blue-400 ring-1 relative">
                <h2 className="text-sm font-light font-sans text-slate-600">Hello Admin, Welcome to your Dashboard</h2>
            </div>
            <div className="flex flex-wrap gap-4 box-border">
                <PanelItem label="Total revenue" number={23000} percent={52} type="increase" />
                <PanelItem label="Total Registered Business" number={23} percent={31} type="increase" />
                <PanelItem label="Total Non-registered Business" number={23000} percent={12} type="decrease" />
            </div>
            <div className="overflow-x-auto bg-white my-4 p-4 shadow-sm">
                <h2 className="font-sans font-semibold text-xl text-blue-700">Last Activity</h2>
                <Table
                    caption="Last recent activities"
                    head={['S/N', 'Name', 'Amount', 'Date', 'Status']}
                    body={[]}
                />
            </div>
        </main>   
    )
}

export default Moboard