import Hero from '../assets/images/hero.jpg'

const Main = () => {
    return (
        <main className="flex flex-col items-center font-sans bg-cover bg-no-repeat py-32 space-y-4 text-white border" style={{backgroundImage: `url(${Hero})`}}>
            <h1 className="text-5xl font-bold w-full text-center">Pay your Tax Faster <br />and Easier with RevTax</h1>
            <p className="text-base">Revolutionizing revenue collection with our platform.</p>
            <button className="text-sm text-white bg-blue-600 hover:bg-blue-500 rounded-md px-6 py-3">Get started</button>
        </main>
    )
}

export default Main