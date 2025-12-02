import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import ModalAgendarConsulta from "../Components/ModalAgendarConsulta";  
import ModaladastrarPaciente from "../Components/ModalCadastrarPaciente";
import VisualizarConsultas from "../Components/VisualizarConsultas";

export default function Home() {

    const renderScreen = (screen) => {
        switch(screen){
            case 'VisualizarConsultas':
                return <VisualizarConsultas/>
            case 'dashboard':
                default:
                    return <Content/>
        }
    }

    return (
        <div>
            <Header/>
            <Sidebar/>
            <div className="ml-64 pt-20 bg-white min-h-screen w-full">
               {renderScreen(activeScreen)} 
            </div>
        </div>
    )
}