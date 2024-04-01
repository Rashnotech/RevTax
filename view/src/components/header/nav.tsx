import './style.css'
import { Link } from 'react-router-dom'
import Revtax from '../../assets/images/revtax.png';

const Nav = () => {
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
            <button className='md:hidden block'>Nav</button>
        </nav>
    )
}

export default Nav