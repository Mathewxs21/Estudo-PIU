import { useState } from 'react'
import DarkMode from './componentes/DarkMode'
import Input from './componentes/Input'
import Login from './componentes/Login'
import OnChange from './componentes/OnChange'
import ListaPosts from './componentes/ListaPosts'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ListaPosts/>
      </div>
    </>
  )
}

export default App
