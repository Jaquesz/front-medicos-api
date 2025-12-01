import { useEffect, useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModalWrapper from "./ModalWrapper";

export default function ModalAgendarConsulta({ isOpen, onClose }) {
    const [dataConsulta, setDataConsulta] = useState(new Date())
    const [status, setStatus] = useState('agendada')
    const [medicoId, setMedicoId] = useState('')
    const [pacienteId, setPacienteId] = useState('')
    const [medicos, setMedicos] = useState([])
    const [pacientes, setpacientes] = useState([])

    async function salvarConsulta() {
        try {
            const token = localStorage.getItem('token')
            if (!medicoId || !pacienteId) {
                alert("Por favor, selecione um médico e um paciente.")
                return;
            }
            const payload = {
                dataHora: dataConsulta,
                status: status,
                medicoId: medicoId,
                pacienteId: pacienteId
            }
            if (token) {
                const fetchOptions = {
                    method: "POST", headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }, body: JSON.stringify(payload)
                }

                const response = await fetch('http://localhost:3000/consultas', fetchOptions)
                if (response.ok) {
                    alert("Consulta agendada com sucesso")
                    if (onClose) {
                        onClose()
                    }
                }
                else {
                    alert("Erro ao agendar consulta")
                }
            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const buscarMedicos = async () => {
            try {
                const response = await fetch('http://localhost:3000/medicos', {
                    method: "GET", headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const dados = await response.json()
                setMedicos(dados)

            } catch (error) {
                alert("erro ao buscar dados dos médicos")
            }
        }
        const buscarPacientes = async () => {
            try {
                const response = await fetch('http://localhost:3000/pacientes', {
                    method: "GET", headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                setpacientes(data)
            } catch (error) {
                alert("Erro ao buscar pacientes")
            }
        }
        buscarMedicos(), buscarPacientes()
    }, [])

    console.log(medicos);
    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Agendar uma Consulta</h2>

                <label className="text-sm font-medium text-gray-700">Selecione a data da consulta</label>
                <DatePicker className="p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 text-black"
                    selected={dataConsulta}
                    onChange={(date) => setDataConsulta(date)}
                    placeholderText="Clique para selecionar uma data"
                    isClearable
                    showTimeSelect
                    dateFormat="Pp"
                />

                <label className="text-sm font-medium text-gray-700">Selecione o médico</label>
                <select
                    value={medicoId}
                    onChange={(e) => setMedicoId(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full bg-white focus:ring-blue-500 focus:border-blue-500 text-black"
                >
                    <option value="" disabled>Selecione o Médico</option>
                    {
                        medicos.map((medico) => {
                            return (
                                <option key={medico.id} value={medico.id}>{medico.nome}</option>
                            )
                        })
                    }
                </select>

                <label className="text-sm font-medium text-gray-700 ">Selecione o paciente</label>
                <select
                    value={pacienteId}
                    onChange={(e) => setPacienteId(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full bg-white focus:ring-blue-500 focus:border-blue-500 text-black"
                >
                    <option value="" disabled>Selecione o paciente</option>
                    {
                        pacientes.map((paciente) => {
                            return (
                                <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
                            )
                        })
                    }
                </select>

                <button
                    onClick={salvarConsulta}
                    className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150"
                >
                    Agendar Consulta
                </button>
            </div>
        </ModalWrapper>

    )
}