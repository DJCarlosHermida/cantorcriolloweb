import { useCallback, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getImageUrl } from '../../config/media'
import { navLinks } from '../../data/navigation'
import './Navbar.scss'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, closeMenu])

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link className="navbar__brand" to="/" onClick={closeMenu}>
          <img
            src={getImageUrl('img/logo_horizontal.png')}
            alt="Cantor Criollo"
            className="navbar__logo"
          />
        </Link>

        <button
          type="button"
          className={`navbar__toggle${open ? ' navbar__toggle--open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        {open && (
          <button
            type="button"
            className="navbar__backdrop"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          />
        )}

        <nav className={`navbar__nav${open ? ' navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
