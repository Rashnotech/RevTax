import './style.css'

const Login = () => {
    return (
        <div className="form_container">
            <section className="form_wrapper">
                <h2 className="text-2xl font-light">Welcome</h2>
                <p className="text-slate-900 font-light">Log in to RevTax to pay your tax</p>
                <form action="" className="w-full space-y-6">
                    <div className="flex flex-col group relative group">
                        <label htmlFor="email" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                            Email address
                        </label>
                        <input type="email" placeholder="" className="input_style peer" />
                    </div>
                    <div className="flex flex-col group relative group">
                        <label htmlFor="password" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">Password</label>
                        <input type="password" name="password" className="input_style peer" id="" />
                    </div>
                    <a className='text-blue-700 font-light mt-4 text-sm cursor-pointer'>Forget password?</a>
                    <button className='btn_primary'>Continue</button>
                    <p className='text-sm font-light'>Don&apos;t have an account? <a href="#" className='text-blue-700 cursor-pointer'>Sign up</a></p>
                </form>
            </section>
        </div>
    )
}

export default Login