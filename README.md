# Multimedia Portfolio

Personal portfolio for Multimedia Engineers. Designed to showcase projects with video, images, 3D models and interactive content. **English & Spanish** bilingual support.

## Sections

- **Home** — Presentation with interactive 3D scene
- **About** — Personal info and photo
- **Projects** — Project grid with detail modal
- **Skills** — Tools and technologies
- **Contact** — Email and social networks

---

## Step-by-step guide to update your content

All your content lives in `src/data/`. Edit the JSON files below to populate your portfolio.

### 1. `src/data/profile.json` — Your personal info

```json
{
  "name": "Your Name",
  "title": { "en": "Multimedia Engineer", "es": "Ingeniero Multimedia" },
  "email": "your@email.com",
  "location": { "en": "City, Country", "es": "Ciudad, País" },
  "shortBio": { "en": "Short tagline...", "es": "Frase corta..." },
  "bio": { "en": "Full bio in English...", "es": "Biografía completa en español..." },
  "avatar": "https://res.cloudinary.com/.../avatar.webp",
  "heroVideo": "",
  "cv": "/cv.pdf"
}
```

| Field | What to put |
|---|---|
| `name` | Your full name (plain text) |
| `title` | Short professional title — translated |
| `email` | Your email |
| `location` | Where you're based — translated |
| `shortBio` | One-liner shown in the hero — translated |
| `bio` | Longer bio in the About section — translated |
| `avatar` | **URL** to your photo (use Cloudinary or any image host) |
| `heroVideo` | Optional YouTube link for a hero background video |
| `cv` | Path to your CV file inside `public/` (e.g. `/cv.pdf`) or a URL |

> Requirements for the avatar: **400×400px minimum, WebP or JPEG, under 100 KB**.

### 2. `src/data/projects.json` — Your work

```json
[
  {
    "id": "mi-proyecto",
    "title": { "en": "Project Name", "es": "Nombre del Proyecto" },
    "description": { "en": "English description...", "es": "Descripción en español..." },
    "thumbnail": "https://.../thumb.webp",
    "images": [],
    "videoUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
    "modelUrl": "",
    "tags": ["Blender", "After Effects"],
    "year": 2025
  }
]
```

| Field | Required | What to put |
|---|---|---|
| `id` | Yes | Unique identifier (lowercase, no spaces) |
| `title` | Yes | Project name — translated |
| `description` | Yes | Project description — translated |
| `thumbnail` | **Strongly recommended** | **1920×1080px cover image URL, WebP, under 200 KB**. If empty, a placeholder will show. |
| `images[]` | No | Extra image URLs (not currently displayed, reserved for future gallery) |
| `videoUrl` | No | YouTube or Vimeo link (plays in the modal) |
| `modelUrl` | No | 3D model URL (not yet integrated) |
| `tags[]` | Yes | Technologies used |
| `year` | Yes | Year of creation |

> **Important:** Add a thumbnail URL to every project. Without it, visitors will only see a placeholder icon.
>
> For videos: upload to YouTube as **unlisted**, then paste the link. YouTube is free and handles streaming.

### 3. `src/data/skills.json` — Your tools

```json
[
  { "name": "Blender", "category": "3D" },
  { "name": "After Effects", "category": "Motion" }
]
```

Available categories (each gets a different color):
- `Motion`, `Video`, `Design`, `3D`, `Programming`

You can add, remove, or rename skills freely — no code changes needed.

### 4. `src/data/social.json` — Your social links

```json
{
  "github": "https://github.com/username",
  "linkedin": "https://linkedin.com/in/username",
  "youtube": "https://youtube.com/@channel",
  "behance": "",
  "instagram": "https://instagram.com/username"
}
```

Leave a field empty (`""`) and the icon won't appear. Remove the line entirely if you never plan to use it.

### 5. Translations (UI text)

Navigation, section titles, and button labels are managed separately in:

- `src/i18n/locales/en.json` — English UI text
- `src/i18n/locales/es.json` — Spanish UI text

These rarely change but you can edit them if needed.

### 6. Media hosting (free)

| Type | Where to host | How to integrate |
|---|---|---|
| Images (avatar, thumbnails) | [Cloudinary](https://cloudinary.com) (free tier) | Get a URL and paste it into the JSON |
| Videos | [YouTube](https://youtube.com) (upload as unlisted) | Paste the URL in `videoUrl` |
| CV / PDF | Inside `public/` folder | Save as `public/cv.pdf` and reference as `/cv.pdf` |
| 3D Models | [Sketchfab](https://sketchfab.com) (free) | Paste URL in `modelUrl` |

> **Pro tip for images:** Cloudinary gives you free hosting, automatic compression, and WebP conversion. Use it for all images.

---

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
