import { use, useEffect, useState } from "react"
import ModalWrapper from "./ModalWrapper"

export default function ModalCadastrarMedico({ isOpen, onClose }) {

    const [nome, setNome] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [crm, setCrm] = useState('')

    async function cadastrarMedico() {
        try {
            const token = localStorage.getItem('token')

            const payload = {
               nome: nome,
               especialidade : especialidade,
               crm : crm
            }
            if (token) {
                const fetchOptions = {
                    method: "POST", headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }, body: JSON.stringify(payload)
                }

                const response = await fetch('http://localhost:3000/medicos', fetchOptions)
                if (response.ok) {
                    alert("médico cadastrado com sucesso")
                    if (onClose) {
                        onClose()
                    }
                }
                else {
                    alert("Erro ao cadastrar médico")
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
                    <label>Digite o Nome do médico</label>
                    <input type="text" value={nome} onChange={(e) =>setNome(e.target.value)} className="p-2 border border-gray-700 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div className="text-black">
                    <label>Digite a especialidade</label>
                    <input type="text" value={especialidade} onChange={(e) =>setEspecialidade(e.target.value)} className="p-2 border border-gray-700 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div className="text-black">
                    <label>Digite o crm</label>
                    <input type="text" value={crm} onChange={(e) => setCrm(e.target.value)} className="p-2 border border-gray-700 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <button onClick={cadastrarMedico}>
                    Cadastrar novo médico
                </button>
            </div>
        </ModalWrapper >

    )
}