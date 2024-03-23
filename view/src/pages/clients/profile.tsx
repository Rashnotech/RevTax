import { Avatar, Wrap, WrapItem, TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Info from '../../components/dashboard/info';

const user = [
    {
        id: 1,
        firstName: 'Abdulrasheed',
        lastName: 'Aliyu',
        email: 'rashnotech@gmail.com'
    }
];

const Userprofile = () => {
    return (
        <section className="flex-1 w-full px-6 font-light">
           <h2 className="text-2xl font-semibold mt-4 text-slate-600">Profile</h2>
           <div className="my-4 space-y-5">
                <div className="rounded-md bg-white p-8 shadow-sm">
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
                            <p className="text-slate-700 text-xs">customername@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-6 rounded-md bg-white">
                    <Tabs>
                        <TabList>
                            <Tab>Profile Information</Tab>
                            <Tab>Business Information</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Info
                                    data={user} />
                            </TabPanel>

                            <TabPanel>
                                <Info
                                    data={[]} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
           </div>
        </section>
    )
}

export default Userprofile