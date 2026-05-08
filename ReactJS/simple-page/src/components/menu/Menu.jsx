import Cardperfil from '../cardperfil/cardperfil';
import './Menu.css';



function Menu(){
    return(
        <nav class="menu">
            {/* <!-- elemento --> */}
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem somos</a>
            <a href="https://i.pinimg.com/originals/43/5f/6d/435f6d95a347985d8796b4943a1d7b1c.gif" className="menu__item">Contato</a>
            <a href="https://i.pinimg.com/736x/26/b3/2e/26b32e24c4a22ad1e708fd2d0627ae31.jpg" className="menu__item   menu__item--signin">Entrar</a>
            <a href="https://i.pinimg.com/originals/a9/f6/66/a9f666f2973b0fe2902a3193c9d4d2da.gif" className="menu__item  menu__item--signup ">Cadastrar</a>

           <Cardperfil />
        </nav>
    );
}

export default Menu