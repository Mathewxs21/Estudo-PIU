import { useState, useEffect } from 'react';
import "./EffectAPI.css"

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false); 

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='div1'>
        <h3 className='titulo'>Lista de Usuários</h3>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul className='ulista'>
            {usuarios.map(usuario => (
              <li className='lilista' key={usuario.id}>{usuario.name}</li>
            ))}
          </ul>
        )}
        <button className='button' onClick={fetchData}>Recarregar</button>
      </div>
      
      <div className='div2'>
        <h3 className='titulo'>Lista de Usernames</h3>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul className='ulista'>
            {usuarios.map(usuario => (
              <li className='lilista' key={usuario.id}>{usuario.username}</li>
            ))}
          </ul>
        )}
        <button className='button' onClick={fetchData}>Recarregar</button>
      </div>
      
      <div className='div3'>
        <h3 className='titulo'>Lista de Cidades</h3>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul className='ulista'>
            {usuarios.map(usuario => (
              <li className='lilista' key={usuario.id}>{usuario.address.city}</li>
            ))}
          </ul>
        )}
        <button className='button' onClick={fetchData}>Recarregar</button>
      </div>
    </div>
  );
}