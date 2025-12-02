import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
export default function Header() {

    return (
        <Link to='/home'>
        <div
            className='text-white fixed top-0 left-64 right-0 h-20 shadow-md z-20 flex items-center justify-between px-6'>
                <div className='flex items-center space-x-3'>
                    <img src={logo} alt="logoMedSystem" className='h-30 w-auto' />
                    <h1 className='text-xl font-semibold'>MedSystem</h1>
                </div>

        </div>
            </Link>

    )
}