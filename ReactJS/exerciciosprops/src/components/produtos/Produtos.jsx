import Produto from "../exercicio2/produto"
import "./produtos.css"

function Produtos(){
    const produtos = [
        {
            nome: "Tenis legal",
            preco: 300,
            descricao: "Tenis bem rock n roll"
        },
        {
            nome: "Tenis cool",
            preco: 400,
            descricao: "ok rockers!!!, esse tenis é show de bola rockers!!!"
        }
    ]


    return(
        produtos.map((produtinho) => {
            return (
                <Produto 
                nome = {produtinho.nome}
                preco = {produtinho.preco}
                descricao = {produtinho.descricao}
                />
            )
        })
    )
}

export default Produtos