import '../../pages/style.css'
import Nav from './nav';

interface AsideProps {
    visibility: String;
}

const url = [
    { name: "Dashboard", path: "/user/dashboard", icon: "radix-icons--dashboard" },
    { name: "Payment", path: "/user/payment", icon: "ri--hand-coin-line" },
    { name: "History", path: "/user/history", icon: "fluent--history-28-filled"},
    { name: "Profile", path: "/user/profile", icon: "solar--user-linear" },
    { name: "Setting", path: "/user/setting", icon: "lets-icons--setting-alt-line" },
]

const Aside: React.FC<AsideProps> = ({visibility}) => {
    return (
        <aside className={`md:block ${visibility} md:w-[250px] h-full overflow-y-auto bg-white`}>
            <Nav url={url} />
        </aside>
    )
}

export default Aside