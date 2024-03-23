const Forget = () => {
    return (
        <div className="form_container md:w-4/6 mx-auto">
            <section className="form_wrapper">
                <h2 className="text-2xl font-light">Forgot your password?</h2>
                <p className="text-slate-900 font-light text-center">Enter your email address and we will send you instructions
                    to reset your password.
                </p>
                <form action="" className="w-full space-y-6">
                    <div className="flex flex-col group relative group">
                        <label htmlFor="email" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">Email address</label>
                        <input type="email" className="input_style peer" placeholder=""  />
                    </div>
                    <button className="btn_primary">Continue</button>
                </form>
                <a href="/login" className="text-sm font-light text-center text-blue-700 cursor-pointer">Back to RexTax </a>
            </section>
        </div>
    )
}

export default Forget