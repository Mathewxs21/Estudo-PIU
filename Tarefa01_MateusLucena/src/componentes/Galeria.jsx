import "./Galeria.css"
import Card from "./Card"
import Detalhes from "./Detalhes"
import imagem from "../assets/download.jpg"
import imagem1 from "../assets/download (1).jpg"
import imagem2 from "../assets/download (2).jpg"
import imagem3 from "../assets/download (3).jpg"
import imagem4 from "../assets/download (4).jpg"
import imagem5 from "../assets/download (5).jpg"

export default function Galeria(){

    function Detal() {
        
    }

    return(
        <> 
        <div className="galeria">
            <div >
                <Card onClick={() => Detal()} url={imagem} fgcaption="Mona Vanderwaal" alt="Mona" ></Card>
            </div>
            <div>
                <Card onClick={() => Detal()} url={imagem1} fgcaption="Alison DiLaurentis" alt="Alison" ></Card>
            </div>
            <div>
                <Card onClick={() => Detal()} url={imagem2} fgcaption="Aria Montgomery" alt="Aria" ></Card>
            </div>
            <div>
                <Card onClick={() => Detal()} url={imagem3} fgcaption="Spencer Hastings" alt="Spencer" ></Card>
            </div>
            <div>
                <Card onClick={() => Detal()} url={imagem4} fgcaption="Hanna Marin" alt="Hanna" ></Card>
            </div>
            <div>
                <Card onClick={() => Detal()} url={imagem5} fgcaption="Emily Fields" alt="Emily" ></Card>
            </div>
            </div>
        </>
    )
}