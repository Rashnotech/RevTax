interface sectionprops {
    style: string;
}


const Section: React.FC<sectionprops> = ({ style }) => {
    return (
        <section className={`flex items-center ${style} font-sans py-8 justify-between`}>
            <article className="w-2/5 p-4">
                 <img src="#" alt="" className="rounded-md border w-full h-full" />
            </article>
            <article className="w-2/5 space-y-8">
                <h3 className="text-2xl font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing</h3>
                <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cum sequi facere unde quis facilis possimus eveniet fugiat accusamus,
                    eos voluptatibus, ea veritatis quidem recusandae maxime cumque, autem
                    placeat tenetur omnis?
                </p>
                <button className="rounded-md border px-4 py-2">Know more</button>    
            </article>
        </section>
    )
}

export default Section