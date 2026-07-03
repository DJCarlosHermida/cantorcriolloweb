import { useCallback, useEffect, useState } from 'react'
import { getImageUrl } from '../../config/media'
import './ImageGallery.scss'

export default function ImageGallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const activeItem = activeIndex === null ? null : items[activeIndex]
  const hasPrevious = activeIndex > 0
  const hasNext = activeIndex !== null && activeIndex < items.length - 1

  const closeLightbox = useCallback(() => setActiveIndex(null), [])

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index > 0 ? index - 1 : index))
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index !== null && index < items.length - 1 ? index + 1 : index,
    )
  }, [items.length])

  useEffect(() => {
    if (activeIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, closeLightbox, showNext, showPrevious])

  return (
    <>
      <div className="image-gallery">
        {items.map((item, index) => (
          <figure key={item.id} className="image-gallery__item">
            <button
              type="button"
              className="image-gallery__thumb"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver ${item.alt}`}
            >
              <img
                src={getImageUrl(item.src)}
                alt={item.alt}
                loading="lazy"
              />
            </button>
            {item.caption && (
              <figcaption
                className="image-gallery__caption"
                dangerouslySetInnerHTML={{ __html: item.caption }}
              />
            )}
          </figure>
        ))}
      </div>

      {activeItem && (
        <div
          className="image-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
        >
          <button
            type="button"
            className="image-lightbox__close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            ×
          </button>
          {hasPrevious && (
            <button
              type="button"
              className="image-lightbox__nav image-lightbox__nav--prev"
              onClick={(event) => {
                event.stopPropagation()
                showPrevious()
              }}
              aria-label="Foto anterior"
            >
              ‹
            </button>
          )}
          {hasNext && (
            <button
              type="button"
              className="image-lightbox__nav image-lightbox__nav--next"
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
              aria-label="Foto siguiente"
            >
              ›
            </button>
          )}
          <figure
            className="image-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={getImageUrl(activeItem.src)}
              alt={activeItem.alt}
            />
            {activeItem.caption && (
              <figcaption
                className="image-lightbox__caption"
                dangerouslySetInnerHTML={{ __html: activeItem.caption }}
              />
            )}
          </figure>
        </div>
      )}
    </>
  )
}
