import { getImageUrl } from '../../config/media'
import { socialLinks, contactEmail, designerEmail } from '../../data/social'
import SocialIcon from '../ui/SocialIcon'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__block">
            <p className="footer__label">Redes sociales</p>
            <div className="footer__social">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  title={item.name}
                  aria-label={item.name}
                  className={`footer__social-link footer__social-link--${item.id}`}
                >
                  <SocialIcon name={item.id} />
                </a>
              ))}
            </div>
            <a
              className="footer__contact"
              href={`mailto:${contactEmail}`}
              title="Enviar correo a Rodrigo Camaño"
            >
              Rodrigo Camaño
              <span className="footer__contact-sep">|</span>
              Info-Contacto
            </a>
          </div>

          <div className="footer__block footer__block--support">
            <p className="footer__label">Con el apoyo de</p>
            <img
              className="footer__mec"
              src={getImageUrl('img/logo_MEC_414x60px.png')}
              alt="Ministerio de Educación y Cultura"
           width={300} height={45} />
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Cantor Criollo — Diseñado por{' '}
            <a href={`mailto:${designerEmail}`}>Carlos Hermida</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
