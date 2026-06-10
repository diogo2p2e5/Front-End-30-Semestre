import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"

const Header = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext)

    const logout = () => {
        setUsuario(null)//apaga do state
        localStorage.removeItem("Usuario")//apaga do local storage
    }

    return(
        <header>
            <nav>
                <Link to={"/"}>Home</Link>{" "}
                <Link to={"/perfil"}>Perfil</Link>{" "}
                <Link to={"/myPage"}>My Page</Link>{" "}
                <Link to={"/produto"}>Produto</Link>{" "}
                <span>({usuario})</span>
                   <button onClick={
                    () => {
                        logout()
                    }
                }>
                    Sair
                </button>
            </nav>
        </header>
    )
}

export default Header