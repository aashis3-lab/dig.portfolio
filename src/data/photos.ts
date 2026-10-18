import type { Photo } from "./types";

// Gallery photos. Each needs two files in public/gallery/: <name>.jpg (large, ≤1800px)
// and <name>-sm.jpg (grid thumbnail, ≤720px) — see the README for the one-line resize.
// The section stays hidden until there are at least 4 photos. Captions are optional.
export const photos: Photo[] = [
  {
    image: "robotics-in-the-shop.jpg",
    alt: "Robotics teammates in safety glasses assembling a competition robot in a gym pit area, one swinging a mallet",
    caption: "Robotics, in the shop",
  },
  {
    image: "breadboard-circuit.jpg",
    alt: "Hand holding a wheeled robot chassis with a breadboard circuit of jumper wires, a chip and a potentiometer",
    caption: "Breadboard circuit",
  },
  {
    image: "performance.jpg",
    alt: "Performer in a pale blue gown leaning forward and pointing on a dark stage",
    caption: "Performance",
  },
  {
    image: "kayaking.jpg",
    alt: "Smiling in a yellow life jacket and sunglasses in a red kayak on a tree-lined lake",
    caption: "Kayaking",
  },
  {
    image: "robotics-outreach.jpg",
    alt: "Showing a robot named Poncho to a young visitor at a robotics outreach event",
    caption: "Robotics, outreach",
  },
  {
    image: "ceramics.jpg",
    alt: "Hand-sculpted clay frog on a blue work board beside a frog on a lily pad",
    caption: "Ceramics",
  },
  {
    image: "performing.jpg",
    alt: "Performer in a blue polka-dot dress standing center stage under a spotlight",
    caption: "Performing",
  },
  {
    image: "volunteering.jpg",
    alt: "Volunteers at a table writing name tags and checking in guests in front of a living plant wall",
    caption: "Volunteering",
  },
];
