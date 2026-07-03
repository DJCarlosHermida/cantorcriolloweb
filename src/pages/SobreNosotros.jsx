import ContentPanel from '../components/ui/ContentPanel'
import PdfLink from '../components/ui/PdfLink'
import { autorLibro, sobreNosotrosPdfUrl } from '../data/sobreNosotros'
import './SobreNosotros.scss'

export default function SobreNosotros() {
  return (
    <ContentPanel title="Sobre Nosotros">
      <div className="sobre-nosotros">
        <aside className="sobre-nosotros__aside">
          <img
            className="sobre-nosotros__photo"
            src="/img/solapa.jpg"
            alt="Rodrígo Camaño"
          />
          <p className="sobre-nosotros__author">
            Autora:{' '}
            <a
              href={autorLibro.instagram}
              target="_blank"
              rel="noreferrer"
              title="Instagram Victoria Rodríguez Porras"
            >
              <img src="/img/instagram.png" alt="Instagram" />
              <em>{autorLibro.name}</em>
            </a>
          </p>
        </aside>

        <div className="sobre-nosotros__content">
          <p>
            <strong>Rodrígo Camaño (Montevideo, 1989)</strong>
          </p>
          <p>
            Es profesor de música y director de coros. Egresado del Instituto de Profesores Artigas
            en la especialidad Educación Musical, ha ejercido en instituciones públicas y privadas.
          </p>
          <p>
            Estudió guitarra con varios docentes, entre ellos,{' '}
            <strong>
              <em>Daniel Martella, Fernando Olivera y Pablo Rey</em>
            </strong>
            .
          </p>
          <p>
            Cursó la carrera de Comunicación Social en el Consejo de Educación Técnico Profesional
            (ex UTU). Actualmente continúa sus estudios en la Escuela Universitaria de Música, en la
            Licenciatura en Musicología. Participó como expositor en diferentes encuentros y
            seminarios.
          </p>
          <p>
            En el año 2019 expone en el 14º Encuentro de la canción infantil Latinoamericana y
            Caribeña realizado en Guatemala.
          </p>
          <p>
            Presenta la ponencia <strong>“Marcos Velásquez, música, musicología y militancia”</strong>{' '}
            en el Congreso Argentino de Musicología 2020/2021.
          </p>
          <p>
            En el año 2019 se editó con el apoyo del <em>Fondo Nacional de Música</em>{' '}
            <strong>(FONAM)</strong> el libro <em>"Marcos Velásquez, Cantor criollo"</em>,{' '}
            <em>Ed. Perro Andaluz</em>. Recientemente editó el libro{' '}
            <em>“Marcos Velásquez, Panorama del folclore musical uruguayo”</em> (edición de autor),
            2021, también con el apoyo del <strong>FONAM</strong>.
          </p>
          <p>
            Actualmente se encuentra trabajando en la digitalización del archivo{' '}
            <em>Marcos Velásquez</em>.
          </p>

          <PdfLink href={sobreNosotrosPdfUrl} />
        </div>
      </div>
    </ContentPanel>
  )
}
