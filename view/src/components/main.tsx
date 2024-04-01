import Hero from '../assets/images/hero.jpg'

const Main = () => {
    return (
        <main className="font-sans bg-cover bg-no-repeat text-white border" style={{backgroundImage: `url(${Hero})`}}>
            <div className='w-full h-full flex flex-col backdrop-brightness-50 items-center py-32 space-y-4'>
                <h1 className="text-5xl font-bold line-clamp-2 w-full text-center">
                    Pay your Tax Faster <br />and Easier with RevTax
                </h1>
                <p className="text-base text-center">
                    Revolutionizing revenue collection with our platform.
                </p>
                <button className="text-sm text-white bg-blue-600 hover:bg-blue-500 rounded-md px-6 py-3">
                    Get started
                </button>
            </div>
            
        </main>
    )
}

export default Main