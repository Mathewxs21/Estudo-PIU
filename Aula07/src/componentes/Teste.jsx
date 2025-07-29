import { useState, useEffect } from 'react';

export default function Teste() {
  const [count, setCount] = useState(0); // Inicializa o contador

  useEffect (() => {
    document.body.style.backgroundColor = '#FF6B6B';
  }, []);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Você clicou {count} vezes
      </button>
    </div>
  );
}