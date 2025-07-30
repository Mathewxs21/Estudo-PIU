import { useState, useEffect } from "react";

export default function Login() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    function EnviarDados() {
        console.log(nome, email, senha)
    }

    return (
        <>
        <div className="forms">
            <input type="text" name="nome" id="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
            <input type="text" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" name="numero" id="numero" placeholder="Número" onChange={(e) => setSenha(e.target.value)}/>
            <button onClick={EnviarDados}>Enviar dados</button>
        </div>
        </>
    )
}