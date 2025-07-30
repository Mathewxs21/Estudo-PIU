import { useState } from "react";

export default function Contador () {
    const [contador, useContador] = useState(0)

    return (
        <div>
            <h1>CLique aqui!</h1>
            <button onClick={() => useContador((contador) => contador + 1)}>{contador}</button>
        </div>
)
}