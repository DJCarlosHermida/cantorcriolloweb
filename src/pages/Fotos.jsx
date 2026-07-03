import ContentPanel from '../components/ui/ContentPanel'
import ImageGallery from '../components/ui/ImageGallery'
import { fotosGallery } from '../data/fotos'
import './Fotos.scss'

export default function Fotos() {
  return (
    <ContentPanel title="Galería De Fotos">
      <ImageGallery items={fotosGallery} />
    </ContentPanel>
  )
}
