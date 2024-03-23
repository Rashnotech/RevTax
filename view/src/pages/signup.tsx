import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { IFormValues } from "../utils/types"
import resolver from "../utils/resolverSig"



const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState()
    const [next, setNext] = useState(false);
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors } } = useForm<IFormValues>({ resolver });
    
    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        /**
         * PostRequest API
         */
        console.log(data)
    }
   const email = watch('email');
   const firstName = watch('firstName');
   const lastName = watch('lastName');
   const telephone = watch('telephone');
   const password = watch('password');
   const confirm = watch('confirm');
   const address = watch('address');

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
                    <section className={`space-y-6 ${next && 'hidden transition-all'}`}>
                        <div className="flex flex-col group relative">
                            <label
                                htmlFor="firstname"
                                className={`${ !firstName ? 'label_down': 'label_up'}`}>
                                First Name
                            </label>
                            <input
                                {...register('firstName')}
                                type="text"
                                className="input_style peer"
                            />
                            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                        </div>

                        <div className="flex flex-col group relative">
                            <label htmlFor="lastname" className={`${ !lastName ? 'label_down': 'label_up'}`}>
                                Last Name
                            </label>
                            <input
                                type="text"
                                {...register('lastName')}
                                className="input_style peer"
                            />
                            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                        </div>
                      
                        <div className="flex flex-col group relative">
                            <label htmlFor="password" className={`${ !password ? 'label_down': 'label_up'}`}>
                                password
                            </label>
                            <input
                                type="password"
                                {...register('password')}
                                className="input_style peer"
                            />
                            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                        </div>
                        <div className="flex flex-col group relative">
                            <label htmlFor="confirm" className={`${ !confirm  ? 'label_down': 'label_up'}`}>
                                confirm password
                            </label>
                            <input
                                type="password"
                                {...register('confirm')}
                                className="input_style peer"
                            />
                            {confirm !== password && <span className="text-red-500 text-xs">Password doesn't match</span>}
                        </div>
                    </section>
                    <section className={`space-y-6 ${!next && 'hidden transition-all'}`}>
                        <div className="flex flex-col relative group">
                            <label htmlFor="telephone"
                                className={`${!telephone ? 'label_down': 'label_up'}`}>
                                Telephone
                            </label>
                            <input
                                type="tel"
                                {...register('telephone')}
                                className="input_style peer"
                            />
                            {errors.telephone && <span className="text-red-500 text-xs">{errors.telephone.message}</span>}
                        </div>
                        <div className="flex flex-col relative group">
                            <label htmlFor="email" className={`${!email ? 'label_down': 'label_up'}`}>
                                Email address
                            </label>
                            <input type="email"  {...register('email')} className="input_style peer" />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </div>
                        <div className="flex flex-col relative group">
                            <label htmlFor="address" className={`${!address ? 'label_down': 'label_up'}`}>
                                Address
                            </label>
                            <input type="text" 
                                {...register('address')}
                                className="input_style peer" id="" />
                            <input type="hidden" {...register('type')} value={1} />
                            {errors.address && <span className="text-red-500 text-xs">{errors.address.message}</span>}
                        </div>
                    </section>
                    <div className="flex items-center justify-between">
                        <button onClick={(e) => setNext(false)} className="p-4 bg-black text-white rounded-md font-light w-2/5">Back</button>
                        {!next && <button
                                className="p-4 bg-blue-700 text-white rounded-md font-light w-2/5"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (firstName && lastName && password && confirm) setNext(true);
                                    }}>Continue</button> }
                          {next && <button
                                className="p-4 bg-blue-700 text-white rounded-md font-light w-2/5"
                                >Submit</button> }
                    </div>
                    
                </form>
            </section>
        </section>
    )
}

export default Signup