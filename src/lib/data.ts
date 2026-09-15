/**
 * Single source of truth for the whole site. No database, no CMS, no fetch —
 * every panel reads from here. Seeded from the original portfolio's data.ts and
 * the CV, with the extra fields this editorial layout needs (domains, glyphs,
 * a merged timeline).
 */

const phone = "+880 1775 491560";

export const person = {
  first: "REDWAN",
  last: "HUSSAIN",
  name: "Redwan Hussain",
  /** Year the practice starts on the masthead. */
  since: "2023",
  tagline: "Researcher × Software Engineer",
  role: "Software Engineer",
  subrole: "Project Manager · CFO at Doddlesoft",
  location: "Sylhet, Bangladesh",
  timeZone: "Asia/Dhaka",
  utcLabel: "GMT+6",
  email: "redwanhussain.edu@gmail.com",
  phone,
  whatsapp: `https://wa.me/${phone.replace(/\D/g, "")}`,
  cv: "/redwan-hussain-cv.pdf",
  status: "Open to build",
  statement:
    "I build software that separates signal from noise in real time, agentic products that do the thinking, and research that tells real from synthetic",
  bio: [
    "A software engineering graduate of Leading University, Sylhet, reading Computer Science & Engineering. Currently Project Manager and CFO at Doddlesoft in the United Kingdom, where we practise spec-driven agentic development — a method that cuts hallucination, API cost and delivery time in equal measure",
    "The remaining hours go to shipping products end to end — agentic systems, automation strategy — and to research on synthetic media. The same instinct governs both: find the signal, discard the noise",
  ],
};

export type View =
  | "about"
  | "projects"
  | "research"
  | "stack"
  | "work"
  | "contact"
  | "cv";

/** Order of the left rail; also the order arrow-key navigation follows. */
export const views: { id: View; label: string; index: string }[] = [
  { id: "about", label: "About", index: "01" },
  { id: "projects", label: "Projects", index: "02" },
  { id: "research", label: "Research", index: "03" },
  { id: "stack", label: "Stack", index: "04" },
  { id: "work", label: "Work", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
  { id: "cv", label: "CV", index: "07" },
];

export const links = [
  {
    label: "GitHub",
    handle: "redwan-edu",
    href: "https://github.com/redwan-edu",
  },
  {
    label: "LinkedIn",
    handle: "redwan-hussain-edu",
    href: "https://www.linkedin.com/in/redwan-hussain-edu",
  },
  {
    label: "Semantic Scholar",
    handle: "Redwan Hussain",
    href: "https://www.semanticscholar.org/search?q=Redwan%20Hussain",
  },
  { label: "Email", handle: person.email, href: `mailto:${person.email}` },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  /** Bare domain printed above the name; also the link target when `url` is null. */
  domain: string | null;
  url: string | null;
  year: string;
  role: string;
  status: string;
  blurb: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "doddle",
    index: "01",
    name: "Doddlesoft",
    domain: "doddle.software",
    url: "https://www.doddle.software/",
    year: "2025 —",
    role: "Project Manager · CFO",
    status: "Southampton, UK",
    blurb:
      "A software house in the United Kingdom where I handle the end-to-end project lifecycle under Agile Scrum — using spec-driven development that cuts hallucination, API cost and delivery time.",
    tags: [
      "Agile Scrum",
      "Spec-Driven Agentic Development",
      "Risk Management",
      "Team Leadership",
    ],
  },
  {
    id: "anyscribe",
    index: "02",
    name: "AnyScribe",
    domain: "anyscribe.so",
    url: "https://anyscribe.so/",
    year: "2025",
    role: "Design & Build",
    status: "Live",
    blurb:
      "One idea in, native posts out — for X, LinkedIn, Bluesky and Threads. It trains a voice profile on your real posts, scores every draft against it, strips the tells that make writing read like a machine, and hands off to schedule.",
    tags: ["AI Agents", "Voice Profile", "Buffer API", "Multi-Platform"],
  },
  {
    id: "manifest",
    index: "03",
    name: "Manifest",
    domain: "trymanifest.app",
    url: "https://www.trymanifest.app/",
    year: "2025",
    role: "Design & Build",
    status: "Live",
    blurb:
      "An agentic task manager for solo founders. A co-pilot that understands the goals and schedules the workload, a focus calendar for deep work, project stacks, and analytics that measure what a project actually returned.",
    tags: ["Next.js", "TypeScript", "Cloudflare", "AI Co-Pilot"],
  },
  {
    id: "supermock",
    index: "04",
    name: "SuperMock",
    domain: "supermock.net",
    url: "https://www.supermock.net/",
    year: "2025",
    role: "Design & Build",
    status: "Live",
    blurb:
      "Cloud IELTS mock testing for training centres. Unlimited students and unlimited tests on one fixed yearly rate while competitors bill per head — with custom question banks in place of hard-coded papers, and roles for owners, admins and teachers.",
    tags: ["SaaS", "Cloud", "Custom Test Engine"],
  },
  {
    id: "omploy",
    index: "05",
    name: "Omploy",
    domain: "omploy-hackathon-rosy.vercel.app",
    url: null,
    year: "In progress",
    role: "Design & Build",
    status: "Building",
    blurb:
      "Describe an automation in plain English; get it generated, hosted and running. A natural-language workflow platform that removes the gap between wanting a process and having one.",
    tags: ["Automation", "NL → Workflow", "AI Agents"],
  },
  {
    id: "clubmate",
    index: "06",
    name: "Clubmate",
    domain: null,
    url: null,
    year: "2024",
    role: "Design & Build",
    status: "Android",
    blurb:
      "Comprehensive club management on Android with end-to-end encrypted messaging built in — so the members' conversations belong to the members.",
    tags: ["Android", "E2E Encryption", "Jetpack Compose"],
  },
];

export type Publication = {
  index: string;
  title: string;
  venue: string;
  publisher: string;
  year: string;
  status: string;
  doi?: string;
};

export const publications: Publication[] = [
  {
    index: "01",
    title:
      "Toward Generalized Detection of Synthetic Media: Limitations, Challenges, and the Path to Multimodal Solutions",
    venue: "TCCE-2025 · UTeM, Malaysia",
    publisher: "Lecture Notes in Networks and Systems · Springer Nature",
    year: "2025",
    status: "Published",
    doi: "https://doi.org/10.48550/arXiv.2511.11116",
  },
  {
    index: "02",
    title:
      "GenDet-M: A Multimodal Ensemble Architecture for Detecting High-Fidelity Synthetic Videos",
    venue: "Neural Computing and Applications (Q1 Journal)",
    publisher: "Springer Nature · United Kingdom",
    year: "2026",
    status: "Under review",
    doi: "",
  },
  {
    index: "03",
    title:
      "Heart Disease Prediction Using Machine Learning with Ensemble Feature Selection and Hybrid Resampling Technique",
    venue: "ICEFronT: International Conference on Engineering and Frontier Technologies",
    publisher: "ACM Publications",
    year: "2026",
    status: "Under review",
    doi: "",
  },
];

export type TimelineEntry = {
  kind: "work" | "study";
  period: string;
  role: string;
  org: string;
  place: string;
  current: boolean;
  note: string | null;
  points: { head: string; body: string }[];
};

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    period: "2025 — Present",
    role: "Project Manager · CFO",
    org: "DoddleSoft Limited",
    place: "Southampton, UK",
    current: true,
    note: "Company No. 16256282",
    points: [
      {
        head: "Agile Leadership",
        body: "Oversee the complete software development lifecycle under strict Agile Scrum.",
      },
      {
        head: "Spec-Driven Development",
        body: "Introduced spec-driven development to minimise hallucination, delivery time and API cost across agentic work.",
      },
      {
        head: "Risk Management",
        body: "Identify technical bottlenecks early and mitigate project risk before it reaches the release.",
      },
      {
        head: "Team Leadership",
        body: "Allocate engineering resource, manage developer workload and coordinate releases.",
      },
    ],
  },
  {
    kind: "study",
    period: "2022 — 2026",
    role: "BSc in Computer Science & Engineering",
    org: "Leading University",
    place: "Sylhet, Bangladesh",
    current: false,
    note: "Software engineering, database systems and artificial intelligence — with an emphasis on machine learning and computer vision.",
    points: [],
  },
  {
    kind: "study",
    period: "2019 — 2021",
    role: "Higher Secondary Education",
    org: "Scholarshome",
    place: "Sylhet, Bangladesh",
    current: false,
    note: null,
    points: [],
  },
];

/** The About ledger lists study rows only; Work prints the whole timeline. */
export const education = timeline.filter((t) => t.kind === "study");

export type GlyphName = "code" | "window" | "database" | "compass";

export const stack: { group: string; glyph: GlyphName; items: string[] }[] = [
  {
    group: "Languages",
    glyph: "code",
    items: ["TypeScript", "Kotlin", "Java", "Python", "C++", "C"],
  },
  {
    group: "Frameworks",
    glyph: "window",
    items: ["Next.js", "React", "Jetpack Compose", "Tailwind CSS 4"],
  },
  {
    group: "Databbase",
    glyph: "database",
    items: ["PostgreSQL", "Supabase", "Firebase", "Convex", "MongoDB"],
  },
  {
    group: "Practice",
    glyph: "compass",
    items: [
      "Spec-Driven Agentic Development",
      "AI Agent Integration",
      "MCP Servers",
      "Full Stack Engineering",
      "Database Management Systems",
    ],
  },
];
