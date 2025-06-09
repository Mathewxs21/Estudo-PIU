import { useState } from 'react'
import './App.css'
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'
import img4 from './assets/img4.jpeg'
import img5 from './assets/img5.jpeg'

import Galeria from './componentes/Galeria'
import Tema from './componentes/Tema'


const personagens = [
  {id:1,
  nome: "Vergonha",
  descricao: "Tem vergonha de tudo",
  imagem: img1
  },
  {id:2,
  nome: "Alegria",
  descricao: "Sempre otimista",
  imagem: img2
  },
  {id:3,
  nome: "Tristeza",
  descricao: "Sempre pesa o clima",
  imagem: img3
  },
  {id:4,
  nome: "Tédio",
  descricao: "Não tem ânimo para nada, anda em itálico",
  imagem: img4
  },
  {id:5,
  nome: "Raiva",
  descricao: "Sempre estressado",
  imagem: img5
  }
]

function App() {

  return (
    <>
      <Tema>
        <h1>Divertidamente</h1>
        <div className='container'>
          <Galeria personagens={personagens}/>
        </div>
      </Tema>
    </>
  )
}

export default App