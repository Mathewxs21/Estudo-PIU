import { useState, useEffect } from 'react'

export default function Input2() {
  const [texto, setTexto] = useState('')
    
  useEffect(() => {
    if (texto.length > 5) {
      const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
      const randomColor = cor[Math.floor(Math.random() * cor.length)];
      document.body.style.backgroundColor = randomColor;
    } 
  }, [texto]);

  return (
    <>
      <div className="card">
        <input type="text" onChange={(e) => setTexto(e.target.value)}/>
      </div>
    </>
  )
}