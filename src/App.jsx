import Metodos from './components/no-reutilizables/metodos/Metodos'
import './App.css'
import Medicina from './components/no-reutilizables/carreras/Medicina'
import Navbar from './components/reutilizables/navbar/Navbar.jsx'
import Header from './components/no-reutilizables/header/Header'
import { Routes, Route } from 'react-router-dom'
import Abogacia from './components/no-reutilizables/carreras/Abogacia'
import Contabilidad from './components/no-reutilizables/carreras/Contabilidad'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Header/>}/>
          <Route path='metodos' element={<Metodos/>}/>
          <Route path='medicina' element={<Medicina/>}/>
          <Route path='contabilidad' element={<Contabilidad/>}/>
          <Route path='abogacia' element={<Abogacia/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
