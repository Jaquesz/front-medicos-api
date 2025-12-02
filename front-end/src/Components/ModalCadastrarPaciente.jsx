import { useState } from "react"
import ModalWrapper from "./ModalWrapper"

export default function ModaladastrarPaciente({ isOpen, onClose }) {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')

    async function cadastrarPaciente() {
        try {
            const token = localStorage.getItem('token')

            const payload = {
                nome: nome,
                cpf: cpf,
                telefone: telefone
            }
            if (token) {
                const fetchOptions = {
                    method: "POST", headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }, body: JSON.stringify(payload)
                }

                const response = await fetch('http://localhost:3000/pacientes', fetchOptions)
                if (response.ok) {
                    alert("paciente cadastrado com sucesso")
                    if (onClose) {
                        onClose()
                    }
                }
                else {
                    alert("Erro ao cadastrar paciente")
                }
            }

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-10">
                <h2 className="text-black text-xl">Cadastrar novo Paciente</h2>
                <div className="text-black">
                    <label>Digite o Nome do paciente</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="p-2 border border-gray-700 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div className="text-black">
                    <label>Digite o cpf do paciente</label>
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} className="p-2 border border-gray-700 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div className="text-black">
                    <label>Digite o telefone do paciente</label>
                    <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="p-2 border border-gray-700 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <button onClick={cadastrarPaciente}>
                    Cadastrar novo paciente
                </button>
            </div>
        </ModalWrapper >

    )
}