import { Link } from "react-router-dom"
import "./header.css"


export default function Header() {
    return(
        <nav className="navbar"> 
        <Link to={"/"}>Home</Link>
        <Link to={"/quemsomos"}>Quem Somos</Link>
        <Link to={"/frutas"}>Cadastro de Frutas</Link>
        <Link to={"/produtos"}>Cadastro de Produtos</Link>
        </nav>
    )
}