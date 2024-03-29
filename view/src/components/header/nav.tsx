import './style.css'
import { Link } from 'react-router-dom'
import Revtax from '../../assets/images/revtax.png';

const Nav = () => {
    return (
        <nav className="flex items-center justify-between">
            <Link to='.'><img src={Revtax} alt="Logo" className='w-16 h-16' /></Link>
            <ul className="flex items-center">
                <li><Link to='.'>Home</Link></li>
                <li><Link to='#about'>About us</Link></li>
                <li>Product</li>
                <li><Link to='#contact'>Contact</Link></li>
            </ul>
            <Link to='/signup' className='rounded-md border px-4 py-2 bg-blue-600 text-white'>Register</Link>
        </nav>
    )
}

export default Nav