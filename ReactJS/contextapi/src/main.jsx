import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsaurioProvider from './context/UsuarioProvider.jsx'
import ProdutoProvider from './context/ProdutoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsaurioProvider>
      <ProdutoProvider>
    <App />
      </ProdutoProvider>
    </UsaurioProvider>
  </StrictMode>,
)
