import { useEffect, useRef } from 'react'
import { getAudioUrl } from '../../config/media'
import { pauseOtherAudioPlayers, registerAudioPlayer } from '../../utils/audioPlayback'
import './AudioPlayer.scss'

export default function AudioPlayer({ title, description, src }) {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    const handlePlay = () => pauseOtherAudioPlayers(audio)
    const unregister = registerAudioPlayer(audio)

    audio.addEventListener('play', handlePlay)

    return () => {
      audio.removeEventListener('play', handlePlay)
      unregister()
    }
  }, [])

  return (
    <article className="audio-player">
      <h3 className="audio-player__title">{title}</h3>
      {description && <p className="audio-player__description">{description}</p>}
      <audio ref={audioRef} controls preload="none" src={getAudioUrl(src)} />
    </article>
  )
}
