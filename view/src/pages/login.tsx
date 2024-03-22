import './style.css'
import { ChangeEvent, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

type IFormInput = {
    record: string;
    recordRequired: string;
    password: string;
    passwordRequired: string;
};

const Login = () => {
    const { 
        register,
        handleSubmit,
        formState: { errors } } = useForm <IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    return (
        <div className="form_container md:w-3/5 mx-auto">
            <section className="form_wrapper">
                <h2 className="text-2xl font-light">Welcome</h2>
                <p className="text-slate-900 font-light">Log in to RevTax to pay your tax</p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                    <div className="flex flex-col relative group">
                        <label
                            htmlFor="email" 
                            className={`absolute left-3 ${
                                'label_style group-focus-within:-top-2.5'
                            }`}>
                            Email or Telephone
                        </label>
                        <input 
                            type="text" 
                            className="input_style peer"
                            {...register('record', { required: true, pattern: /^[A-Z0-9]+$/ })}
                        />
                        {errors.record && <span className='text-red-500 text-sm'>This field is required</span>}
                    </div>
                    <div className="flex flex-col group relative">
                        <label htmlFor="password"
                            className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                                Password
                        </label>
                        <input
                            type="password"
                            {...register('password', { required: true })}
                            className="input_style peer"
                            id=""
                        />
                        {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
                    </div>
                    <a href='/reset_password' className='text-blue-700 font-light mt-4 text-sm cursor-pointer'>Forget password?</a>
                    <button className='btn_primary'>Continue</button>
                    <p className='text-sm font-light'>Don&apos;t have an account? <a href="/signup" className='text-blue-700 cursor-pointer'>Sign up</a></p>
                </form>
            </section>
        </div>
    )
}

export default Login