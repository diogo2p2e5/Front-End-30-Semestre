import myImages from "../../assets/imagem-legal.webp"
import './cardperfil.css';



function Cardperfil(){
    return (
        <div className="card-perfil">
             <img className="card-perfil__image" src={myImages} alt=""/>
        </div>
    )
}

export default Cardperfil