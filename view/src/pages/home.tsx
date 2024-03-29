import Header from "../components/header/header"
import Main from "../components/main"
import Section from "../components/section"

const Home = () => {
    return (
        <div className="container">
            <Header />
            <Main />
            <Section style="" />
            <Section style="flex-row-reverse " />
        </div>
    )
}

export default Home