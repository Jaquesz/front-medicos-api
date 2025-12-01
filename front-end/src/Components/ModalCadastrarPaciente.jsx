import { useState } from "react"
import ModalWrapper from "./ModalWrapper"

export default function ModaladastrarPaciente({ isOpen, onClose }) {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')



    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose}>
            <div className="data-conteudo">
                <label>Digite o Nome do paciente</label>
                <input type="text" onChange={setNome} />
            </div>
            <div className="data-conteudo">
                <label>Digite o cpf do paciente</label>
                <input type="text" onChange={setCpf} />
            </div>
            <div className="data-conteudo">
                <label>Digite o telefone do paciente</label>
                <input type="text" onChange={setTelefone} />
            </div>
       </ModalWrapper >
           
    )
}