import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { IFormValues } from "../utils/types"
import resolver from "../utils/resolver"



const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState()
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors } } = useForm<IFormValues>({ resolver });
    
    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        console.log(data)
    }
    return (
        <section className="container-sm md:container justify-center flex md:flex-row flex-col my-12 lg:my-24">
            <section className="w-full hidden md:block md:w-2/5 pl-12 lg:space-y-12 space-y-6 rounded-2xl bg-blue-500 p-8 text-white font-light">
                <h2 className="text-3xl font-bold w-full md:w-3/5">
                    Revenue payment made Easy and Pay Seamless!
                </h2>
                <p className="md:w-4/6 lg:w-2/3 w-full">
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
                        <a href="/login" className="font-medium">Log in here</a>
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                    <section className="space-y-6">
                        <div className="flex flex-col group relative group">
                            <label htmlFor="firstname" className='label_style group-focus-within:-top-2.5 peer-focus:top-0'>
                                First Name
                            </label>
                            <input type="text" className="input_style peer" />
                            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                        </div>

                        <div className="flex flex-col group relative group">
                            <label htmlFor="lastname" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                                Last Name
                            </label>
                            <input type="text" name="lastname" className="input_style peer" id="" />
                            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                        </div>
                        <div className="flex flex-col group relative group">
                            <label htmlFor="telephone" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                                Telephone
                            </label>
                            <input type="tel" name="telephone" className="input_style peer" id="" />
                            {errors.telephone && <span className="text-red-500 text-xs">{errors.telephone.message}</span>}
                        </div>
                        <div className="flex flex-col group relative group">
                            <label htmlFor="password" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                                password
                            </label>
                            <input type="password" className="input_style peer" id="" />
                            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                        </div>
                    </section>
                    <section className="space-y-6 hidden">
                        <div className="flex flex-col group relative group">
                            <label htmlFor="email" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                                Email address
                            </label>
                            <input type="email"  className="input_style peer" id="" />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </div>
                        <div className="flex flex-col group relative group">
                            <label htmlFor="address" className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                                Address
                            </label>
                            <input type="text" name="address" className="input_style peer" id="" />
                            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                        </div>
                    </section>
                    <div className="flex items-center justify-between">
                        <button className="p-4 bg-black text-white rounded-md font-light w-2/5">Back</button>
                        <button className="p-4 bg-blue-700 text-white rounded-md font-light w-2/5">Continue</button>
                    </div>
                    
                </form>
            </section>
        </section>
    )
}

export default Signup