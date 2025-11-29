import logo from '../images/logo.png'
export default function Header(){
    return(
        <div className='flex justify-beetwen fixed top-0 left-0 w-full h-16'>
            <img src={logo} alt="logoMedSystem" className='h-20 w-auto' />
            <h1>MedSystem</h1>
            <p>perfil:</p>
            <p>IdUser:</p>
            <p>Sair</p>
        </div>
    )
}