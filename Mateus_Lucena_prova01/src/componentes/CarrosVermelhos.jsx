import './Carros.css';
import { useState } from 'react';
import { carros } from './dados';

export default function CarrosVermelhos() {
    
    const carrosverm = carros.filter(carro => carro.cor === "vermelho"); //Aqui foi criada uma constante que vai pegar os items presentes na array de acordo com o filtro pedido, nessa caso, pegar apenas carros da cor vermelha, como é vista na seguinte parte do codigo carro.cor === "vermelho"

    return (
        <>
            <h1>Lista de Carros Vermelhos</h1>
            <div>
                <ul className='lista-horizontal'>
                    {carrosverm.map(carro => ( //Aqui está sendo chamado o map onde para cada item de carrosverm, ele vai pegar o id, modelo, cor e ano para que eu possa adicionar nas tags abaixo
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