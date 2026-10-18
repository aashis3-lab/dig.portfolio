import type { Experience } from "./types";

// Newest first. To add a role, copy one block and edit it.
// Logos: drop public/logos/<slug>.svg|png|jpg|webp. Missing → monogram.
export const experience: Experience[] = [
  {
    org: "Ghost Electric Motorcycles",
    slug: "ghost",
    role: "Drivetrain Engineer",
    dates: "Aug 2026–Present",
    line: "Designing and machining drivetrain assemblies for UIUC's electric race motorcycle.",
    url: "https://ghostelectric.web.illinois.edu/",
  },
  {
    org: "AviLux (Disruption Lab)",
    slug: "avilux",
    role: "Project Manager, Go-to-Market",
    dates: "Jan 2026–Present",
    line: "Leading go-to-market strategy for a B2B mobile wireless drone-charging startup; previously Operations & Regulations Lead.",
    url: "https://www.linkedin.com/company/aviluxnetwork/",
  },
  {
    org: "Pleco Solutions",
    slug: "pleco",
    role: "Data Analytics Engineer Intern",
    dates: "May 2026–Present",
    line: "Built the company's first AI demand forecaster end to end and pitched it to clients.",
    url: "https://www.plecosolutions.com/",
  },
  {
    org: "Illinois Consulting Group",
    slug: "icg",
    role: "Consultant",
    dates: "Jan 2026–Present",
    line: "Advising early-stage startups, including Jinship and American Prime, through market research and strategy.",
    url: "https://icgillinois.web.illinois.edu/",
  },
  {
    org: "Autodesk",
    slug: "autodesk",
    role: "Design & Make Ambassador",
    dates: "Jun 2025–May 2026",
    line: "Ran technical workshops and community events for Fusion and AutoCAD.",
    url: "https://www.autodesk.com",
  },
];
