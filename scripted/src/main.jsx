import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainComponent  from './components/mainComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MainComponent /> */}
  </StrictMode>,
)
