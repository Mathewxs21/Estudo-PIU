
export default function Evento() {

    function MeuEvento () {
        console.log("fui atividado")
    }

    return (
        <div>
            <p>clique para disparar eventos</p>
            <button onClick={MeuEvento}>Ativar</button>
        </div>
    )
}