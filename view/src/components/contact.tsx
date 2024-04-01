const Contact = () => {
    return (
        <section id="contact" className="font-sans py-12 flex md:px-0 px-4 md:flex-row flex-col justify-between">
            <article className="font-light w-full md:w-2/5 space-y-4">
                <h1 className="text-5xl">Contact us</h1>
                <p className="text-lg">
                    Have a question, comment, or suggestion? 
                    We'd love to hear from you! Feel free
                    to reach out to us using the contact 
                    form and we'll get back to you as
                    soon as possible.
                </p>
            </article>
            <article className="w-full md:w-1/2">
                <form className="md:w-3/4 space-y-4 flex flex-col" action="" method="post">
                    <input type="text" placeholder="Enter your name" className="input_style" id="name" name="name" />
                    <input className='input_style' placeholder="Enter your email" type="email" id="email" name="email" />
                    <textarea
                        placeholder="Enter your message"
                        className="rounded-md text-sm text-slate-600 border p-4 border-slate-800 outline-none"
                        name="message"
                        id="message" cols={10} rows={4} />
                    <button className="btn_primary">Send</button>
                </form>
            </article>
        </section>
    )
}


export default Contact