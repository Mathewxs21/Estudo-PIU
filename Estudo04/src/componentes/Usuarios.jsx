import { useState, useEffect } from "react";

export default function Usuarios() {
    const [usuarios, useUsuarios] = useState([])

    const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
            const data = await response.json(); 
            useUsuarios(data); 
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
        }

    useEffect (() => {fetchUsuarios()})

    return (
        <>
            <div>
                <ul>
                    {usuarios.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        
        </>
    )
}