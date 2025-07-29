import { useState } from 'react'
import './App.css'

import Clicks from './componentes/Clicks'
import Carros from './componentes/Carros'
import CarrosVermelhos from './componentes/CarrosVermelhos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CarrosVermelhos/> 
    </>
  )
}

export default App
