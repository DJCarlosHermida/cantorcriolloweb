import ContentPanel from '../components/ui/ContentPanel'
import AudioPlayer from '../components/ui/AudioPlayer'
import VideoEmbed from '../components/ui/VideoEmbed'
import { folcloreAudios, folcloreVideos } from '../data/folclore'
import './Folclore.scss'

export default function Folclore() {
  return (
    <ContentPanel title="Folclore">
      <div className="folclore">
        <section className="folclore__section">
          {folcloreAudios.map((item) => (
            <AudioPlayer
              key={item.id}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </section>

        <section className="folclore__section">
          <h2 className="folclore__section-title">Videos</h2>
          {folcloreVideos.map((item) => (
            <VideoEmbed
              key={item.id}
              title={item.title}
              description={item.description}
              youtubeId={item.youtubeId}
            />
          ))}
        </section>
      </div>
    </ContentPanel>
  )
}
