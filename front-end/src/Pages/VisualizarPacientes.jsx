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
            <div className="p-8 text-center text-white font-semibold">
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
                <h1 className="text-3xl font-light border-b pb-4 mb-8 text-white">
                    Visualizar Pacientes
                </h1>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-white">
                    <p className="text-white italic">Nenhum médico encontrado.</p>
                </div>
            </div>
        );
    }

    return (

        <div className="p-8 ml-64 mt-20">
            <Header />
            <Sidebar />
            <h1 className="mb-8">Visualizar Pacientes</h1>
            <div>
                <table className="divide-y">
                    <thead>
                        <tr>
                            {['id', 'nome', 'especialidade', 'crm'].map((header) => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y text-left text-xs">
                        {pacientes.map((paciente) => (
                            <tr key={paciente.id} className="hover:bg-black">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{paciente.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{paciente.nome || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{paciente.cpf || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{paciente.telefone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}