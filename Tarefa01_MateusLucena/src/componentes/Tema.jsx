export default function Tema(){
    
    function mudarCor(){
            const cor = ["#000000", "#FFFFFF"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

    return(
        <div>
            <button onClick={mudarCor}>Mudar tema</button>
        </div>

    )
}

