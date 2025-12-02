import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import VisualizarConsultas from './Pages/VisualizarConsultas'
import VisualizarMedicos from './Pages/VisualizarMedicos'
import VisualizarPacientes from './Pages/VisualizarPacientes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/consultas' element={<VisualizarConsultas/>}></Route>
          <Route path='/medicos' element={<VisualizarMedicos/>}></Route>
          <Route path='/pacientes' element={<VisualizarPacientes/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
