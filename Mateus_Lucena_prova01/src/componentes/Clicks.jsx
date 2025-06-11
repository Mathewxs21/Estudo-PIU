import { useState } from "react"
import './Clicks.css'

export default function Clicks(){
    //let valor = 0
    let [click, setClick] = useState(0) //criação do let click onde ira guardar a quantidade de clicks, tendo como parametro inicial 0, que sera alterado após utilizar as demais partes do codigo

    return(
        <>
            <div>
                <h1>Cliques: {click} </h1>
                <button className="botao_incremento" onClick={() => setClick(click+1)}>Incrementar</button> {/* Aqui foi utilizada a função de onclick para onde ao apertar o botão ela ira pegar o valor da variavel acima com o setclick e somar  */}
                <button className="botao_decremento" onClick={() => setClick(click-1)}>Decremento</button> {/* Aqui foi utilizada a função de onclick para onde ao apertar o botão ela ira pegar o valor da variavel acima com o setclick e subtrair, retornando assim o novo valor  */}
            </div>
        </>
    )
}