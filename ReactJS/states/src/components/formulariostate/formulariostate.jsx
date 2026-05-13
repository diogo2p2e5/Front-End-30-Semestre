import { use, useState } from "react"

function Formulariostate() {
const [nome, setNome] = useState("")
const [sobrenome, setSobrenome] = useState("")

function PegarSobrenome(evento) {
    setSobrenome(evento.target.value)
}

    return(
        <div>
            <h2>Formulário com State</h2>
            <label htmlFor="nome">Nome</label>
            <input 
            type="text" 
            placeholder="Digite seu nome"
            onChange={(evento) =>{
                    setNome(evento.target.value)
            }}
            />
            <input 
            type="text" 
            placeholder="Digite seu sobrenome"
            onChange={PegarSobrenome}
            /> 
             <br />
             <label htmlFor="">Texto Digitado:<strong>{nome} {sobrenome}</strong> </label>
        </div>
    )
}


export default Formulariostate