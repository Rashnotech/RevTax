const PanelItem = () => {
    return (
        <div className="p-6 w-full  md:w-[32%] bg-white shadow-md space-y-2">
            <span className="rounded-xl px-2 mb-2 text-xs py-1 font-medium bg-green-500/10 ring-1 ring-green-300 text-center text-green-500">2024</span>
            <h3 className="text-gray-400 text-xs">Total payment</h3>
            <div>
                <h2 className="text-2xl font-semibold text-black">N 100,000</h2>
            </div>
        </div>
    )
}

export default PanelItem;