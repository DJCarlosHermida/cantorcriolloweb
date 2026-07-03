import ContentPanel from '../components/ui/ContentPanel'
import ImageGallery from '../components/ui/ImageGallery'
import { afichesIntro, afichesColeccion, afichesPromocionales } from '../data/afiches'
import './Afiches.scss'

export default function Afiches() {
  return (
    <ContentPanel title="Afiches resguardados por Marcos Velásquez">
      <div className="afiches">
        <p className="afiches__intro">{afichesIntro}</p>

        <section className="afiches__section">
          <h2 className="afiches__section-title">Colección</h2>
          <ImageGallery items={afichesColeccion} />
        </section>

        <section className="afiches__section">
          <h2 className="afiches__section-title">Afiches promocionales</h2>
          <ImageGallery items={afichesPromocionales} />
        </section>
      </div>
    </ContentPanel>
  )
}
