import { socialLinks, contactEmail, designerEmail } from '../../data/social'
import SocialIcon from '../ui/SocialIcon'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">Redes Sociales</p>

        <div className="footer__social">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              title={item.name}
              className={`footer__social-link footer__social-link--${item.id}`}
            >
              <SocialIcon name={item.id} />
            </a>
          ))}
        </div>

        <a className="footer__contact" href={`mailto:${contactEmail}`} title="Enviar correo a Rodrígo Camaño">
          Rodrígo Camaño | Info-Contacto
        </a>

        <p className="footer__support">
          Con el apoyo de{' '}
          <img
            src="/img/logo_MEC_414x60px.png"
            alt="Ministerio de Educación y Cultura"
          />
        </p>

        <p className="footer__copyright">
          © Copyright {new Date().getFullYear()} — Diseñado por{' '}
          <a href={`mailto:${designerEmail}`}>Carlos Hermida</a>
        </p>
      </div>
    </footer>
  )
}
