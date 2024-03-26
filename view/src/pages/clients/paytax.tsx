import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import data from  './state.json'
import Feedback from '../../components/alert';
import { IFormInput } from '../../utils/resolve';

interface StateStructure {
    [key: string]: string[];
}
  
const Paytax = () => {
    const [step, setStep] = useState(1)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [record, setRecord] = useState('')
    const [businessType, setBusinessType] = useState('')
    const [state, setState] = useState<StateStructure>(data)
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors }
        } = useForm<IFormInput>();
    const choice = watch('state');

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data)
    }
    const handleSelect = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setRecord(event.target.value)
    }

    const decrement = (event: { preventDefault: () => void; } ) => {
        event.preventDefault();
        setStep(prev => prev - 1);
    }
  return (
    <section className="md:w-1/2 md:mx-auto w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && <Feedback message={error} status='error' />}
            <div className="block space-y-4">
                <div className={`${!record ? 'flex flex-col': 'hidden'}`}>
                    <label htmlFor="business" className="text-sm font-normal">Please pick an option</label>
                    <select
                        {...register('business')}
                        onChange={handleSelect}
                        className="px-4 py-2 rounded-md border transition-all text-xs">
                        <option value="">Choose option</option>
                        <option value="new">New registration</option>
                        <option value="existing">Existing business</option>
                    </select>    
                </div>
                {errors && <p className='text-xs font-sans text-pink-600'>{errors.business?.message}</p>}
                {!record && <button className="btn_primary">continue</button>}
            </div>
            <div className={`${record && step < 2 && record === 'new' ? 'block transition-all space-y-3' : 'hidden transition-opacity'}`}>
                <div className="flex flex-col mb-2">
                    <label htmlFor="name" className="text-xs font-normal">Business Name</label>
                    <input type="text" {...register('name')} placeholder="e.g something ventures" className="px-4 placeholder:text-slate-700 py-2 rounded-md border outline-none transition-all text-xs" id="" />
                </div>
                {errors && <p className='text-xs font-sans text-pink-600'>{errors.name?.message}</p>}
                <div className="flex flex-col">
                    <fieldset className="text-sm">
                        <div className="mb-2  pb-2 text-xs font-normal">What kind of business do you operate?</div>
                        <input
                            id="registered"
                            {...register('isRegistered')}
                            onChange={(e) => setBusinessType(e.target.value)}
                            className="peer/registered form-radio mr-2 mb-0.5 border-slate-300 text-sky-400 focus:ring-sky-300" type="radio" value='true' />
                        <label className="peer-checked/registered:text-sky-500 font-normal text-xs" htmlFor="registered">Registered</label>
                        <input
                            id="noregistered"
                            {...register('isRegistered')}
                            onChange={(e) => setBusinessType(e.target.value)}
                            className="peer/noregistered form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300" type="radio" value='false' />
                        <label className="peer-checked/noregistered:text-sky-500 font-normal text-xs" htmlFor="noregistered">Not registered</label>
                        {errors && <p className='text-xs font-sans text-pink-600'>{errors.isRegistered?.message}</p>}
                        <div className="peer-checked/registered:block mt-2 hidden text-gray-500 text-xs">Registered means you are registered with CAC.</div>
                        <div className="peer-checked/noregistered:block mt-2 hidden text-gray-500 text-xs">Non registered means you are not registered with CAC</div>
                    </fieldset>
                </div>
                {businessType === 'true' &&
                <div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="cac" className="text-xs font-normal">CAC No.</label>
                        <input type="text" {...register('cac')} placeholder="CAC No." className="px-4 placeholder:text-slate-700 py-2 rounded-md border outline-none transition-all text-xs" id="" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="tin" className="text-xs font-normal">TIN No.</label>
                        <input type="text" {...register('tin')} placeholder="Tin No." className="px-4 placeholder:text-slate-700 py-2 rounded-md border outline-none transition-all text-xs" id="" />
                    </div>
                </div>
                }

                <div className="flex items-center justify-between">
                    <button onClick={decrement} className="px-4 py-2 text-sm bg-black font-semibold text-white hover: bg-black/75 rounded-md">back</button>
                    <button onClick={(e) => { e.preventDefault(); setStep(2)}} className="px-4 py-2 text-sm bg-sky-500 font-semibold text-white hover:bg-sky-500/80 rounded-md">continue</button>
                </div> 
            </div>
            
            <div className={`${step === 2 ? 'block space-y-5 transition-all' : 'hidden transition-opacity'}`}>
                <div className="flex flex-col">
                    <label htmlFor="categories" className="text-sm font-normal">Business category</label>
                    <select {...register('type')} className="px-4 py-2 rounded-md outline-none border transition-all text-xs" id="">
                        <option value="">Please choose one</option>
                        <option value="SUPERMARKET">Supermarket</option>
                        <option value="KIOS">Kios</option>
                        <option value="FASHION HOUSE">Fashion House</option>
                        <option value="WAREHOUSE">Warehouse</option>
                        <option value="ICT FIRM">ICT Firm</option>
                        <option value="OTHERS">Others</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="state" className="text-sm font-normal">Which state is your business located</label>
                    <select {...register('state')} className="px-4 py-2 rounded-md outline-none border transition-all text-xs" id="">
                        <option value="">Please choose a state</option>
                        {Object.keys(state).map((key) => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>
                    {errors && <p className='text-xs font-sans text-pink-600'>{errors.state?.message}</p>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lga" className="text-sm font-normal">Local Governement Area</label>
                    <select {...register('lga')} className="px-4 py-2 rounded-md outline-none border transition-all text-xs" id="">
                        {choice && state[choice] ?
                            state[choice].map((lga) => (
                                <option key={lga} value={lga}>{lga}</option>
                            ))
                        : <option>No state selected</option> }
                    </select>
                    {errors && <p className='text-xs font-sans text-pink-600'>{errors.lga?.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={decrement} className="px-4 py-2 text-sm bg-black font-semibold text-white hover: bg-black/75 rounded-md">back</button>
                    <button onClick={(e) => { e.preventDefault(); setStep(3)}} className="px-4 py-2 text-sm bg-sky-500 font-semibold text-white hover:bg-sky-500/80 rounded-md">continue</button>
                </div>    
            </div>

            <div className={`${step === 3 || (record && record === 'existing') ? 'block transition-all': 'hidden transition-opacity'}`}>      
                <div className="flex flex-col">
                    <fieldset>
                        <legend className="text-base font-semibold text-slate-900 dark:text-slate-200">Payment method</legend>
                        <div className="mt-4 space-y-2">
                            <label htmlFor="google" className="text-slate-700 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-800 has-[:checked]:bg-indigo-50 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100">
                                <span className="mingcute--bank-fill"></span>
                                Bank
                                <input {...register('method')} id="google" value="Bank payment" type="radio" className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500" />
                            </label>
                            <label htmlFor="credit-card" className="text-slate-700 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-800 has-[:checked]:bg-indigo-50 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100">
                                <span className="la--cc-visa"></span>
                                Credit Card
                                <input {...register('method')} id="credit-card" value="credit-card" type="radio" className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500" />
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={decrement} className="px-4 py-2 text-sm bg-black font-semibold text-white hover: bg-black/75 rounded-md">back</button>
                    <button className="px-4 py-2 text-sm bg-sky-500 font-semibold text-white hover:bg-sky-500/80 rounded-md">continue</button>
                </div>
            </div>
        </form>   
    </section>
  )
}

export default Paytax