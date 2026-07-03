import { getImageUrl, getMediaUrl } from '../../config/media'
import './PdfLink.scss'

export default function PdfLink({ href, label = 'Abrir en PDF' }) {
  const pdfUrl = href.startsWith('http') ? href : getMediaUrl(href)

  return (
    <a className="pdf-link" href={pdfUrl} target="_blank" rel="noreferrer">
      <img src={getImageUrl('img/icono_pdf.png')} alt="" />
      <span>{label}</span>
    </a>
  )
}
