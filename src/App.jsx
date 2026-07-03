import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import Home from './pages/Home'
import Proyecto from './pages/Proyecto'
import SobreNosotros from './pages/SobreNosotros'
import Fotos from './pages/Fotos'
import Afiches from './pages/Afiches'
import Relatos from './pages/Relatos'
import Folclore from './pages/Folclore'
import Musicas from './pages/Musicas'
import Libros from './pages/Libros'

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/afiches" element={<Afiches />} />
        <Route path="/relatos" element={<Relatos />} />
        <Route path="/folclore" element={<Folclore />} />
        <Route path="/musicas" element={<Musicas />} />
        <Route path="/libros" element={<Libros />} />
      </Route>
    </Routes>
  )
}

export default App
