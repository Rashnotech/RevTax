const Feedback = () => {
    return (
        <div className="flex item-center justify-center w-full h-full">
            <section className="rounded-md border bg-white font-sans">
                <h2>Check your email</h2>
                <p>
                    Please check the email address <br/>
                    rashnotech@gmail.com for instructions to reset
                    your password
                </p>
                <button>Resend email</button>
            </section>
        </div>
    )
}

export default Feedback