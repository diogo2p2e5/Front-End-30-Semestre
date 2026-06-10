import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import MyPage from './components/mypage/MyPage'
import Header from './components/header/Header'
import CadastroProduto from './components/produto/CadastroProduto'
import PrivateRoute from './routes/PrivateRoute'

function App() {

  return (
    <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/perfil' element={<Perfil/>}/>
    <Route path='/myPage' element={
      <PrivateRoute>
        <MyPage/>
      </PrivateRoute>
      }/>
    <Route path='/produto' element={
      <PrivateRoute>
        <CadastroProduto/>
      </PrivateRoute>
      }/>
  </Routes>
  </BrowserRouter>
    </>
 
  )
}

export default App
