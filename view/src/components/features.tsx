interface FeatureProps {
    head: string;
    body: string;
}

const keyfeatures = [
    {
        head: "User friendly",
        body: "Integration of React.js for frontend development, focusing on creating intuitive and responsive user interfaces using libraries like Material-UI."
    },
    {
        head: "Real-time Reporting",
        body: "Provision of real-time reporting and analytics features to track revenue collection progress, identify trends, and generate insights for decision-making."
    },
    {
        head: "Security",
        body: "Robust security measures, including authentication, authorization, and data encryption, is crucial to prevent unauthorized access and protect sensitive revenue data from potential breaches or attacks."
    }
]


const Feature: React.FC<FeatureProps> = ({head, body}) => {
    return (
        <article className="bg-white/80 space-y-6 font-light px-4 py-8 font-sans rounded-tr-3xl">
            <h3 className="text-3xl text-slate-700 font-semibold">
                {head}
            </h3>
            <p className="text-sm">
                {body}
            </p>
            <button className="text-sm font-medium rounded-2xl ring-1 ring-slate-800 px-4 py-3">Learn more </button>
        </article>
    )
}



const Features = () => {
    return (
        <section id="product" className="bg-blue-700 space-y-8 grid-cols-3 py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center font-sans my-6">What are the key features?</h2>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-3 px-4 font-sans">
                {keyfeatures.map((feature, index) => (
                    <Feature
                        key={index}
                        head={feature.head}
                        body={feature.body} />
                    ))
                }
            </div>
        </section>
    )
}


export default Features