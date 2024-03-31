import { Avatar, Wrap, WrapItem, TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Info from '../../components/dashboard/info';
import { user } from '../../store/user';
import { business } from '../../store/client'
import { useAtom } from 'jotai';
import { useEffect } from 'react'
import { getRequest } from "../../utils/GetRequest"


const Userprofile = () => {
    const [userData]: any = useAtom(user)
    const [businessData, setBusiness] = useAtom(business)
    useEffect(() => {
      const fetchBusinessData = async () => {
        try {
          const url = `${import.meta.env.VITE_API_URL}/users/${userData._id}/businesses`;
          const response = await getRequest(url);
          const data = await response.json();
            setBusiness(data);
          } catch (error) {
            console.error('Error fetching payment data:', error);
            }
        };

        fetchBusinessData();
    }, []);


    return (
        <section className="flex-1 w-full px-6 font-light">
           <h2 className="text-2xl font-semibold mt-4 text-slate-600">Profile</h2>
           <div className="my-4 space-y-5">
                <div className="rounded-md bg-white p-8 shadow-sm">
                     <div className="flex items-center space-x-8">
                        <div className="flex items-center">
                           <Wrap>
                                <WrapItem>
                                    <Avatar name={`${userData.firstname} ${userData.lastname}`} src="#" />
                                </WrapItem>
                           </Wrap>
                        </div>
                        <div className="font-sans">
                            <h2 className="text-xl font-semibold">{`${userData.firstname} ${userData.lastname}`}</h2>
                            <p className="text-slate-700 text-xs">{userData.email}</p>
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
                                    data={[userData]} />
                            </TabPanel>

                            <TabPanel>
                                <Info
                                    data={[businessData]} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
           </div>
        </section>
    )
}

export default Userprofile
