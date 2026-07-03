import ContentPanel from '../components/ui/ContentPanel'
import VideoEmbed from '../components/ui/VideoEmbed'
import AudioPlayer from '../components/ui/AudioPlayer'
import { relatosVideos, relatosAudios } from '../data/relatos'
import './Relatos.scss'

export default function Relatos() {
  return (
    <ContentPanel title="Relatos">
      <div className="relatos">
        <section className="relatos__section">
          <h2 className="relatos__section-title">Videos</h2>
          {relatosVideos.map((item) => (
            <VideoEmbed
              key={item.id}
              title={item.title}
              description={item.description}
              youtubeId={item.youtubeId}
            />
          ))}
        </section>

        <section className="relatos__section">
          <h2 className="relatos__section-title">Audios</h2>
          {relatosAudios.map((item) => (
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
