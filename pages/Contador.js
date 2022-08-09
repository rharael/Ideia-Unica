import { useState } from "react";

function ContadorHome() {
    return (
        <div>
            <h2>Home 2</h2>
            <Contador />
            <div>Teste</div>
        </div>

    )
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1)
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )

}


export default ContadorHome