import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info1V from './componentes/Info1v'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Info1V/>
      </div>
    </>
  )
}

export default App
