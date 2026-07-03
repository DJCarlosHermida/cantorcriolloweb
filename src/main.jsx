import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { getImageUrl } from './config/media'
import './styles/global.scss'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

document.documentElement.style.setProperty(
  '--panel-bg-image',
  `url('${getImageUrl('img/para_fondo_gris.jpg')}')`,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
