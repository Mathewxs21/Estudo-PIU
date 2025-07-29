import { useState } from 'react'
import Mensagem from './componentes/Mensagem'
import Contador from './componentes/Contador'
import ListaNomes from './componentes/ListaNomes'
import Usuarios from './componentes/Usuarios'
import Forms from './componentes/Formulario'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Mensagem/>
        <Contador/>
        <ListaNomes/> */}
        {/* <Usuarios/> */}
        <Forms/>
      </div>
    </>
  )
}

export default App
