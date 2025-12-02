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
        <div>
            <div
                className='text-white fixed top-0 left-64 right-0 h-20 shadow-md z-20 flex items-center justify-between px-6'>
                <div className='flex items-center space-x-3'>
                    <Link to='/home'>
                        <img src={logo} alt="logoMedSystem" className='h-30 w-auto' />
                        <h1 className='text-xl font-semibold'>MedSystem</h1>
                    </Link>
                </div>
            <button onClick={logOut}>Sair</button>
            </div>
        </div>

    )
}