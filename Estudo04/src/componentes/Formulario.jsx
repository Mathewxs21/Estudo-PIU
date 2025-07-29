import { useState, useEffect } from "react";

export default function Forms () {
    const [nomes, useNome] = useState([])

    function FetchNome() {
        const nomeInput = document.getElementById('nome')
        const nome = nomeInput.value;
        useNome([...nomes, nome]);
    }

    return (
        <>
            <div>
                <input type="text" name="nome" id="nome"/>
                <button onClick={FetchNome}>Enviar Nome</button>
            </div>

            <div>
                <ul>
                    {nomes.map((nome, index) => (
                    <li key={index}>{nome}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}