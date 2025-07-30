import { useState, useEffect } from "react";
import "./Login.css"

export default function Login() {
    const [login, setLogin] = useState('')
    const [palavra, setPalavra] = useState('')

    function handlecolor() {
        if (palavra === 'PIUprova') {
            const cor1 = '#40957f'
            document.body.style.backgroundColor = cor1;
          } else {
            const cor2 = '#3c515d'
            document.body.style.backgroundColor = cor2;
          }
    }


    return (
        <>
             <div className="container">
                <input type="text" name="login" id="login" placeholder="Login" onChange={(e) => setLogin(e.target.value)}/>
                <input type="text" name="palavra-passe" id="palavra-passe" placeholder="Palavra-passe" onChange={(e) => setPalavra(e.target.value)}/>
                <button onClick={handlecolor}>Enviar</button>
             </div>
             
        </>
    )
}