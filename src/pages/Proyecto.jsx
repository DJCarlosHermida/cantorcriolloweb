import ContentPanel from '../components/ui/ContentPanel'
import PdfLink from '../components/ui/PdfLink'
import { proyectoPdfUrl } from '../data/proyecto'

export default function Proyecto() {
  return (
    <ContentPanel title="El Proyecto">
      <div className="proyecto">
        <p>
          <strong><em>Cantor Criollo</em></strong> es un sitio web que forma parte de una serie de
          iniciativas llevadas adelante con el objetivo de difundir la obra de{' '}
          <strong>Marcos Velásquez</strong>.
        </p>
        <p>
          En el año 2019 se editó con el apoyo del Fondo Nacional de Música <strong>(FONAM)</strong>{' '}
          el libro <em>"Marcos Velásquez, Cantor Criollo"</em> Ed. Perro andaluz. En este texto se
          puede acceder a un estudio detallado de la vida y obra de Velásquez, así como una
          descripción de sus discos y el recuerdo de parte de colegas que lo conocieron.
        </p>
        <p>
          En el año 2021 se edita un segundo libro que lleva como título{' '}
          <em>"Marcos Velásquez, panorama del folclore musical uruguayo"</em>, Ed. del autor, también
          con el apoyo del FONAM. En este caso se trascriben y ordenan diversos textos relacionados
          con el estudio del folclore uruguayo así como todos los textos de sus canciones editadas.
        </p>
        <p>
          <strong><em>Cantor Criollo</em></strong> tiene como intención divulgar materiales de
          diferentes formatos que forman parte del archivo Marcos Velásquez. Por citar algunos
          ejemplos: <em>fotografías, afiches, grabaciones, textos, conciertos y letras de canciones</em>.
        </p>
        <p>
          Es importante destacar que este emprendimiento contó con el apoyo económico del Fondo
          “Ventanilla abierta Lauro Ayestarán” del Instituto Nacional de Música, dependiente de la
          Dirección Nacional de Cultura, Ministerio de Educación y Cultura.
        </p>
        <p>
          Dentro de los objetivos de este proyecto se encuentra actualizar periódicamente el sitio,
          poniendo a disposición de investigadores, comunicadores y público en general diversos
          materiales que posibiliten nuevos trabajos y difundan la obra de{' '}
          <strong>Marcos Velásquez</strong>. También en el futuro se pretende enriquecer la página
          con trabajos sobre otros músicos nacionales que al igual que Velásquez han hecho un gran
          aporte a nuestra música.
        </p>

        <PdfLink href={proyectoPdfUrl} />
      </div>
    </ContentPanel>
  )
}
