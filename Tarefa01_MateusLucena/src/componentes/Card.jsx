import "./Card.css"

export default function Card(props){

    return(
        <div>
            <figure>
                <img src={props.url} alt={props.alt} />
                <figcaption>{props.fgcaption}</figcaption>
            </figure>
        </div>
    )
}