import './style.css'
import { Link } from 'react-router-dom'
import Revtax from '../../assets/images/revtax.png';
import { Drawer, DrawerBody,
    DrawerCloseButton, DrawerContent,
    DrawerOverlay, useDisclosure, Button } from '@chakra-ui/react';


const Nav = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <nav className="flex items-center justify-between">
            <Link to='.'><img src={Revtax} alt="Logo" className='w-16 h-16' /></Link>
            <ul className="md:flex hidden items-center">
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About us</a></li>
                <li><a href='#product'>Product</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <Link to='/signup' className='md:block hidden rounded-md border px-4 py-2 bg-blue-600 text-white'>Register</Link>
            <span className='md:hidden block'>
                <Button onClick={onOpen}>
                    <span className='fluent--text-align-justify-24-regular'></span>
                </Button>
            </span>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                    <ul className="flex flex-col my-12 items-center">
                        <li><a href='#'>Home</a></li>
                        <li><a href='#about'>About us</a></li>
                        <li><a href='#product'>Product</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </nav>
    )
}

export default Nav