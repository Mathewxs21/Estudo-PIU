import { useState, useEffect } from 'react';

export default function ListaPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento

    // Usamos uma função assíncrona 
    const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); //fecth faz uma requisição HTTP utilizando o método GET
            const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
            setPosts(data); // Atualiza o estado com os dados recebidos
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
        }

    useEffect(() => {fetchUsuarios()} , []); // O array vazio garante que o efeito execute apenas uma vez

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
        <h1>Lista de Posts</h1>
        <ul>
            {posts.map(post => (
            <li key={post.id}>{post.title}, {post.body}</li>
            ))}
        </ul>
        </div>
    );
}