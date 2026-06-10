import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const CadastroProduto = () => {
    //extrai o usuário para utilizar os seus dados
    const {usuario} = useContext(UsuarioContext)


    return(
        <div>
            <h2>Cadastro Produto</h2>
            <input type="text" placeholder="Novo Produto" />

            <button onClick={() => {
                
            }}>Cadastrar</button>
        </div>
    )
}

export default CadastroProduto