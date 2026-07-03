# Cantor Criollo Web

Sitio web oficial del proyecto **Cantor Criollo**, dedicado a difundir la obra de **Marcos Velásquez**. Esta aplicación reemplaza el sitio estático original (`cantorCriollo`) por una **SPA moderna** construida con React y Vite.

---

## Descripción

Cantor Criollo Web centraliza en un solo proyecto el contenido editorial, audiovisual y documental del legado de Marcos Velásquez: biografía, relatos, música, folclore, fotografías, afiches y publicaciones. El sitio está pensado para ser **fácil de mantener** (contenidos en archivos de datos) y **listo para desplegar** en hosting estático.

---

## Stack tecnológico

| Área | Tecnología |
|---|---|
| Framework | React 18 |
| Build | Vite 6 |
| Routing | React Router 6 |
| Estilos | Sass (SCSS) |
| Deploy | Vercel / Netlify (SPA) |

---

## Secciones

| Ruta | Contenido |
|---|---|
| `/` | Inicio — cita de Marcos Velásquez |
| `/proyecto` | Presentación del proyecto + PDF |
| `/sobre-nosotros` | Biografía de Rodrígo Camaño + CV |
| `/fotos` | Galería de fotografías con lightbox |
| `/afiches` | Colección de afiches históricos |
| `/relatos` | Videos de YouTube + audios |
| `/folclore` | Material folclórico y audios |
| `/musicas` | Presentaciones en video + canciones |
| `/libros` | Catálogo de publicaciones |

---

## Inicio rápido

### Requisitos

- Node.js 18 o superior
- npm

### Instalación

```bash
git clone https://github.com/DJCarlosHermida/cantorcriolloweb.git
cd cantorcriolloweb
npm install
```

### Desarrollo

```bash
npm run dev
```

La app queda disponible en `http://localhost:5173`.

### Build de producción

```bash
npm run build
npm run preview
```

El resultado se genera en la carpeta `dist/`.

---

## Estructura del proyecto

```text
cantorcriolloweb/
├── public/
│   ├── img/              Imágenes, logos, afiches y fotos
│   ├── audio/            Audios locales (relatos, músicas, folclore)
│   ├── el-proyecto.pdf
│   ├── cv-rodrigo-camano.pdf
│   └── _redirects        Reglas SPA para Netlify
├── src/
│   ├── components/
│   │   ├── layout/       Navbar, Footer, PageLayout
│   │   └── ui/           AudioPlayer, ImageGallery, VideoEmbed, etc.
│   ├── pages/            Una página por sección
│   ├── data/             Contenidos en JS (fácil de editar)
│   ├── config/           Configuración de medios (CDN)
│   ├── styles/           Variables globales y estilos base
│   └── utils/            Utilidades (reproducción de audio)
├── index.html
├── vite.config.js
└── vercel.json
```

---

## Contenido y medios

Los textos, listas de videos, audios, fotos y libros viven en `src/data/`. Para agregar o modificar contenido, editá el archivo correspondiente sin tocar la lógica de los componentes.

### Medios locales

Por defecto, imágenes y audios se sirven desde `public/`. Las rutas se resuelven con `getImageUrl()` y `getAudioUrl()` en `src/config/media.js`, que codifican correctamente espacios y caracteres especiales en los nombres de archivo.

### Medios en CDN (opcional)

Para reducir el peso del repositorio y mejorar tiempos de carga, podés subir audios e imágenes a un CDN y definir la URL base en un archivo `.env`:

```env
VITE_MEDIA_URL=https://media.tudominio.com
```

Usá `.env.example` como referencia. El archivo `.env` no se versiona.

---

## Características destacadas

- **Navegación responsive** con menú lateral en móvil
- **Reproducción de audio exclusiva** — solo un audio activo a la vez
- **Galería con lightbox** — navegación entre imágenes con teclado y flechas
- **Reproductor de video embebido** para contenido de YouTube
- **Catálogo de libros** en grilla adaptable
- **Iconos sociales SVG** con estados hover por red
- **Paleta de marca** — verde `#99cc33`, naranja `#ffa420`

---

## Despliegue

### GitHub Pages

El sitio se publica automáticamente en cada push a `main` mediante GitHub Actions.

**URL:** https://djcarloshermida.github.io/cantorcriolloweb/

En el repositorio, activá **Settings → Pages → Build and deployment → Source: GitHub Actions** (si no se activó automáticamente).

El proyecto usa `base: '/cantorcriolloweb/'` en Vite para servir correctamente desde la subruta del repositorio.

### Vercel

El proyecto incluye `vercel.json` con rewrites para SPA. Conectá el repositorio en Vercel y usá:

- **Build command:** `npm run build`
- **Output directory:** `dist`

### Netlify

El archivo `public/_redirects` redirige todas las rutas a `index.html` para que React Router funcione correctamente.

---

## Créditos

- **Proyecto:** Cantor Criollo — difusión de la obra de Marcos Velásquez
- **Diseño y desarrollo web:** [Carlos Hermida](mailto:djcarloshermida@outlook.com)
- **Contacto editorial:** [Rodrígo Camaño](mailto:camaronmusica@gmail.com)
- **Apoyo institucional:** Ministerio de Educación y Cultura (MEC), Uruguay

---

## Licencia

Proyecto privado. Todos los derechos del contenido editorial, fotográfico, sonoro y gráfico pertenecen a sus respectivos autores y titulares.
