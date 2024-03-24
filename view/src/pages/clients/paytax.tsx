const Paytax = () => {
  return (
    <section className="w-1/2 mx-auto">
        <form action="" className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor="business" className="text-sm font-normal">Please pick an option</label>
                <select name="business" className="px-4 py-2 rounded-md border transition-all text-xs" id="">
                    <option value="">Choose option</option>
                    <option value="">New registration</option>
                    <option value="">Existing business</option>
                </select>    
            </div>

            <div className="flex flex-col mb-2">
                <label htmlFor="name" className="text-sm font-normal">Business Name</label>
                <input type="text" placeholder="e.g something ventures" className="px-4 placeholder:text-slate-700 py-3 rounded-md border outline-none transition-all text-xs" id="" />
            </div>

            <div className="flex flex-col">
                <fieldset className="text-sm">
                    <div className="mb-2  pb-2 font-normal">What kind of business do you operate?</div>
                    <input id="draft" className="peer/draft form-radio mr-2 mb-0.5 border-slate-300 text-sky-400 focus:ring-sky-300" type="radio" name="status" />
                    <label className="peer-checked/draft:text-sky-500 font-normal text-xs" htmlFor="draft">Registered</label>
                    <input id="published" className="peer/published form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300" type="radio" name="status" />
                    <label className="peer-checked/published:text-sky-500 font-normal text-xs" htmlFor="published">Not registered</label>
                    <div className="peer-checked/draft:block mt-2 hidden text-gray-500 text-xs">Registered means you are registered with CAC.</div>
                    <div className="peer-checked/published:block mt-2 hidden text-gray-500 text-xs">Non registered means you are not registered with CAC</div>
                </fieldset>
            </div>

            <div className="flex flex-col mb-2">
                <label htmlFor="cac" className="text-sm font-normal">CAC No.</label>
                <input type="text" placeholder="CAC No." className="px-4 placeholder:text-slate-700 py-3 rounded-md border outline-none transition-all text-xs" id="" />
            </div>
            <div className="flex flex-col mb-2">
                <label htmlFor="tin" className="text-sm font-normal">TIN No.</label>
                <input type="text" placeholder="Tin No." className="px-4 placeholder:text-slate-700 py-3 rounded-md border outline-none transition-all text-xs" id="" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="categories" className="text-sm font-normal">Business category</label>
                <select name="categories" className="px-4 py-2 rounded-md outline-none border transition-all text-xs" id="">
                    <option value="">Please choose one</option>
                    <option value="">Supermarket</option>
                    <option value="">Kiosk</option>
                    <option value="">Fashion House</option>
                    <option value="">Warehouse</option>
                    <option value="">ICT Firm</option>
                    <option value="">Others</option>

                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="state" className="text-sm font-normal">Which state is your business located</label>
                <select name="state" className="px-4 py-2 rounded-md outline-none border transition-all text-xs" id="">
                    <option value="">Please choose one</option>
                    <option value="">Abia</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="lga" className="text-sm font-normal">Local Governement Area</label>
                <select name="lga" className="px-4 py-2 rounded-md outline-none border transition-all text-xs" id="">
                    <option value="">Please choose one</option>
                    <option value="">Umofia</option>
                </select>
            </div>
            <div className="flex flex-col">
                <fieldset>
                    <legend className="text-base font-semibold text-slate-900 dark:text-slate-200">Payment method</legend>
                    <div className="mt-4 space-y-2">
                        <label htmlFor="google" className="text-slate-700 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-800 has-[:checked]:bg-indigo-50 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100">
                            <span className="mingcute--bank-fill"></span>
                            Bank
                            <input name="payment_method" id="google" value="apple" type="radio" className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500" />
                        </label>
                        <label htmlFor="credit-card" className="text-slate-700 has-[:checked]:ring-indigo-200 has-[:checked]:text-indigo-800 has-[:checked]:bg-indigo-50 grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100">
                            <span className="la--cc-visa"></span>
                            Credit Card
                            <input name="payment_method" id="credit-card" value="credit-card" type="radio" className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500" />
                        </label>
                    </div>
                </fieldset>
            </div>
            <div className="flex items-center justify-between">
                <button className="px-4 py-2 text-sm bg-black font-semibold text-white hover: bg-black/75 rounded-md">Back</button>
                <button className="px-4 py-2 text-sm bg-sky-500 font-semibold text-white hover:bg-sky-500/80 rounded-md">continue</button>
            </div>
        </form>   
    </section>
  )
}

export default Paytax