import type { Build } from "./types";

// Every project, including research. Tags must be one of the values in types.ts.
// Dates as "Mon YYYY" or a range "Aug 2023–May 2025".
// Optional cover: drop the file in public/builds/ and set `image` plus `alt`
// (shown square, cropped to fill). A build with url: null isn't clickable.
export const builds: Build[] = [
  {
    title: "Dozed",
    date: "Dec 2025",
    line: "Smart sleep system. 2nd place, Mottier Innovation Challenge.",
    tags: ["Hardware", "Software"],
    image: "dozed.jpg",
    alt: "Dozed prototype: a white cube-shaped sleep light glowing warm",
    url: null,
  },
  {
    title: "PortaProfile",
    date: "Oct 2025",
    line: "NFC digital profile. 2nd place, Illinois Product Design Competition.",
    tags: ["Hardware", "Design"],
    url: "https://porta-profile.vercel.app/",
  },
  {
    title: "PupLog",
    date: "Aug 2026",
    line: "One-tap NFC pet-care tracker, built for my family's dog and now opening up to other families.",
    tags: ["Hardware", "Software"],
    image: "puplog.jpg",
    alt: "PupLog water and food NFC tags on the wall beside a dog's feeding station",
    url: "https://puplog-dashboard.vercel.app/",
  },
  {
    title: "TETHER",
    date: "Oct 2026",
    line: "Women's safety app with real-time location tracking and SMS alerts. 1st place, ProductSpace Hackathon.",
    tags: ["Software"],
    image: "tether.jpg",
    alt: "TETHER logo: a location pin ringed by an orbit on a dark background",
    url: "https://tether-gray.vercel.app/",
  },
  {
    title: "Modular Produce Preservation System",
    date: "2026", // TODO: month
    line: "ISE REU project under Prof. Molly Goldstein (in progress).",
    tags: ["Research", "Design"],
    url: null,
  },
  {
    title: "Lacey Assists",
    date: "May 2025",
    line: "Voice-activated Raspberry Pi assistant.",
    tags: ["Hardware", "Software"],
    image: "lacey.jpg",
    alt: "Lacey Assists logo: an arrow tied with a ribbon",
    url: "https://www.instagram.com/lacey.assists",
  },
  {
    title: "FIRST Robotics",
    date: "Aug 2023–May 2025",
    line: "Designed robot subsystems in Fusion for FIRST Robotics competitions.",
    tags: ["Hardware", "Design"],
    image: "first-robotics.jpg",
    alt: "FIRST logo",
    url: "https://www.radicubs.com/",
  },
  {
    title: "Off-Road Illini (Baja SAE)",
    date: "Nov 2025",
    line: "Validated suspension components with strain gauge testing on the suspension team.",
    tags: ["Hardware"],
    url: "https://offroadillini.mechse.illinois.edu/",
  },
  {
    title: "Nanoparticle research paper",
    date: "Apr 2024",
    line: "Published in Curieux Academic Journal.",
    tags: ["Research"],
    url: null, // TODO: link to the paper
  },
];
