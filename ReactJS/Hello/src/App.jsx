import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/title/Title'
import SubTitle from './components/subtitle/SubTitle'


function App() {

  return (
    <>
    <Title texto ="Titulo da minha pagina poggers"/>
    <SubTitle texto = "Minha Página" />
    <SubTitle jorge = "legal" texto = "Minha Página é " />
    </>
  )
}

export default App
