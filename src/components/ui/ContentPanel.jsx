import './ContentPanel.scss'

export default function ContentPanel({ title, children }) {
  return (
    <section className="content-panel">
      <div className="content-panel__box">
        {title && <h1 className="content-panel__title">{title}</h1>}
        {children}
      </div>
    </section>
  )
}
