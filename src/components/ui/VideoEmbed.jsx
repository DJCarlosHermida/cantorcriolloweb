import './VideoEmbed.scss'

export default function VideoEmbed({ title, description, youtubeId }) {
  return (
    <article className="video-embed">
      <h3 className="video-embed__title">{title}</h3>
      {description && <p className="video-embed__description">{description}</p>}
      <div className="video-embed__frame">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </article>
  )
}
