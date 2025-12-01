import React from 'react';

export default function Content () {
  return (
    <div className="p-8 pt-20 min-h-screen bg-white">
      <h1 className="text-3xl font-light border-b pb-4 mb-8 text-gray-800">
        Consultas Agendadas
      </h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-500 italic">
          Nenhuma consulta encontrada.
        </p>
      </div>

    </div>
  )
}