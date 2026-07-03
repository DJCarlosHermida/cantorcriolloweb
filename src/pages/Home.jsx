import './Home.scss'

export default function Home() {
  return (
    <section className="home">
      <div className="home__hero">
        <div className="home__quote">
          <h1>Cantor Criollo</h1>
          <p>
            <em>
              "Mucha gente supone que hacer canciones populares y tradicionales
              implica estancarse o renegar de todo lo nuevo. El folclore es un
              fenómeno de carácter funcional y plástico; es decir que no existe
              porque sí, sino porque el pueblo lo mantiene por necesitarlo y
              además el mismo pueblo lo recuerda permanentemente."
            </em>
          </p>
          <strong>Marcos Velásquez</strong>
        </div>
      </div>
    </section>
  )
}
