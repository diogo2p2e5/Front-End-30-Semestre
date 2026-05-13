import { useState } from "react"

function CadFruta() {
const [furta, setFruta] = useState("")
const [quantidade, setQauntidade] = useState(0)

const [arrfrutas, setArrFrutas] = useState([
    {id: 1, nome: "Abacaxi", quantidade : 10},
    {id: 2, nome: "Melão", quantidade : 25}
])

function cadastrar(e) {
    e.preventDefault()
    setArrFrutas([...arrfrutas,{id: Date.now(), nome : furta, quantidade: quantidade}])
}



    return(
        <section className="sessao-cadastro"> 
            <h2>Cadastro</h2>
            <form action="" onSubmit={cadastrar}>
                
            <fieldset className="cadastro">
            <label htmlFor="fruta" className="cadastro__rotulo">
                Digite o nome da fruta
            </label>
            </fieldset>
            <input 
            type="text" 
            id="fruta"
            placeholder="ex: limão"
            className="cadastro__entrada"
            onChange={(e)=> {
                setFruta(e.target.value)
            }}
            />
            <input 
            type="number" 
            id="quantidade"
            placeholder="ex: 20"
            className="cadastro__entrada"
            onChange={(e)=> {
                setQauntidade(e.target.value)
            }}
            />
            <button type="submit" className="cadastro__btncadastrar">Cadastrar</button>
           </form>
 

            <div className="resultados">
                <ul>
                    {
                        arrfrutas.map((f) => {
                            return (
                            <li key={f.id}>
                                Fruta:<strong>{f.nome}</strong>  | 
                                quantidade: <strong>{f.quantidade}</strong> 
                            </li>
                            ) 
                        })
                    }
                <li>Limão</li>
                <li>Abacaxi</li>
                </ul>
            </div>
        </section>
    )
}

export default CadFruta