import React, { useEffect, useState } from 'react';
import { FaUserPlus, FaCalendarPlus, FaUserMd, FaUserTie, FaEye, FaUsers, FaStethoscope } from 'react-icons/fa';
import ModaladastrarPaciente from './ModalCadastrarPaciente';
import ModalAgendarConsulta from './ModalAgendarConsulta';
import ModalCadastrarMedico from './ModalCastrarMedico';
import VisualizarConsultas from '../Pages/VisualizarConsultas';
import { Link } from 'react-router-dom';
import ModalCadastrarUsuario from './ModalCadastrarUsuario';

export default function Sidebar() {

  const [ModalAgendarConsultaOpen, setModalAgendarConsultaOpen] = useState(false)
  const handleOpenAgendarModal = () => setModalAgendarConsultaOpen(true)
  const handleCloseAgendarConsultaModal = () => setModalAgendarConsultaOpen(false)

  const [ModalCadastroPacienteOpen, setModalCadastroPacienteOpen] = useState(false)
  const handleOpenCadastroPacienteModal = () => setModalCadastroPacienteOpen(true)
  const handleCloseCadastroPacienteModal = () => setModalCadastroPacienteOpen(false)

  const [ModalCadastrarMedicoOpen, setModalCadastrarMedicoOpen] = useState(false)
  const handleOpenCadastrarMedicoModal = () => setModalCadastrarMedicoOpen(true)
  const handleCloseCadastrarMedicoModal = () => setModalCadastrarMedicoOpen(false)

  const [ModalCadastrarUsuarioOpen, setModalCadastrarUsuarioOpen] = useState(false)
  const handleOpenCadastrarUsuarioModal = () => setModalCadastrarUsuarioOpen(true)
  const handleCloseCadastrarUsuarioModal = () => setModalCadastrarUsuarioOpen(false)

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
          isOpen={ModalCadastroPacienteOpen}
          onClose={handleCloseCadastroPacienteModal}
        />
        <button onClick={handleOpenAgendarModal}
          className="flex items-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
          <FaCalendarPlus className="mr-3" />
          Agendar Consulta
        </button>
        <ModalAgendarConsulta
          isOpen={ModalAgendarConsultaOpen}
          onClose={handleCloseAgendarConsultaModal}
        />
      </div>

      <h2 className="text-lg font-bold mb-3 text-gray-700">Ações de ADMIN</h2>
      <div className="space-y-3 mb-6">
        <button onClick={handleOpenCadastrarMedicoModal}
          className="flex items-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
          <FaUserMd className="mr-3" />
          Cadastrar Médico
        </button>
        <ModalCadastrarMedico
          isOpen={ModalCadastrarMedicoOpen}
          onClose={handleCloseCadastrarMedicoModal}
        />

        <button onClick={handleOpenCadastrarUsuarioModal}
          className="flex items-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
          <FaUserTie className="mr-3" />
          Cadastrar Novo Usuário
        </button>
        <ModalCadastrarUsuario
          isOpen={ModalCadastrarUsuarioOpen}
          onClose={handleCloseCadastrarUsuarioModal}
        />
      </div>

      <h2 className="text-lg font-bold mb-3 text-gray-700">Visualização</h2>
      <div className="space-y-3">
        <Link
          to="/consultas"
          className="flex items-center w-full text-gray-700 hover:text-indigo-600 transition duration-150 py-2"
        >
          <FaEye className="mr-3" />
          Visualizar Consultas
        </Link>

        <Link
          to="/pacientes"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition duration-150"
        >
          <FaUsers className="mr-3" />
          Visualizar Pacientes
        </Link>

        <Link
          to="/medicos"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition duration-150"
        >
          <FaStethoscope className="mr-3" />
          Visualizar Médicos
        </Link>
      </div>
    </div>
  );
}