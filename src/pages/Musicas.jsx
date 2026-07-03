import ContentPanel from '../components/ui/ContentPanel'
import VideoEmbed from '../components/ui/VideoEmbed'
import AudioPlayer from '../components/ui/AudioPlayer'
import { musicasVideos, musicasCanciones } from '../data/musicas'
import './Musicas.scss'

export default function Musicas() {
  return (
    <ContentPanel title="Músicas">
      <div className="musicas">
        <section className="musicas__section">
          <h2 className="musicas__section-title">Presentaciones en video</h2>
          {musicasVideos.map((item) => (
            <VideoEmbed
              key={item.id}
              title={item.title}
              description={item.description}
              youtubeId={item.youtubeId}
            />
          ))}
        </section>

        <section className="musicas__section">
          <h2 className="musicas__section-title">Canciones</h2>
          {musicasCanciones.map((item) => (
            <AudioPlayer
              key={item.id}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </section>
      </div>
    </ContentPanel>
  )
}
