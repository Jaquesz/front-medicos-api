import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function VisualizarConsultas() {
    const [consultas, setConsultas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    async function alterarStatusConsulta(id, novoStatus) {
        const dados = { status: novoStatus }
        const token = localStorage.getItem('token')

        try {
            const response = await fetch(`http://localhost:3000/consultas/${id}`, {
                method: "PUT",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })

            if (response.ok) {
                setConsultas(prevConsultas => prevConsultas.map(consulta =>
                    consulta.id === id ? { ...consulta, status: novoStatus } : consulta
                ));
            } else {
                alert("Falha ao atualizar o status");
            }
        } catch (err) {
            console.error(err);
            alert("Erro na requisição");
        }
    }

    useEffect(() => {
        const visualizarConsultas = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const token = localStorage.getItem('token')
                const response = await fetch('http://localhost:3000/consultas', {
                    method: "GET", headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })
                const dados = await response.json()
                setConsultas(dados)
            } catch (error) {
                console.error(error)
                setError("Não foi possível carregar os dados. Verifique a API.")
            }
            finally {
                setIsLoading(false)
            }
        }
        visualizarConsultas()
    }, [])

    if (isLoading) return <div className="p-8 text-center text-indigo-600 font-semibold">Carregando consultas...</div>;
    if (error) return <div className="p-8 text-center text-red-600 font-bold">Erro ao carregar dados: {error}</div>;

    return (
        <div>
            <Header />
            <Sidebar />
            <div className="p-8 ml-64 mt-20">
                <h1 className="text-white mb-8 text-2xl">Visualizar consultas</h1>

                {consultas.length === 0 ? (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-white">
                        <p className="text-gray-600 italic">Nenhuma consulta encontrada.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                            <thead className="bg-gray-700">
                                <tr>
                                    {['ID', 'Data/Hora', 'Médico ID', 'Paciente ID', 'Status Atual', 'Mudar Status'].map((header) => (
                                        <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-600">
                                {consultas.map((consulta) => (
                                    <tr key={consulta.id} className="hover:bg-gray-700 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{consulta.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{consulta.dataHora}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{consulta.medicoId || 'N/A'}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{consulta.pacienteId || 'N/A'}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                ${consulta.status === 'agendada' ? 'bg-yellow-100 text-yellow-800' :
                                                    consulta.status === 'realizada' ? 'bg-green-100 text-green-800' :
                                                        'bg-red-100 text-red-800'
                                                }`}>
                                                {consulta.status ? consulta.status.toUpperCase() : 'INDEFINIDO'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <select
                                                value={consulta.status}
                                                onChange={(e) => alterarStatusConsulta(consulta.id, e.target.value)}
                                                className="p-2 border border-gray-300 rounded-md w-full bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            >
                                                <option value="agendada">Agendada</option>
                                                <option value="realizada">Realizada</option>
                                                <option value="cancelada">Cancelada</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}