import '../../pages/style.css'
const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow-md py-4 px-6 z-10">
            <div className="flex items-center justify-between">
                <div className="md:ml-12">
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-10 flex-initial h-10 rounded-full object-cover" />
                </div>
                <ul className="flex items-center space-x-6">
                    <li>
                        <button className='text-black rounded-md p-2 flex items-center ring-2 ring-blue-500'>
                            <span className="mdi--user-circle"></span>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;