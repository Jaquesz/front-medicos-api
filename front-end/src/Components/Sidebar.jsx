import React, { useState } from 'react';
import { FaUserPlus, FaCalendarPlus, FaUserMd, FaUserTie, FaEye, FaUsers, FaStethoscope } from 'react-icons/fa';
import ModaladastrarPaciente from './ModalCadastrarPaciente';
import ModalAgendarConsulta from './ModalAgendarConsulta';

export default function Sidebar() {
  const [isModalAgendarConsultaOpen, setIsModalAgendarConsultaOpen] = useState(false)
  const [isModalCadastroPacienteOpen, setIsModalCadastroPacienteOpen] = useState(false)

  const handleOpenAgendarModalModal = () => setIsModalAgendarConsultaOpen(true)
  const handleCloseAgendarConsultaModal = () => setIsModalAgendarConsultaOpen(false)

  const handleOpenCadastroPacienteModal = () => setIsModalCadastroPacienteOpen(true)
  const handleCloseCadastroPacienteModal = () => setIsModalCadastroPacienteOpen(false)

  return (
    <div className="bg-white w-64 p-4 shadow-lg h-full fixed top-0 left-0 overflow-y-auto z-30">
      <h2 className="text-lg font-bold mb-3 text-gray-700">Ações</h2>
      <div className="space-y-3 mb-6">
        <button onClick={handleOpenCadastroPacienteModal}
          className="flex items-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
          <FaUserPlus className="mr-3" />
          Cadastrar Paciente
        </button>
        <ModaladastrarPaciente
          isOpen={isModalCadastroPacienteOpen}
          onClose={handleCloseCadastroPacienteModal}
        />
        <button onClick={handleOpenAgendarModalModal}
        className="flex items-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
          <FaCalendarPlus className="mr-3" />
          Agendar Consulta
        </button>
        <ModalAgendarConsulta
          isOpen={isModalAgendarConsultaOpen}
          onClose={handleCloseAgendarConsultaModal}
        />
      </div>

      <h2 className="text-lg font-bold mb-3 text-gray-700">Ações de ADMIN</h2>
      <div className="space-y-3 mb-6">
        <button className="flex items-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
          <FaUserMd className="mr-3" />
          Cadastrar Médico
        </button>
        <button className="flex items-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
          <FaUserTie className="mr-3" />
          Cadastrar Novo Usuário
        </button>
      </div>

      <h2 className="text-lg font-bold mb-3 text-gray-700">Visualização</h2>
      <div className="space-y-3">
        <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition duration-150">
          <FaEye className="mr-3" />
          Visualizar Consultas
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition duration-150">
          <FaUsers className="mr-3" />
          Visualizar Pacientes
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition duration-150">
          <FaStethoscope className="mr-3" />
          Visualizar Médicos
        </a>
      </div>
    </div>
  );
}