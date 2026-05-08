// 02) Crie um componente chamado Produto que receba as seguintes props:
// nome
// preco
// descricao
// O componente deve exibir:
//    Nome do Produto
//    Preço: R$
//    Descrição do produto

// Crie pelo menos 3 produtos diferentes utilizando o componente.

import "./produto.css"

function Produto({nome , preco, descricao}){
    return(
        <div>
          <p> Nome: {nome}     </p>
          <p> Preço: R${preco} </p>    
          <p> Descrição: {descricao}</p>     
          
        </div>
    )
}

export default Produto