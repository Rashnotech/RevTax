const Signup = () => {
    return (
        <div className="container-sm md:container justify-center flex md:flex-row flex-col my-12">
            <section className="w-full hidden md:block md:w-2/5 space-y-6 rounded-2xl bg-blue-500 p-8 text-white font-light">
                <h2 className="text-3xl font-bold w-full md:w-3/5">
                    Revenue payment made Easy and Pay Seamless!
                </h2>
                <p className="md:w-3/5 w-full">
                    Welcome to RevTax, where you can pay your revenue.
                    Sign up now to access exclusive features, personalized
                    dashboard and more.
                </p>
            </section>

            <section className="md:w-2/5 w-full font-light space-y-4 bg-white font-sans p-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-bold">
                        Sign Up to <br />
                        <span className="text-blue-500 text-4xl">RevTax</span>
                    </h2>
                    <p className="text-sm">
                        Already a member? <br />
                        <a href="" className="font-medium">Log in here</a>
                    </p>
                </div>
                <form action="" className="w-full space-y-6">
                    <div className="flex flex-col group relative group">
                        <label htmlFor="email" className='label_style group-focus-within:-top-2.5 peer-focus:top-0'>
                            First Name
                        </label>
                        <input type="text" className="input_style peer" />
                    </div>
                    <div className="flex flex-col group relative group">
                        <label htmlFor="password" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                            Last Name
                        </label>
                        <input type="text" name="lastname" className="input_style peer" id="" />
                    </div>
                    <div className="flex flex-col group relative group">
                        <label htmlFor="password" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                            Telephone
                        </label>
                        <input type="tel" name="telephone" className="input_style peer" id="" />
                    </div>
                    <div className="flex flex-col group relative group">
                        <label htmlFor="password" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                            Email Address
                        </label>
                        <input type="email" name="email" className="input_style peer" id="" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="p-4 bg-black text-white rounded-md font-light w-2/5">Back</button>
                        <button className="p-4 bg-blue-700 text-white rounded-md font-light w-2/5">Continue</button>
                    </div>
                    
                </form>
            </section>
        </div>
    )
}

export default Signup