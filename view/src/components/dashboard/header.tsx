import Logo from '../../assets/images/revtax.png'
import '../../pages/style.css'
import { Avatar, Wrap, WrapItem, Menu,
    MenuList, MenuItem, MenuButton,
    Drawer, DrawerBody, DrawerCloseButton,
    DrawerContent, DrawerOverlay, Button, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Aside from './sidebar'
import { handleLogout } from '../../pages/clients/logout';

interface HeaderProps {
    fullname: string;
    url: any;
}


const Header: React.FC<HeaderProps> = ({fullname, url}) => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <header className="sticky top-0 bg-white shadow-md py-4 px-6 z-10">
            <div className="flex items-center justify-between">
                <div className="md:ml-12 md:block flex items-center space-x-4">
                    <img src={Logo} alt="logo" className="w-10 flex-initial h-10 object-contain" />
                    <span className='md:hidden block'>
                        <Button onClick={onOpen}>
                            <span className='fluent--text-align-justify-24-regular'></span>
                        </Button>
                    </span> 
                </div>
                <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Aside visibility='block' url={url} />
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <ul className="flex items-center space-x-6">
                    <li>
                        <Menu>
                            <MenuButton>
                                <Wrap>
                                    <WrapItem>
                                        <Avatar name={fullname} src="#" />
                                    </WrapItem>
                                </Wrap>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>
                                    <span className='majesticons--logout-half-circle-line'></span>
                                    <Link to="#" onClick={handleLogout} className="block px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100">Logout</Link>
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