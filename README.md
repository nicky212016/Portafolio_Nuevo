# Multimedia Portfolio

Personal portfolio for Multimedia Engineers. Designed to showcase projects with video, images, 3D models and interactive content. **English & Spanish** bilingual support.

## Sections

- **Home** — Presentation with interactive 3D scene
- **About** — Personal info and photo
- **Projects** — Project grid with detail modal (video/images/3D)
- **Skills** — Tools and technologies
- **Contact** — Email and social networks

## How to update your content

Edit the files in `src/data/`.

### `src/data/profile.json`

Text fields that need translation use `{ en, es }` format:

```json
{
  "name": "Your Name",
  "title": { "en": "Multimedia Engineer", "es": "Ingeniero Multimedia" },
  "email": "email@example.com",
  "location": { "en": "City, Country", "es": "Ciudad, País" },
  "bio": { "en": "English bio...", "es": "Biografía en español..." },
  "avatar": "https://.../avatar.jpg",
  "heroVideo": "https://www.youtube.com/embed/VIDEO_ID"
}
```

### `src/data/projects.json`

Project list. `title` and `description` use `{ en, es }` format:

```json
[
  {
    "id": "project-1",
    "title": { "en": "Project Name", "es": "Nombre del Proyecto" },
    "description": { "en": "English description", "es": "Descripción en español" },
    "thumbnail": "https://.../thumb.jpg",
    "images": [],
    "videoUrl": "https://www.youtube.com/watch?v=...",
    "modelUrl": "",
    "tags": ["Blender", "After Effects"],
    "year": 2025
  }
]
```

| Field | Description | Required |
|---|---|---|
| `id` | Unique identifier | Yes |
| `title` | Name with `{ en, es }` translation | Yes |
| `description` | Description with `{ en, es }` translation | Yes |
| `thumbnail` | Cover image URL | Yes |
| `images[]` | Additional image URLs | No |
| `videoUrl` | YouTube URL (plays in modal) | No |
| `modelUrl` | Sketchfab URL (3D embed) | No |
| `tags[]` | Technologies used | Yes |
| `year` | Year of creation | Yes |

### `src/data/skills.json`

```json
[
  { "name": "Blender", "category": "3D" }
]
```

- `name`: Tool name (not translated)
- `category`: Group (3D, Motion, Video, Design, Interactive)

### `src/data/social.json`

```json
{
  "github": "https://github.com/username",
  "linkedin": "https://linkedin.com/in/username",
  "youtube": "https://youtube.com/@channel",
  "behance": "https://behance.net/username",
  "instagram": "https://instagram.com/username"
}
```

## Translations

To add or edit translations:

1. **UI text** → edit `src/i18n/locales/en.json` or `es.json`
2. **Content text** → edit the data JSONs using `{ en: "...", es: "..." }` format
3. **Add a new language** → create a new file in `src/i18n/locales/`, register it in `src/i18n/index.ts`, and add translations to your data JSONs

## Media hosting (free)

| Type | Where to host | How to integrate |
|---|---|---|
| Videos | YouTube | Paste URL in `videoUrl` |
| Images | [Cloudinary](https://cloudinary.com) (free) | Paste URL in `thumbnail` or `images[]` |
| 3D Models | [Sketchfab](https://sketchfab.com) (free) | Paste URL in `modelUrl` |
| Audio | YouTube or SoundCloud | Use `videoUrl` |

## Commands

```bash
pnpm dev           # Start dev server
pnpm build         # Production build
pnpm preview       # Preview production build
pnpm lint          # Check code
pnpm format        # Auto-format code
```

## Tech Stack

React 18 · TypeScript · Vite 6 · TailwindCSS · Framer Motion · React Three Fiber · React Player · i18next · Lucide Icons

## Deployment

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com) (free plan)
3. Auto-deploys on every push to `main`
