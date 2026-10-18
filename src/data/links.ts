import type { Link } from "./types";

export const email = "aashi.shah.102@gmail.com";

export const location = {
  city: "Urbana, IL",
  timeZone: "America/Chicago",
};

// Contact links. The hero shows email, linkedin, github, resume as icon buttons;
// the footer shows every link except email (the address is printed above it).
// null → shows [TODO: URL].
export const links: Link[] = [
  { id: "email", label: "Email", icon: "mail", url: `mailto:${email}` },
  { id: "linkedin", label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/aashi-shah3/" },
  { id: "github", label: "GitHub", icon: "github", url: "https://github.com/aashis3-lab" },
  { id: "resume", label: "Resume", icon: "resume", url: "/resume.pdf" },
  { id: "book", label: "Book a call", icon: "calendar", url: "https://cal.com/aashi-shah" },
];
