import React, { useEffect, useState } from 'react';
import "./Tema.css"

export default function Tema() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) { 
      document.body.classList.add("dark-mode");
    } else { 
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        Alternar Modo
      </button>
    </div>
  );
}