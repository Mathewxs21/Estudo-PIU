import { useState, useEffect } from "react";

export default function DadosAPI() {
    const [posts, setPosts] = useState([]);
    const [poste, setPoste] = useState([]);
    const [userID, setUserID] = useState('');
    const [loading, setLoading] = useState(true); 

    const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
            const data = await response.json(); 
            setPosts(data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {fetchUsuarios()} , []); 

    useEffect(() => {
        if (userID) {
            const esp = posts.filter(post => post.userId === Number(userID));
            setPoste(esp);
        }
    }, [userID]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <>
        <div className="input">
            <input type="number" name="userID" id="userID" placeholder="UserID (1 até 10)" onChange={(e) => setUserID(e.target.value)}/>
            <button onClick={fetchUsuarios}>Acessar</button>
        </div>
        <div>
        <h1>Lista de Posts</h1>
        <ul>
            {poste.map(post => (
            <li key={post.id}>Titulo:{post.title} <br /> Conteúdo: {post.body}</li>
            ))}
        </ul>
        </div>
        </>
    );
}