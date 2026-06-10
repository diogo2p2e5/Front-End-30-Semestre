import { ProdutoContext } from "./ProdutoContext"
import { Children, useState } from "react"

const ProdutoProvider = ({children}) => {
    const [produto, setProduto] = useState([])
    // const [listausuario, setListaUsuario] = useState([])

    return(
        <ProdutoContext.Provider
            value ={{
                produto, 
                setProduto
            }}
        >
            {children}
        </ProdutoContext.Provider>
    )
}

export default ProdutoProvider