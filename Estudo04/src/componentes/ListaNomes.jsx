import { useState } from "react";

export default function ListaNomes() {
    const [nomes, useNomes] = useState(['João', 'Maria', 'Pedro'])

    const adicionarNome = () => {
        useNomes([...nomes, 'Mateus']); 
    }
    
    return (
        <>
        <div>
            <ul>
                {nomes.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
            <button onClick={adicionarNome}>Adicionar</button>
        </div>
        </>
    )
}