# Aashi Shah — personal site

Single-page Astro site. All content lives in `src/data/`; you shouldn't need to touch components to add things.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Deploy: import the repo in Vercel. It detects Astro automatically, no config needed. After connecting your domain, set `site` in `astro.config.mjs` to it (the share image URL uses it).

## Add content

Anything left as `""` or `null` shows a visible `[TODO]` on the page, so gaps are easy to spot. One exception: a build with `url: null` simply isn't clickable (no tag).

**An experience** — add an object to `src/data/experience.ts` (newest first):

```ts
{ org: "Company", slug: "company", role: "Role", dates: "Jan 2027–Present", line: "One sentence on the outcome.", url: "https://company.com" },
```

Logo: drop `public/logos/company.svg` (or `.png`/`.jpg`/`.webp`), named after the `slug`. Square images look best. Without one, a monogram with the org's first letter is shown.

**A CAD model (interactive 3D)** — export a `.glb`, compress it into `public/cad/`, then add an entry to `src/data/cad.ts`:

```bash
npx @gltf-transform/cli optimize "cad files/gearbox.glb" public/cad/gearbox.glb --compress draco --texture-compress webp --simplify false
```

```ts
{ name: "Gearbox housing", year: "2026", model: "gearbox.glb", alt: "Interactive 3D model of a gearbox housing", url: null },
```

Visitors drag to rotate. The viewer (Google's model-viewer) only downloads once the CAD section is near the screen. Compression matters: the racecar went from 19 MB to 1.2 MB. A still image works too: use `image: "gearbox.png"` instead of `model`. Everything is shown in grayscale.

**A build** — optionally put a cover image in `public/builds/`, then add to `src/data/builds.ts`:

```ts
{ title: "Name", date: "Oct 2025", line: "One sentence.", tags: ["Hardware", "Software"], image: "name.jpg", alt: "What the photo shows", url: "https://github.com/..." },
```

Covers are shown square and cropped to fill. Without `image`, the tile shows the title's first letter. Tags: `Hardware`, `Software`, `Research`, `Design`, `Data Analytics` (defined in `src/data/types.ts`). A filter chip only appears once some build uses that tag.

**A photo** — each photo needs a large file and a `-sm` thumbnail in `public/gallery/`. Drop the originals in an `images/` folder and resize them (≤1800px and ≤720px), e.g. with sharp, then add to `src/data/photos.ts`:

```ts
{ image: "machining.jpg", alt: "Describe what's in the photo", caption: "Machine shop", size: "tall" },
```

`size` shapes the assorted grid: `"big"` (2×2), `"wide"` (2×1), `"tall"` (1×2), or leave it out for a square. Captions are optional. The Gallery stays hidden until there are at least 4 photos. Full-size originals live in `unused/originals/` (not deployed).

**Links** — LinkedIn, GitHub, Resume, Book a call live in `src/data/links.ts`. The resume is `public/resume.pdf`; replace that file to update it.

**Signature** — `public/signature.png` (black ink on transparent). It's used as a mask, so it always takes the text color: dark in light mode, light in dark mode. Hidden if the file is missing.

## Where things are

- `src/styles/global.css` — colors (CSS variables, light + dark), type, tile style
- `src/components/` — one file per section; `Icon.astro` holds the inline icons
- `src/pages/og.png.ts` — generates the social share image at build time
- `public/favicon.svg` — marigold circle
- `src/components/Stars.astro` — night-mode star field (fixed seed, dark mode only)
