import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();

    function logOut() {
        localStorage.removeItem('token')
        navigate('/')
    }


    return (
        <div className='text-white fixed top-0 left-64 right-0 h-20 shadow-md z-20 flex items-center justify-between px-6' >
            
            <Link to='/home' className='flex items-center gap-3'>
                <img src={logo} alt="logoMedSystem" className='h-12 w-auto' />
                <h1 className='text-xl font-semibold text-white'>MedSystem</h1>
            </Link>

            <button 
                onClick={logOut} 
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
                Sair
            </button>
        </div>
    )
}