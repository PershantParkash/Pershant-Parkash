// All text on the site lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Pershant Parkash",
  email: "pershantparkash@gmail.com",
  location: "Karachi, Pakistan",
  instagram: { handle: "kamalbuilds1", url: "https://www.instagram.com/kamalbuilds1/" },
  github: "https://github.com/PershantParkash",
  linkedin: "https://www.linkedin.com/in/pershant-parkash-9986ab312/",
  status: "Open to new opportunities",
  openTo: "New roles and projects, in Karachi or remote",
  resume: "/pershant-parkash-resume.pdf",
  stack: ["Next.js", "React Native", "NestJS", "TypeScript", "PostgreSQL", "Redis"],
};

/* Videos
   To add a new Instagram reel:
   1. Copy the code from its link: instagram.com/reel/THIS_PART/
   2. Save its cover image (9:16) as public/reels/THIS_PART.webp
   3. Add an entry at the top of this list. */
export interface Reel {
  code: string;
  title: string;
  summary: string;
  date: string; // YYYY-MM-DD
}

export const reels: Reel[] = [
  {
    code: "DgDFnd0M5d9",
    title: "Meet Claude Connectors",
    summary: "Connecting Claude to tools like Figma, Canva and Shopify.",
    date: "2026-11-22",
  },
  {
    code: "DgAf7WAMCLJ",
    title: "A skill called Frontend Design",
    summary: "Using Claude Skills to fix frontends that all look the same.",
    date: "2026-11-21",
  },
  {
    code: "DdJqtP7SEz1",
    title: "What you lose shows what you loved",
    summary: "A story from my developer journey.",
    date: "2026-09-11",
  },
  {
    code: "DcoF7_Rsl3Y",
    title: "Twinkle, from logo to website",
    summary: "The finished logo becomes an online store.",
    date: "2026-08-29",
  },
  {
    code: "DcJSmLys9-s",
    title: "Twinkle, part 1: the logo",
    summary: "The first video in my build series.",
    date: "2026-08-17",
  },
];

/* Work */
export interface Project {
  name: string;
  kind: string;
  year: string;
  description: string;
  built: string[];
  stack: string[];
  image?: { src: string; alt: string };
  link?: { href: string; label: string };
  reels?: { code: string; label: string }[];
}

export const projects: Project[] = [
  {
    name: "EchoTalk",
    kind: "Accessibility platform, built at Zaptech Limited",
    year: "2025 to 2026",
    description:
      "A communication platform for people with hearing and speech impairments. I worked on it full stack, from the database to the call screen.",
    built: [
      "Real-time chat, voice and video calling",
      "Collaborative whiteboarding, e-learning and booking",
      "Secure NestJS and PostgreSQL APIs with JWT and role-based access",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "Socket.IO", "Agora RTC", "PostgreSQL"],
    image: { src: "/work/echotalk.webp", alt: "EchoTalk website: Understand. Express. Connect." },
    link: { href: "https://www.echotalk.co.uk/", label: "Visit EchoTalk" },
  },
  {
    name: "Twinkle Official",
    kind: "Online store for a premium nightwear brand",
    year: "May 2026",
    description:
      "A full-stack e-commerce platform covering accounts, product management, cart, checkout and orders.",
    built: [
      "API response times cut by 40% with Redis caching",
      "Recurring costs cut by more than 60% compared to Shopify",
      "Transactional order processing, with images stored on AWS S3",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "AWS S3"],
    image: { src: "/work/twinkle.webp", alt: "Twinkle store home page showing the Night Elegance collection" },
    link: { href: "https://www.twinkleofficial.com/", label: "Visit the store" },
    reels: [
      { code: "DcJSmLys9-s", label: "Video: the logo" },
      { code: "DcoF7_Rsl3Y", label: "Video: the website" },
    ],
  },
  {
    name: "Miro AI Career Coach",
    kind: "Mobile app",
    year: "August to September 2026",
    description:
      "A cross-platform mobile app that writes a weekly career plan for each user, based on their experience, education and skills.",
    built: [
      "Quizzes, assignments, articles and voice-based confidence exercises generated with the Claude and Grok APIs",
      "User history and daily streaks, so people can follow their progress",
    ],
    stack: ["React Native", "NestJS", "PostgreSQL", "Claude API", "Grok API"],
  },
  {
    name: "Teal Automations",
    kind: "Agency website",
    year: "2026",
    description:
      "A marketing site for a workflow automation agency. I integrated Calendly so visitors can book discovery calls, and proposed a secure way to hand over credentials using Proton Pass.",
    built: [],
    stack: ["Next.js", "Tailwind CSS", "Calendly"],
    // Add the link back once https works on this domain:
    // link: { href: "https://www.tealautomations.com/", label: "Visit the site" },
  },
];

/* Experience and education */
export const history = [
  {
    period: "Feb 2025 – June 2026",
    title: "Full Stack Developer",
    place: "Zaptech Limited",
    points: [
      "Built and enhanced EchoTalk, an accessibility platform with real-time communication, voice and video calling, collaborative whiteboarding, e-learning and booking.",
      "Designed and developed secure backend services in NestJS, TypeScript and PostgreSQL, with REST APIs, JWT authentication, role-based access control and request validation.",
      "Integrated Socket.IO and Agora RTC, and worked with Git, code reviews and CI/CD to deliver reliable production releases.",
    ],
  },
  {
    period: "Feb 2024 – Jan 2025",
    title: "Workflow Automation Engineer",
    place: "MK-TH Organization",
    points: [
      "Built 20+ workflow automations with Make.com, Zoho CRM, Airtable, Fillout Forms and Zoho Sign, reducing manual data entry by an estimated 70%.",
      "Designed cross-platform data synchronization that cut processing time from hours to under 5 minutes.",
      "Integrated 20+ third-party APIs with custom data mappings for reliable real-time sync between business systems.",
    ],
  },
  {
    period: "Oct 2021 – June 2025",
    title: "Bachelor of Computer Science",
    place: "SZABIST, Karachi",
    points: ["Shaheed Zulfikar Ali Bhutto Institute of Science and Technology, CGPA 3.10 out of 4."],
  },
];

export const skills = [
  { area: "Frontend", items: "Next.js, React.js, React Native, Tailwind CSS" },
  { area: "Backend", items: "NestJS, REST APIs, JWT and RBAC, Socket.IO, WebRTC, Agora RTC" },
  { area: "Languages", items: "TypeScript, JavaScript" },
  { area: "Database", items: "PostgreSQL, Redis" },
  { area: "AI", items: "Claude API, Grok API" },
  { area: "Tools", items: "AWS S3, Docker, Git and GitHub, CI/CD, Postman, Swagger" },
  { area: "Automation", items: "Make.com, Zoho CRM, Airtable, Fillout Forms, Zoho Sign" },
];

export const steps = [
  { title: "Understand", text: "I dig into requirements, ask questions and map the feature before writing code." },
  { title: "Architect", text: "Database schema, API contracts and component boundaries are defined upfront." },
  { title: "Build", text: "I own the feature end to end, from the NestJS endpoint to the web or mobile screen." },
  { title: "Ship", text: "PR-ready code with error handling, then monitoring and fast fixes in production." },
];
