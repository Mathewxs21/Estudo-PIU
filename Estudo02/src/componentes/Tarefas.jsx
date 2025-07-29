import './Tarefas.css';
import { useState } from 'react';
import { tarefas_array } from './dados';

export default function Tarefas() {
    const [TarefaTotal, setTarefas] = useState(tarefas_array);

    const concluirTarefa = (id) => {
        const novasTarefas = TarefaTotal.map(tarefa =>
            tarefa.id === id ? { ...tarefa, status: "Concluída" } : tarefa
        );
        setTarefas(novasTarefas);
    };

    return (
        <>
            <div className='divtarefas'>
                {TarefaTotal.map(tarefa => (
                    <div 
                        className={'tarefaemsi ' + (tarefa.status === "Concluída" ? 'concluida' : 'pendente')} 
                        key={tarefa.id}
                    >
                        <h2>{tarefa.nome}</h2>
                        <h3>{tarefa.status}</h3>
                        {tarefa.status ? (
                            <div className="butoes">
                                {tarefa.status === "Concluída" ? (
                                    <h2>Tarefa Concluída</h2>
                                ) : (
                                    <button onClick={() => concluirTarefa(tarefa.id)}>Concluir Tarefa</button>
                                )}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </>
    );
}

{/* import './Tarefas.css'
import { useState } from 'react'
import { tarefas_array } from './dados';

export default function Tarefas() {

  const [TarefaTotal, setTarefas] = useState(tarefas_array);

  const concluirTarefa = (id) => {
        // Atualiza o estado da tarefa
        const novasTarefas = TarefaTotal.map(tarefa =>
            tarefa.id === id ? { ...tarefa, status: "Concluída" } : tarefa
        );
        setTarefas(novasTarefas);
    };

return (
    <>
        <div className='divtarefas'>
            {TarefaTotal.map(tarefa => (
                <div 
                    className={`tarefaemsi ${tarefa.status === "Concluída" ? 'concluida' : 'pendente'}`} 
                    key={tarefa.id}
                >
                    <h2>{tarefa.nome}</h2>
                    <h3>{tarefa.status}</h3>
                    {tarefa.status && (
                        <>
                            {tarefa.status === "Concluída" && (
                                <div className="butoes">
                                    <h2>Tarefa Concluída</h2>
                                </div>
                            )}
                            {tarefa.status === "Pendente" && (
                                <div className="butoes">
                                    <button onClick={() => concluirTarefa(tarefa.id)}>Concluir Tarefa</button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    </>
)} */}

