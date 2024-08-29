import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ContextProducts from './contexts/ContextProducts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProducts>
      <App />
    </ContextProducts>
    
  </StrictMode>,
)
