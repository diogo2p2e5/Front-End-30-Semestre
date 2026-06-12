import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)
    // const [listausuario, setListaUsuario] = useState([])
    


    //ciclo de vida: lê localStorage (chave 'usuario') e faz parse
    useEffect(() => {
        const stored = localStorage.getItem("usuario")
        if (stored) {
            try {
                setUsuario(JSON.parse(stored))
            } catch {
                setUsuario(stored)
            }
        }
    }, [])

    return(
        <UsuarioContext.Provider
            value ={{
                usuario, 
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider