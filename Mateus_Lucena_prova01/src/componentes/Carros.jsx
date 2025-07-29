import './Carros.css';
import { useState } from 'react';
import { carros } from './dados';

export default function Carros() {
    const [TodosCarros, setCaros] = useState(carros); //Nessa parte do codigo ele pega todos os carros cadastrados da array que foi importado lá em cima, e colocando como paremetro inicial das const todoscarros a lista inicial de array


    return (
        <>
            <h1>Lista de Carros</h1>
            <div className='divcarros'>
                <ul className='lista-horizontal'>
                    {TodosCarros.map(carro => ( //Aqui está sendo chamado o map onde para cada item de carrosverm, ele vai pegar o id, modelo, cor e ano para que eu possa adicionar nas tags abaixo
                        <li>
                            <div className='carroemsi' key={carro.id}>
                                <h2>{carro.modelo}</h2>
                                <div className='infocarro'>
                                    <h3>{carro.cor}</h3> {/* aqui está sendo chamado a cor especifica do carro */}
                                    <h3>{carro.ano}</h3> {/* aqui está sendo chamado o ano especifica do carro */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
}