import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function VisualizarPacientes() {
    const [pacientes, setPacientes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const visualizarPacientes = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const token = localStorage.getItem('token')
                const response = await fetch('http://localhost:3000/pacientes', {
                    method: "GET", headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })
                const dados = await response.json()
                setPacientes(dados)
            } catch (error) {
                alert('Erro ao visualizar pacientes')
                setError("Não foi possível carregar os dados. Verifique a API.")
            }
            finally {
                setIsLoading(false)
            }
        }
        visualizarPacientes()
    }, [])

    if (isLoading) {
        return (
            <div className="p-8 text-center text-indigo-600 font-semibold">
                Carregando pacientes...
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8 text-center text-red-600 font-bold">
                Erro ao carregar dados: {error}
            </div>
        );
    }

    if (pacientes.length === 0) {
        return (
            <div className="p-8">
                <h1 className="text-3xl font-light border-b pb-4 mb-8 text-gray-800">
                    Visualizar Pacientes
                </h1>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <p className="text-gray-500 italic">Nenhum médico encontrado.</p>
                </div>
            </div>
        );
    }

    return (

        <div>
            <Header />
            <Sidebar />
            <h1>Visualizar Pacientes</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            {['id', 'nome', 'especialidade', 'crm'].map((header) => (
                                <th key={header}>
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map((paciente) => (
                            <tr key={paciente.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paciente.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{paciente.nome || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{paciente.cpf || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{paciente.telefone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}