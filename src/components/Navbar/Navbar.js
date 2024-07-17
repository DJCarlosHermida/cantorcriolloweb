import './Navbar.scss'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h2 className="header__logo">LOGO</h2>
                <nav className="header__nav">
                    <a className="header__link" href="#">EL PROYECTO</a>
                    <a className="header__link" href="#">SOBRE NOSOTROS</a>
                    <a className="header__link" href="#">FOTOS</a>
                    <a className="header__link" href="#">AFICHES</a>
                    <a className="header__link" href="#">RELATOS</a>
                    <a className="header__link" href="#">FOLCLORE</a>
                    <a className="header__link" href="#">MÚSICA</a>
                    <a className="header__link" href="#">LIBROS</a>
                </nav>

            </div>
        </header>
    )
}