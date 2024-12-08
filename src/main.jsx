import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './audio.css'
import './mediaquerry.css'
import './Navigation.css'
import './loadingScreen.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
