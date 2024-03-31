import Tax from '../assets/images/tax.jpg'

const Section = () => {
    return (
        <section id='about' className={`flex md:flex-row flex-col items-center font-sans px-4 md:px-0 py-8 justify-between`}>
            <article className="w-full md:w-2/5 p-4">
                 <img src={Tax} alt="" className="rounded-md border w-full h-full" />
            </article>
            <article className="w-full md:w-1/2 space-y-8 font-sans font-light">
                <h3 className="text-4xl font-semibold">What to know about us?</h3>
                <p className="text-lg">
                RevTax  is a software solution aimed at revolutionizing
                revenue collection processes to combat corruption, harassment,
                and extortion prevalent in manual collection methods.
                This project leverages modern technologies and innovative approaches 
                to streamline revenue collection, making it easy, simple, and transparent.
                </p>
                <button className="rounded-lg ring-sky-500 text-sky-600 font-medium font-sans ring-1 px-6 py-3">Know more</button>    
            </article>
        </section>
    )
}

export default Section