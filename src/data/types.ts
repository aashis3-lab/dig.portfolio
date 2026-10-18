// Shared shapes for every data file. Leave a string as "" (or a URL as null)
// and the page shows a visible [TODO] in its place.

export type Tag = "Hardware" | "Software" | "Research" | "Design" | "Data Analytics";

/** Order of the filter chips. A chip only appears if at least one build uses it. */
export const TAGS: Tag[] = ["Hardware", "Software", "Research", "Design", "Data Analytics"];

export interface Experience {
  org: string;
  /** Logo file name (no extension) in public/logos/, e.g. "autodesk" → public/logos/autodesk.jpg.
   *  If no file exists, a monogram with the org's first letter is shown. */
  slug: string;
  role: string;
  /** e.g. "Aug 2026–Present". Use "" if unknown. */
  dates: string;
  /** One sentence about the outcome. */
  line: string;
  /** Organization website. null → shows [TODO: link]. */
  url: string | null;
}

export interface CadRender {
  name: string;
  /** Optional; omit to show only the name. */
  year?: string;
  /** .glb filename inside public/cad/ → interactive 3D viewer. */
  model?: string;
  /** Still image filename inside public/cad/ (used when there's no model). */
  image?: string;
  alt: string;
  /** Fusion share link (optional). */
  url: string | null;
}

export interface Build {
  title: string;
  /** "Mon YYYY" (e.g. "Oct 2025") or a range ("Aug 2023–May 2025"). Use "" if unknown. */
  date: string;
  line: string;
  tags: Tag[];
  /** Optional cover image filename inside public/builds/ (square, cropped to fill). Omit for a placeholder. */
  image?: string;
  /** Short alt text for the cover image. */
  alt?: string;
  /** Product site, GitHub, paper, demo video or Fusion link. null → tile isn't clickable. */
  url: string | null;
}

export interface Photo {
  /** Large filename inside public/gallery/; a matching "<name>-sm.jpg" thumbnail must sit beside it. */
  image: string;
  alt: string;
  /** Short caption (optional). */
  caption?: string;
  /** Tile shape in the assorted grid; omit for a regular square. */
  size?: "big" | "wide" | "tall";
}

export interface Link {
  id: "email" | "linkedin" | "github" | "resume" | "book";
  label: string;
  icon: "mail" | "linkedin" | "github" | "resume" | "calendar";
  /** null → shows [TODO: URL]. */
  url: string | null;
}
