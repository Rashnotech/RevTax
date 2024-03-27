import { useForm, SubmitHandler, Resolver } from "react-hook-form"

interface IFormInput {
    email: string
}

const resolver: Resolver<IFormInput> = async (values) => {
    const errors: Record<string, any> = {};

    if (!values.email) {
        errors.email = {
            type: 'required',
            message: 'Please enter a valid email address'
        }
    } else if (values.email.includes('@')) {
        errors.email = {
            type: 'validate',
            message: 'Invalid email format'
        }
    }

    return {
        values,
        errors,
    };
}

const Forget = () => {
    const {register,
        handleSubmit,
        watch,
        formState: { errors }} = useForm<IFormInput>({ resolver })

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        /**
         * handle submit here
         */
    }
    const email = watch('email');
    return (
        <div className="form_container md:w-4/6 mx-auto">
            <section className="form_wrapper">
                <h2 className="text-2xl font-light">Forgot your password?</h2>
                <p className="text-slate-900 font-light text-center">Enter your email address and we will send you instructions
                    to reset your password.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                    <div className="flex flex-col group relative group">
                        <label htmlFor="email" className={`${!email ? 'label_down': 'label_up'}`}>Email address</label>
                        <input type="email" {...register('email')} className="input_style peer" placeholder=""  />
                    </div>
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    <button className="btn_primary">continue</button>
                </form>
                <a href="/login" className="text-sm font-light text-center text-blue-700 cursor-pointer">Back to RexTax </a>
            </section>
        </div>
    )
}

export default Forget