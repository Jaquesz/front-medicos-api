import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const credenciais = {
        email: email,
        password: senha
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {

            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(credenciais)
            })
            const resultado = await response.json()
            const token = resultado.token
            
            if(!token){
                return
            }
            localStorage.setItem('token', token)
            navigate('/home')

        } catch (error) {

        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className=" bg-white p-8 rounded-xl shadow-2xl w-full max-w-md lg:max-w-lg mx-auto">
                <h2 className="font-semibold text-center uppercase text-black text-2xl mb-4">Login- Sistema de gerenciamento da clínica</h2>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black font-medium mb-2">E-mail</label>
                        <input type="text" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-black py-2 px-3 rounded-lg text-black"></input>
                    </div>
                    <div className="mb-6">
                        <label className="block text-black font-medium mb-2">Senha</label>
                        <input type="password" name="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="w-full border border-black py-2 px-3 rounded-lg text-black"></input>
                    </div>
                    <button style={{ backgroundColor: '#22A0AD' }} className=" w-full rounded-xl text-white font-bold py-3 mb-6 transition shadow-md ">Entrar</button>            </form>

            </div>
        </div>
    )
}