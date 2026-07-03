import ContentPanel from '../components/ui/ContentPanel'
import { getImageUrl } from '../config/media'
import { libros } from '../data/libros'
import './Libros.scss'

export default function Libros() {
  return (
    <ContentPanel title="Libros">
      <div className="libros">
        {libros.map((libro) => (
          <article key={libro.id} className="libros__card">
            <div className="libros__image-wrap">
              <img
                className="libros__cover"
                src={getImageUrl(libro.cover)}
                alt={`Tapa ${libro.title}`}
                loading="lazy"
              />
            </div>
            <div className="libros__info">
              <h2 className="libros__title">{libro.title}</h2>
              <p className="libros__edition">{libro.edition}</p>
            </div>
          </article>
        ))}
      </div>
    </ContentPanel>
  )
}
