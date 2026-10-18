import { existsSync } from "node:fs";
import { resolve } from "node:path";

/** Returns the public URL of the first matching file in /public, or null. */
export function publicFile(base: string, exts = ["svg", "png", "jpg", "jpeg", "webp"]): string | null {
  for (const ext of exts) {
    if (existsSync(resolve("public", `${base}.${ext}`))) return `/${base}.${ext}`;
  }
  return null;
}

/** URL for a file inside a /public subfolder; fails the build loudly if it's missing. */
export function publicImage(folder: string, file: string): string {
  if (!existsSync(resolve("public", folder, file))) {
    throw new Error(`Image not found: public/${folder}/${file}`);
  }
  return `/${folder}/${file}`;
}
