const Forget = () => {
    return (
        <div className="flex item-center justify-center w-full h-full">
            <section className="rounded-md border bg-white font-sans">
                <h2>Forgot your password?</h2>
                <p>Enter your email address and we will send you instructions
                    to reset your password.
                </p>
                <form action="">
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="" />
                    </div>
                    <button>Continue</button>
                    <a>Back to RexTax </a>
                </form>
            </section>
        </div>
    )
}

export default Forget