import { useState } from 'react'
import Login from './componentes/Login'
import DadosAPI from './componentes/DadosAPI'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        <DadosAPI/>
      </div>
    </>
  )
}

export default App
