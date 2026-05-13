import { useState } from 'react'
import './App.css'
import Contador from './components/contador/contador'
import Formulariostate from './components/formulariostate/formulariostate'
import CadFruta from './components/cadfruta/cadfruta'

function App() {
  //Variável privada (objeto) só pode ser mudada pela função setTitulo
  const [titulo, setTitulo] = useState("Google")

function mudarTexto(){
    setTitulo ("Microsoft")
  }
function mudarTexto2(){
    setTitulo ("Poggers")
  }


  return (
    // <>
    // <h1>Minha Pagina de {titulo}</h1>
    // <button onClick={mudarTexto}>Mudar Texto</button>
    // <br />
    // <button onClick={mudarTexto2}>Poggers</button>
    
    // <Contador />
    // <br />
    // <Formulariostate />
    // </>

    <CadFruta/>
  );
}

export default App
