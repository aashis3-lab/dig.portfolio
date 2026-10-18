import { defineConfig } from "astro/config";

export default defineConfig({
  // TODO: set to your real domain once connected in Vercel (used for the social share image URL)
  site: "https://example.com",
  vite: {
    // The 3D viewer bundle (~300 KB gzipped) is large by design and only loads near the CAD section.
    build: { chunkSizeWarningLimit: 1200 },
  },
});
