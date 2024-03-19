import { FC } from "react"
import PanelItem from "../../components/dashboard/panel"

const Dashboard: FC = () => {
    return (
        <main className="flex-1 w-full px-6 font-light">
            <div className="flex flex-wrap gap-4">
                <PanelItem />
                <PanelItem />
                <PanelItem />
            </div>
        </main>   
    )
}

export default Dashboard