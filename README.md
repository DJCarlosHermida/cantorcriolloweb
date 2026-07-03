# Cantor Criollo Web

SPA en React + Vite para migrar el sitio `cantorCriollo` a componentes.

## Requisitos

- Node.js 18+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estructura

```text
src/
  components/
    layout/     Navbar, Footer, PageLayout
    ui/         AudioPlayer y componentes reutilizables
  pages/        Una página por sección del sitio
  data/         Navegación, redes sociales, contenidos
  config/       URLs de medios externos (CDN)
public/
  img/          Imágenes locales (logo, íconos, fondos)
```

## Medios externos

Copiá las imágenes de `cantorCriollo/img` a `public/img`.

Los audios de Relatos están en `public/audio/micros` (copiados desde `cantorCriollo/audio/micros`).

Las canciones de Músicas están en `public/audio/` (archivos `01`, `02`, `03`).

Para audios e imágenes en CDN, configurá:

```env
VITE_MEDIA_URL=https://media.tudominio.com
```

## Migración

1. Copiar contenido de cada `.html` de `cantorCriollo` a su página en `src/pages/`.
2. Mover listas largas a `src/data/`.
3. Subir audios/imágenes pesados al CDN y usar `getAudioUrl()` / `getImageUrl()`.
