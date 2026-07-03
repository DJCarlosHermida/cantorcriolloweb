import './PdfLink.scss'

export default function PdfLink({ href, label = 'Abrir en PDF' }) {
  return (
    <a className="pdf-link" href={href} target="_blank" rel="noreferrer">
      <img src="/img/icono_pdf.png" alt="" />
      <span>{label}</span>
    </a>
  )
}
