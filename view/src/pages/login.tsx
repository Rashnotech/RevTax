import './style.css'
import { useState } from 'react';
import resolver from '../utils/resolverLog';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from '../utils/types';
import { UsersRequest } from '../utils/PostRequest'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { user } from '../store/user'
import Feedback from '../components/alert';

function Login() {
    const navigate = useNavigate();
    const [, setUser] = useAtom(user);
    const [loading, setLoading] = useState(false)
    const [feedback, setFeedback] = useState('')
    const [error, setError] = useState('')
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors } } = useForm<IFormInput>({ resolver });

    const email = watch('record');
    const password = watch('password');

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setLoading(true)
        const url = `${import.meta.env.VITE_API_SERVER}/login`
        const response = await UsersRequest(url, data)
        if (response.ok) {
            const res = await response.json()
            setUser(res.user)
            setFeedback('Redirecting to dashboard...')
            setTimeout(() => {
                navigate('/user/dashboard')
            }, 5000);
        } else {
            setError('Invalid email or password');
        }
        setLoading(false)
    };
    return (
        <div className="form_container md:w-3/5 mx-auto">
            <section className="form_wrapper">
                {feedback && <Feedback message={feedback} status='success' />}
                {error && <Feedback message={error} status='error' />}
                <h2 className="text-2xl font-light">Welcome</h2>
                <p className="text-slate-900 font-light">Log in to RevTax to pay your tax</p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                    <div className="flex flex-col relative group">
                        <label
                            htmlFor="email"
                            className={`${ email === '' ? 'label_down' : 'label_up'}`}
                        >
                            Email or Telephone
                        </label>
                        <input
                            type="text"
                            className="input_style peer"
                            {...register('record')}
                        />
                        {errors.record && <span className='text-red-500 text-xs'>{errors.record.message}</span>}
                    </div>
                    <div className="flex flex-col group relative">
                        <label htmlFor="password"
                            className={`${ password === '' ? 'label_down' : 'label_up'}`}>
                            Password
                        </label>
                        <input
                            type="password"
                            {...register('password')}
                            className="input_style peer"
                            id=""
                        />
                        {errors?.password && <span className='text-red-500 text-xs'>{errors.password.message}</span>}
                    </div>
                    <a href='/reset_password' className='text-blue-700 font-light mt-4 text-sm cursor-pointer'>Forget password?</a>
                    <button className='btn_primary' disabled={loading}>continue</button>
                    <p className='text-sm font-light'>Don&apos;t have an account? <a href="/signup" className='text-blue-700 cursor-pointer'>Sign up</a></p>
                </form>
            </section>
        </div>
    );
}

export default Login
