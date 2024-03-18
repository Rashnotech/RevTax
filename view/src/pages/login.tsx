const Login = () => {
    return (
<<<<<<< HEAD
        <div className="flex items-center w-full max-h-full justify-center">
            <section className="rounded-md space-y-4 my-20 p-12 text-slate-700 text-base flex shadow-md flex-col items-center md:w-2/4 border bg-white font-sans">
                <h2 className="text-2xl font-light">Welcome</h2>
                <p className="text-slate-900 font-light">Log in to RevTax to pay your tax</p>
                <form action="" className="w-full">
                    <div className="flex flex-col group relative mt-2 group">
                        <label htmlFor="email" className="group-focus-within:-top-2.5 text-sm transition-all font-light absolute top-2.5 left-3 peer-focus:top-0 peer-has-[]: bg-white">
                            Email address
                        </label>
                        <input type="email" placeholder="" className="border rounded-md p-3 peer border-slate-600 outline-none bg-white focus:font-light focus:bg-white" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="" id="" />
                    </div>
                    <a>Forget password?</a>
                    <button>Continue</button>
                    <p>Don&apos;t have an account? <a href="#">Sign up</a></p>
                </form>
            </section>
        </div>
    )
}

export default Login