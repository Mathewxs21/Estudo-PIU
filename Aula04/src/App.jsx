import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListasFilter from './componentes/ListasFilter'
import ListasMap from './componentes/ListasMap'
import ListasObj from './componentes/ListasObj'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListasFilter/>
      <ListasObj/>
      <ListasMap/>
    </>
  )
}

export default App
