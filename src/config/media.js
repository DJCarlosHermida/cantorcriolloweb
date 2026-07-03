const mediaBaseUrl = import.meta.env.VITE_MEDIA_URL?.replace(/\/$/, '') ?? ''
const appBaseUrl = import.meta.env.BASE_URL

const encodePath = (path) =>
  path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')

export const getMediaUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http')) return path

  const normalized = path.replace(/^\//, '')

  if (mediaBaseUrl) {
    return `${mediaBaseUrl}/${encodePath(normalized)}`
  }

  return `${appBaseUrl}${encodePath(normalized)}`
}

export const getImageUrl = (path) => getMediaUrl(path)
export const getAudioUrl = (path) => getMediaUrl(path)
