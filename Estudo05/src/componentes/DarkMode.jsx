import { useState, useEffect } from "react";

export default function DarkMode() {
    const [count, useCount] = useState(0)
    const [tema, useTema] = useState('light');

    const toggleTema = () => {
    useTema((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
    document.body.className = tema;
    document.body.style.backgroundColor = tema === 'light' ? '#ffffff' : '#000000';
    }, [tema]);

    return (
        <>
        <div className={tema}>
            <button onClick={toggleTema}>
                Alternar Tema ({tema === 'light' ? 'Claro' : 'Escuro'})
            </button>
        </div>
        </>
    )
}