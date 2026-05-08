// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import "./perfil.css"

function Perfil({nome, idade, profissao}){
    return(

        <p className="card-perfil">
            <spam className = "card-linha">
                <strong>Nome:</strong> {nome}
            </spam>
            <spam className = "card-linha">
                <strong>idade:</strong> {idade}
            </spam>
            <spam className = "card-linha">
                <strong>Profissão:</strong> {profissao}
            </spam>
            
        </p>
    )


}

export default Perfil