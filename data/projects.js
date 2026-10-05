/*
 * ============================================
 *  PROJECTS DATA (things I built myself)
 * ============================================
 *
 *  Personal, capstone and school projects — company
 *  work goes in data/experience.js instead.
 *
 *  Fields:
 *    id          – unique identifier (used as React key)
 *    title       – project name
 *    type        – e.g. "Personal Project", "Capstone Project", "School Project"
 *    role        – your role on the project
 *    period      – when (optional, null if unknown)
 *    description – short summary of the project
 *    tags        – array of tech/tools used
 *    image       – thumbnail in public/projects/ (optional, null for a placeholder)
 *    imageFit    – "cover" (photos/screenshots) or "contain" (logos)
 *    links       – array of { label, url } — add download: true for files
 */

export const projects = [
  {
    id: "super-news",
    title: "Super News",
    type: "Personal Project",
    role: "Full-Stack Developer",
    period: "April 2026",
    description:
      "A free, real-time news aggregator with seven sections — World, Davao, PH, Tech, Esports, Stocks and Disasters — pulled from trusted sources and refreshed every 30 minutes. Features an interactive 3D globe, a breaking-news ticker, Ctrl+K search, live stock prices and an esports tracker.",
    tags: ["Next.js", "TypeScript", "Turso (SQLite)", "Drizzle ORM", "three.js", "Tailwind CSS", "Vercel"],
    image: "/projects/super-news.jpg",
    imageFit: "cover",
    links: [{ label: "Live Site", url: "https://super-news-six.vercel.app" }],
  },
  {
    id: "bantay",
    title: "Bantay",
    type: "Personal Project",
    role: "Developer",
    period: "April 2026",
    description:
      "A strict focus-blocker Chrome extension (\"bantay\" is Filipino for guard). It plans Pomodoro cycles, blocks distracting sites with a full-page WARNING and a siren that won't stop until you get back to work, limits pauses per session, and tracks streaks and top distractions.",
    tags: ["Chrome Extension (MV3)", "JavaScript", "Web Audio API"],
    image: "/projects/bantay.jpg",
    imageFit: "cover",
    links: [{ label: "GitHub", url: "https://github.com/allenJames777/Bantay" }],
  },
  {
    id: "battleship",
    title: "Battleship",
    type: "Personal Project",
    role: "Full-Stack Developer",
    period: "April – June 2026",
    description:
      "A real-time multiplayer Battleship game: create a room, share the code and play a friend live, with drag-and-drop fleet placement, turn timers and automatic reconnection.",
    tags: ["Node.js", "Express", "Socket.io", "JavaScript", "Render"],
    image: "/projects/battleship.jpg",
    imageFit: "cover",
    links: [
      { label: "Play Live", url: "https://battleship-zhz0.onrender.com/" },
      { label: "GitHub", url: "https://github.com/allenJames777/battleship" },
    ],
  },
  {
    id: "pokemon-dashboard",
    title: "Pokémon Dashboard",
    type: "Personal Project",
    role: "Data Analyst",
    period: "March 2026",
    description:
      "An interactive Pokédex dashboard in Power BI: search any of 800 Pokémon to see its artwork, stats, generation and type breakdown, with moves color-coded by type. Python scripts enrich the dataset from PokéAPI with moves, move types and Mega-form images.",
    tags: ["Power BI", "Python", "PokéAPI", "Excel"],
    image: "/projects/pokemon-dashboard.jpg",
    imageFit: "cover",
    links: [{ label: "GitHub", url: "https://github.com/allenJames777/pokemon-dashboard" }],
  },
  {
    id: "educanet",
    title: "EduCaNet",
    type: "Capstone Project",
    role: "Project Lead & Developer",
    period: "July 2023 – January 2024",
    description:
      "A Learning Management System for SPED teachers handling children with special needs. Led the full development lifecycle, wrote the research paper and system documentation, and ran pre-defense system testing.",
    tags: ["JavaScript", "Figma", "Project Management", "Documentation"],
    image: "/projects/educanet.png",
    imageFit: "contain",
    links: [
      { label: "Live Site", url: "https://edu-canet-web.vercel.app/" },
      {
        label: "UI Design",
        url: "https://www.figma.com/design/7Z72fhrZq7M8ohoUBJVzaE/Untitled?node-id=0-1&t=h73g3ZTlS1Jy6SKa-0",
      },
      { label: "Read Paper", url: "/EduCaNet.pdf", download: true },
    ],
  },
  {
    id: "flutter-crud",
    title: "Flutter CRUD App",
    type: "Personal Project",
    role: "Mobile Developer",
    period: "March 2024",
    description:
      "A Flutter mobile app with full create, read, update and delete functions, fetching data from a phone API. A ready-to-install APK is available in the repo.",
    tags: ["Flutter", "Dart", "REST API"],
    image: "/projects/flutter.png",
    imageFit: "contain",
    links: [{ label: "GitHub", url: "https://github.com/allenJames777/Flutter-CRUD-API" }],
  },
  {
    id: "safari",
    title: "safARi",
    type: "UI/UX Design",
    role: "UI/UX Designer",
    period: null,
    description:
      "A virtual zoo experience — \"Your Virtual Journey to the Zoo\". Interactive Figma prototype from the landing page through the app flow.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    image: "/projects/safari.jpg",
    imageFit: "cover",
    links: [
      {
        label: "View in Figma",
        url: "https://www.figma.com/design/u3WjBP6TTayyvXxsNtlG6u/Exam?node-id=0-1&t=3ELahssvHQYA0gEj-1",
      },
    ],
  },
  {
    id: "karental",
    title: "KARENTAL",
    type: "UI/UX Design",
    role: "UI/UX Designer",
    period: null,
    description: "A car rental mobile app prototype designed in Figma.",
    tags: ["Figma", "Mobile UI", "Prototyping"],
    image: "/projects/karental.png",
    imageFit: "cover",
    links: [
      {
        label: "View in Figma",
        url: "https://www.figma.com/design/shiKZrWU0upeToHU34gu5O/Mobile-Dev-Prototype?node-id=0-1&t=YtSahPd4CmBXAu6V-0",
      },
    ],
  },
  {
    id: "registry-of-deeds",
    title: "Registry of Deeds System",
    type: "School Project",
    role: "System Quality Assurance",
    period: "October 2022 – November 2023",
    description:
      "Tested the system's functions end to end, identifying bugs and logic errors to ensure data accuracy, and verified every core feature before the final demonstration.",
    tags: ["QA Testing", "Bug Tracking", "System Testing"],
    image: null,
    imageFit: "cover",
    links: [],
  },

  // ============================================
  //  ADD MORE PROJECTS BELOW (copy an entry above)
  // ============================================
];
