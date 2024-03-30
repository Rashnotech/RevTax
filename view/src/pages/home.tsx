import Contact from "../components/contact"
import Features from "../components/features"
import Header from "../components/header/header"
import Main from "../components/main"
import Section from "../components/section"

const Home = () => {
    return (
        <div className="container">
            <Header />
            <Main />
            <Section />
            <Features />
            <Contact />
            <footer className="bg-white py-4 font-sans">
                <div className="container mx-auto">
                    <p className="text-center text-gray-400 text-xs">
                        &copy; 2021 RevTax. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Home