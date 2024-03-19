import './style.css'
import { useState } from 'react'

const Login = () => {
    const [inputValue, setInputValue] = useState('Aliyu');
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="form_container md:w-3/5 mx-auto">
            <section className="form_wrapper">
                <h2 className="text-2xl font-light">Welcome</h2>
                <p className="text-slate-900 font-light">Log in to RevTax to pay your tax</p>
                <form action="" className="w-full space-y-6">
                    <div className="flex flex-col relative group">
                        <label
                            htmlFor="email" 
                            className={`absolute left-3 ${
                                inputValue === '' ? 'label_style group-focus-within:-top-2.5' :
                                ' text-sm transition-all font-light top-0 bg-white'
                            }`}>
                            Email address
                        </label>
                        <input 
                            type="email" 
                            placeholder=""
                            className="input_style peer"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col group relative">
                        <label htmlFor="password"
                            className="label_style group-focus-within:-top-2.5 peer-focus:top-0">
                                Password
                        </label>
                        <input type="password" name="password" className="input_style peer" id="" />
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