import { useState, useEffect } from 'react'

export default function OnChange() {
    const [texto, setTexto] = useState('');

    return (
        <>
        <div className="card">
            <input type="text" onChange={(e) => setTexto(e.target.value)}/>
        </div>
        <div>
            <p>{texto}</p>
        </div>
        </>
    )
}