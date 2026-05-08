//  Crie um componente chamado Filme que receba:
// titulo
// ano
// genero
// nota
// Mostre todas as informações na tela.
// Crie pelo menos 3 filmes diferentes.

import "./filme.css"

function Filme({titulo, ano, genero, nota}){
    return(
        <div>
            <p>Titulo: {titulo}</p>
            <p>ano: {ano}</p>
            <p>genero: {genero}</p>
           <p>nota: {nota}</p> 
        </div>

    )

}

export default Filme