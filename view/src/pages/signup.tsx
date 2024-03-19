const Signup = () => {
    return (
        <div className="container flex flex-reverse items-center space-between w-full h-full">
            <section>
                <ul>
                    <li></li>
                </ul>
            </section>

            <section className="rounded-md border bg-white font-sans">
                <h2>Welcome</h2>
                <p>Log in to RevTax to pay your tax</p>
                <form action="">
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="" />
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

export default Signup