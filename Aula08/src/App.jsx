import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EffectAPI from './componentes/EffectAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <EffectAPI/>
      </div>
    </>
  )
}

export default App
