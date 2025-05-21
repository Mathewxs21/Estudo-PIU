import { useState } from 'react'
import './App.css'
import Props from './componentes/Props'
import Children from './componentes/Children'
import Cards from './componentes/Cards'

function App() {

  return (
    <>
      <Props nome={"Ariana Grande-Butera"} newname={"Ariana Grande"} atributo={9}/> 
      <Props/>
      <Children>
        <Cards/>
      </Children>
    </>
  )
}

export default App
