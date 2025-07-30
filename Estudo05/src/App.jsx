import { useState } from 'react'
import DarkMode from './componentes/DarkMode'
import Input from './componentes/Input'
import Login from './componentes/Login'
import OnChange from './componentes/OnChange'
import ListaPosts from './componentes/ListaPosts'
import Input2 from './componentes/Input2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Input2/>
      </div>
    </>
  )
}

export default App
