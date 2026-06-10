import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    //State global
    const { usuario, setUsuario } = useContext(UsuarioContext);
    //state local
    const [novoUsuario, setNovoUsuario] = useState("")
    
    const login = () => {

        //pegar o dado e colocar no storage
        setUsuario(novoUsuario)
        //Guarda o usuário no LocalStorage no formato JSON (string)
        localStorage.setItem("Usuario", JSON.stringify(novoUsuario));
        setNovoUsuario("")
    }



    return (
        <>
            <h2>Pagina de Perfil</h2>
            <span>Usuário: {usuario}</span>
            <p>
                <input 
                type="text" 
                placeholder="Novo Usuário" 
                value={novoUsuario}
                onChange={(e) => {
                    setNovoUsuario(e.target.value)
                }}
                
                />
                <button onClick={ () => {
                    login()
                    }
                }>
                    Entrar
                </button>
            </p>


        </>
    )
}

export default Perfil