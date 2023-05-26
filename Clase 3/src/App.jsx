import { useState } from 'react'
import foto from './assets/foto.jpg'
import './App.css'
import Clase4 from './Components/Clase4'

let listaPasos = ["Abrir la terminal", "npm create vite", "cd + nombre del proyecto", "npm install", "npm run dev"]

const ListaDePasos = () => {
  let pasos = listaPasos.map((paso, i) => {
    return <li>{paso}</li>
  })
  return <ul className="list">{pasos}</ul>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={foto} className="logo"/>
      <Clase4 name="Juan"/>
      <h1 className="titulo">Pasos para crear un proyecto React con Vite</h1>
      <div className="list-container">
        <ListaDePasos/>
      </div>
      <h3>¿Querés más información?</h3>
      <form action="post" className='form-container'>
        <input type="email" name="email" id="email" placeholder='ingresa tu email'/>
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
