import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import ModalAgendarConsulta from "../Components/ModalAgendarConsulta";  
import ModaladastrarPaciente from "../Components/ModalCadastrarPaciente";

export default function Home() {


    return (
        <div>
            <Header/>
            <Sidebar/>
           
        </div>
    )
}