// Social share image (1200×630), rendered once at build time.
import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import satori from "satori";
import sharp from "sharp";

const font = (pkg: string, file: string) => readFile(resolve("node_modules", pkg, "files", file));

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, children },
});

export const GET: APIRoute = async () => {
  const [serif, serifItalic, sans, sansMedium] = await Promise.all([
    font("@fontsource/instrument-serif", "instrument-serif-latin-400-normal.woff"),
    font("@fontsource/instrument-serif", "instrument-serif-latin-400-italic.woff"),
    font("@fontsource/inter", "inter-latin-400-normal.woff"),
    font("@fontsource/inter", "inter-latin-500-normal.woff"),
  ]);

  const tree = h(
    "div",
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "96px 88px 72px",
      background: "#F7F4EE",
      color: "#1D1D1B",
      fontFamily: "Inter",
    },
    [
      h("div", { display: "flex", flexDirection: "column" }, [
        h("div", { display: "flex", fontFamily: "Serif", fontSize: 150, lineHeight: 1, letterSpacing: -2 }, [
          h("span", { fontStyle: "italic", marginRight: 34 }, "Aashi"),
          h("span", {}, "Shah"),
        ]),
        h("div", { fontSize: 40, marginTop: 36 }, "Building products where digital and physical marry."),
        h("div", { fontSize: 30, marginTop: 10, color: "#62615A" }, "Systems Engineering & Design @ UIUC"),
      ]),
      h("div", { position: "absolute", left: 88, bottom: 72, display: "flex", alignItems: "center", fontSize: 22, letterSpacing: 2, color: "#62615A" }, [
        h("div", { width: 18, height: 18, borderRadius: 9, backgroundImage: "linear-gradient(135deg, #F2A93B, #F26B3A)", marginRight: 16 }),
        h("span", { fontWeight: 500 }, "URBANA, IL"),
      ]),
    ],
  );

  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Serif", data: serif, weight: 400, style: "normal" },
      { name: "Serif", data: serifItalic, weight: 400, style: "italic" },
      { name: "Inter", data: sans, weight: 400, style: "normal" },
      { name: "Inter", data: sansMedium, weight: 500, style: "normal" },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
