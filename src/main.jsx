import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { Kalumapp } from './Kalumapp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kalumapp />
  </StrictMode>,
)
