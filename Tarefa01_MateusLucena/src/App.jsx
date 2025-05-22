import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Galeria from './componentes/Galeria'
import Tema from './componentes/Tema'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Tema/>
        <Galeria/>
      </div>
    </>
  )
}

export default App
