import '../../pages/style.css'
import { Avatar, Wrap, WrapItem, Menu, MenuList, MenuItem,
    MenuButton,
    Drawer, DrawerBody,
    DrawerContent, DrawerOverlay, Button, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Aside from './sidebar'


const Header = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <header className="sticky top-0 bg-white shadow-md py-4 px-6 z-10">
            <div className="flex items-center justify-between">
                <div className="md:ml-12 md:block flex items-center space-x-4">
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-10 flex-initial h-10 rounded-full object-cover" />
                    <span className='md:hidden block'>
                        <Button onClick={onOpen}>
                            <span className='fluent--text-align-justify-24-regular'></span>
                        </Button>
                    </span> 
                </div>
                <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerBody>
                        <Aside visibility='block' />
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <ul className="flex items-center space-x-6">
                    <li>
                        <Menu>
                            <MenuButton>
                                <Wrap>
                                    <WrapItem>
                                        <Avatar name="Abdulrasheed Aliyu" src="#" />
                                    </WrapItem>
                                </Wrap>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>
                                    <span className='majesticons--logout-half-circle-line'></span>
                                    <Link to="#" className="block px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100">Logout</Link>
                                </MenuItem>
                               
                            </MenuList>
                        </Menu>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;