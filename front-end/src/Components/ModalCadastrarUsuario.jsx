import { use, useEffect, useState } from "react"
import ModalWrapper from "./ModalWrapper"

export default function ModalCadastrarUsuario({ isOpen, onClose }) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [perfil, setPerfil] = useState('')

    async function cadastrarUsuario() {
        try {
            const token = localStorage.getItem('token')

            const payload = {
               email: email,
               senha : senha,
               perfil : perfil
            }
            if (token) {
                const fetchOptions = {
                    method: "POST", headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }, body: JSON.stringify(payload)
                }

                const response = await fetch('http://localhost:3000/usuarios', fetchOptions)
                if (response.ok) {
                    alert("usuário cadastrado com sucesso")
                    if (onClose) {
                        onClose()
                    }
                }
                else {
                    alert("Erro ao cadastrar usuário")
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-10">
                <div className="text-black">
                    <label>Digite o email do usuário</label>
                    <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} className="p-2 border border-gray-700 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div className="text-black">
                    <label>Digite a senha</label>
                    <input type="text" value={senha} onChange={(e) =>setSenha(e.target.value)} className="p-2 border border-gray-700 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div className="text-black">
                    <label>Digite o tipo do perfil (admin ou recepção)</label>
                    <input type="text" value={perfil} onChange={(e) => setPerfil(e.target.value)} className="p-2 border border-gray-700 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <button onClick={cadastrarUsuario}>
                    Cadastrar novo usuário
                </button>
            </div>
        </ModalWrapper >

    )
}