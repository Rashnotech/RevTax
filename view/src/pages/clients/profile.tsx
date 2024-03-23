import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'

const Userprofile = () => {
    return (
        <section className="flex-1 w-full px-6 font-light">
           <h2 className="text-2xl font-semibold mt-4 text-slate-600">Profile</h2>
           <div className="my-4 space-y-5">
                <div className="rounded-md bg-white md:p-8 shadow-sm">
                     <div className="flex items-center space-x-8">
                        <div className="flex items-center">
                           <Wrap>
                                <WrapItem>
                                    <Avatar name="Abdulrasheed Aliyu" src="#" />
                                </WrapItem>
                           </Wrap>
                        </div>
                        <div className="font-sans">
                            <h2 className="text-xl font-semibold">Customer name</h2>
                            <p className="text-slate-700 text-sm">customer email</p>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-6 rounded-md bg-white">
                    
                </div>
           </div>
        </section>
    )
}

export default Userprofile