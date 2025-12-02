import { useEffect, useState } from "react";

export default function VisualizarConsultas() {
    const [consultas, setConsultas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const visualizarConsultas = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await fetch('http://localhost:3000/consultas', {
                    method: "GET", headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const dados = await response.json()
                setConsultas(dados)
            } catch (error) {
                alert('Erro ao visualizar consultas')
                setError("Não foi possível carregar os dados. Verifique a API.")
            }
            finally {
                setIsLoading(false)
            }
        }
        visualizarConsultas()
    }, [])

    if (isLoading) {
        return (
            <div className="p-8 text-center text-indigo-600 font-semibold">
                Carregando consultas...
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

    if (consultas.length === 0) {
        return (
            <div className="p-8">
                <h1 className="text-3xl font-light border-b pb-4 mb-8 text-gray-800">
                    Visualizar Consultas
                </h1>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <p className="text-gray-500 italic">Nenhuma consulta encontrada.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Visualizar consultas</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            {['id', 'dataHora', 'status', 'medicoId', 'pacienteId'].map((header) => (
                                <th key={header}>
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {consultas.map((consulta) => (
                            <tr key={consulta.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{consulta.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consulta.pacienteId || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consulta.medicoId || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(consulta.dataHora).toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${consulta.status === 'agendada' ? 'bg-yellow-100 text-yellow-800' :
                                        consulta.status === 'realizada' ? 'bg-green-100 text-green-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {consulta.status.toUpperCase()}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
        </div >
    )
}