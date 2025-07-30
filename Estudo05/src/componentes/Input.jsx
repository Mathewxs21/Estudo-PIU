import { useState, useEffect } from 'react'

export default function Input() {
    
  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

  return (
    <>
      <div className="card">
        <input type="text" onChange={handleColor}/>
      </div>
    </>
  )
}