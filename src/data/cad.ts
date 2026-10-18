import type { CadRender } from "./types";

// Tiles appear left to right in this order.
// 3D model: put a .glb in public/cad/ and set `model` — it renders as an
// interactive viewer (drag to rotate). Big exports should be compressed first;
// see the README. Still image instead: put it in public/cad/ and set `image`.
// `year` is optional; leave it out to show just the name.
export const cad: CadRender[] = [
  {
    name: "F1 Sports Car Model",
    model: "f1-sports-car.glb",
    alt: "Interactive 3D model of an F1 sports car",
    url: null,
  },
  {
    name: "Free-Form Iron",
    model: "free-form-iron.glb",
    alt: "Interactive 3D model of a free-form clothes iron",
    url: null,
  },
  {
    name: "Mechanical Pipe Assembly",
    model: "mechanical-pipe-assembly.glb",
    alt: "Interactive 3D model of a mechanical pipe assembly",
    url: null,
  },
];
