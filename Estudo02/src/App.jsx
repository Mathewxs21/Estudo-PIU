import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './componentes/HelloWorld' 
import { tarefas_array } from './componentes/dados'
import Evento from './componentes/Evento'
import Tarefas from './componentes/Tarefas'
import Tema from './componentes/Tema'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tema/>
    <div>
      <Tarefas/>
    </div>
    </>
)}


