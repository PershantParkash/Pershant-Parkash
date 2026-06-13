"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  Mail,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Zap,
  Layers,
  Monitor,
  Globe,
  Server,
  Rocket,
  MessageCircle,
  Star,
  Send,
  Code2,
  LayoutDashboard,
  MapPin,
  Terminal,
  Cpu,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Radio,
} from "lucide-react";


interface Project {
  name: string;
  type: string;
    link: string;
  description: string;
  tags: string[];
  featured?: boolean;
  year: string;
  icon: React.ReactNode;
}

interface Skill {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}


const PHOTO_URL = "/kamal.jpg";

const projects: Project[] = [
  {
  name: "EchoTalk",
  type: "Accessibility SaaS Platform · ZapTech LTD",
     link: "https://app.echotalk.co.uk/login",
  year: "2025 - 2026",
  description: "Full-stack development on an accessibility-focused SaaS designed for users with speech and hearing impairments. Built core features including real-time chat, audio/video calling with Socket.IO and Agora RTC, course and service modules, and RESTful APIs with NestJS and PostgreSQL. Also contributed to an innovative sign language gesture prediction feature that translates gestures into real-time communication during calls.",
  tags: ["Next.js", "NestJS", "Socket.IO", "Agora RTC", "PostgreSQL", "TypeScript"],
  featured: true,
  icon: <MessageCircle className="w-4 h-4" />,
},
  {
    name: "Twinkle Official",
    type: "E-commerce Platform",
      link: "https://www.twinkleofficial.com/",
    year: "2026",
    description:
      "Production-ready e-commerce platform with authentication, role-based authorization, product management, cart, checkout flow, and order management. Frontend on Vercel, backend on Railway, database on Neon.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Neon", "Vercel", "Railway"],
    icon: <Star className="w-4 h-4" />,
  },
{
  name: "Teal Automations",
  type: "Agency Website",
    link: "https://www.tealautomations.com/",
  year: "2026",
  description:
    "Modern portfolio and marketing website for a workflow automation agency. Beyond the static site, I enhanced it with product thinking by integrating Calendly for booking discovery calls. Also proposed a secure credential transfer approach using Proton Pass for automation project handovers, focusing on security and operational clarity.",
  tags: ["Next.js", "Tailwind CSS", "Calendly Integration", "UX Design"],
  icon: <Zap className="w-4 h-4" />,
},
];

const skills: Skill[] = [
  {
    category: "Frontend",
    icon: <LayoutDashboard className="w-4 h-4" />,
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="w-4 h-4" />,
    items: ["NestJS", "REST APIs", "JWT Auth", "TypeORM"],
  },
  {
    category: "Real-time",
    icon: <Radio className="w-4 h-4" />,
    items: ["Socket.IO", "Agora RTC", "WebRTC", "WebSockets"],
  },
  // {
  //   category: "Database",
  //   icon: <Cpu className="w-4 h-4" />,
  //   items: ["PostgreSQL"],
  // },
  {
    category: "DevOps",
    icon: <Globe className="w-4 h-4" />,
    items: ["Docker", "Vercel", "Railway", "CI/CD", "Git & GitHub"],
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "I dig into requirements, ask the right questions, and map out the feature before writing a single line of code.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Clean, scalable structure from the start. DB schema, API contracts, and component boundaries defined upfront.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Full-stack, iterative development. I own the feature end-to-end, from the NestJS endpoint to the polished Next.js UI.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "PR-ready code with proper error handling, production monitoring, and fast turnaround on bugs and feedback.",
  },
];

const experiences: Experience[] = [
  {
    company: "ZapTech LTD",
    role: "Full Stack Developer",
    period: "Feb 2025 – Present",
    bullets: [
      "Developed and maintained full-stack features for Echotalk, an accessibility SaaS built on Next.js, NestJS, TypeScript, and PostgreSQL.",
      "Built a real-time chat and video/audio calling system using Socket.IO and Agora RTC, including persistent call history.",
      "Designed and implemented RESTful APIs handling authentication, validation, business logic, and efficient database interactions.",
      "Resolved critical production issues across frontend and backend, improving stability and reducing recurring support tickets.",
    ],
  },
  {
    company: "MK-TH Organization",
    role: "Workflow Automation Engineer (Part-Time)",
    period: "Feb 2024 – Jan 2025",
    bullets: [
      "Automated business workflows using Zoho CRM, Airtable, Fillout Forms, and Zoho Sign.",
      "Integrated third-party platforms through APIs and webhooks, handling authentication, request/response handling, and data sync.",
      "Built a strong foundation in API design, backend development, and database interactions.",
    ],
  },
];


const C = {
  bg: "#0d0d0b",
  bgAlt: "#131310",
  bgCard: "#161613",
  text: "#e8e4dc",
  muted: "rgba(232,228,220,0.45)",
  faint: "rgba(232,228,220,0.2)",
  hairline: "rgba(232,228,220,0.08)",
  accent: "#c9a96e",
  accentDim: "rgba(201,169,110,0.08)",
  accentBorder: "rgba(201,169,110,0.18)",
};

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');
`;


const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Divider = () => (
  <div className="w-full h-px" style={{ background: C.hairline }} />
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p
    className="text-xs font-medium tracking-[0.2em] uppercase mb-5"
    style={{ color: C.accent, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.18em" }}
  >
    {children}
  </p>
);

const SerifHeading = ({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <h2
    className={`font-normal leading-[1.05] ${className}`}
    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: C.text, ...style }}
  >
    {children}
  </h2>
);


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = FONTS;
    document.head.appendChild(style);

    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    // { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={
        scrolled
          ? {
              background: "rgba(13,13,11,0.9)",
              backdropFilter: "blur(24px)",
              borderBottom: `1px solid ${C.hairline}`,
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: C.text, fontFamily: "'DM Sans', sans-serif" }}
          >
            Pershant Parkash
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-wider uppercase transition-colors duration-200"
              style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.text)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs tracking-wider uppercase font-medium transition-all duration-200"
            style={{
              border: `1px solid ${C.accentBorder}`,
              color: C.accent,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.12em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = C.accentDim;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Get in Touch
          </a>
        </div> */}

        <button
          className="md:hidden"
          style={{ color: C.muted }}
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-px bg-current transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-3 h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(13,13,11,0.98)", borderBottom: `1px solid ${C.hairline}` }}
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif" }}
                  className="text-sm">{l.label}</a>
              ))}
              {/* <a href="#contact"
                className="mt-2 py-3 text-xs tracking-wider uppercase text-center"
                style={{ border: `1px solid ${C.accentBorder}`, color: C.accent, fontFamily: "'DM Sans', sans-serif" }}>
                Get in Touch
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};


const Hero = () => {
//   const { scrollY } = useScroll();
// const y = useTransform(scrollY, [0, 800], [0, 40]);
//  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 400, borderRadius: "50%",
          background: `radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5db37e" }} />
              <span className="text-xs tracking-[0.15em] uppercase" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
                Open to full-time roles
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <SerifHeading className="text-5xl md:text-6xl lg:text-7xl mb-6">
                Next.js &amp; NestJS<br />
                <em style={{ color: C.accent }}>developer</em> <br />
                full stack, end to end.
              </SerifHeading>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base leading-relaxed mb-2 max-w-md"
              style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              I build production-ready web applications from database design to polished user experiences. With experience in Next.js, NestJS, TypeScript, and PostgreSQL , I enjoy solving complex business problems and delivering software that users can depend on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1.5 mb-12 text-xs"
              style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}
            >
              <MapPin className="w-3 h-3" />
              Karachi, Pakistan · Remote friendly
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2.5 text-sm font-medium tracking-wide transition-all duration-200"
                style={{ color: C.text, fontFamily: "'DM Sans', sans-serif" }}
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" style={{ color: C.accent }} />
              </a>
              {/* <div className="w-px h-4 hidden sm:block" style={{ background: C.hairline }} /> */}
              {/* <a
                href="#contact"
                className="text-sm font-medium tracking-wide transition-colors duration-200"
                style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
              >
                Get in touch →
              </a> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="mt-16 pt-10"
              style={{ borderTop: `1px solid ${C.hairline}` }}
            >
              <p className="text-xs uppercase tracking-[0.15em] mb-4" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
                Core stack
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Tailwind CSS"].map((s) => (
                  <span
                    key={s}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs transition-all duration-200"
                    style={{
                      border: `1px solid ${C.accentBorder}`,
                      color: C.muted,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(201,169,110,0.5)" }} />
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5db37e" }} />
                <span className="text-xs" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em" }}>
                  Available now · Full-time 
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center md:justify-end mb-28 md:mb-0"
          >
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  width: 300,
                  height: 420,
                  background: C.bgCard,
                }}
              >
                <img
                  src={PHOTO_URL}
                  alt="Pershant Parkash"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(20%) contrast(1.05)" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-32"
                  style={{ background: `linear-gradient(to top, ${C.bg}dd, transparent)` }}
                />
              </div>

              <div
                className="absolute -z-10"
                style={{
                  inset: 0,
                  top: 14,
                  left: 14,
                  border: `1px solid ${C.accentBorder}`,
                }}
              />

              <div
                className="absolute -bottom-6 -left-8 px-4 py-3 mb-20"
                style={{
                  background: C.bgAlt,
                  border: `1px solid ${C.hairline}`,
                }}
              >
                <p className="text-xs font-medium" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif" }}>
                  Full-Stack Developer
                </p>
                <p className="text-xs" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
                  Next.js · NestJS · TypeScript
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center pb-8"
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2.5, repeat: Infinity }} style={{ color: C.faint }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


const About = () => (
  <section id="about" className="py-32 px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <FadeUp>
          <Label>About Me</Label>
          <SerifHeading className="text-4xl md:text-5xl mb-8">
            I own the feature<br />
            database to UI.
          </SerifHeading>
          <p className="text-base leading-relaxed mb-5" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
            I'm Pershant Parkash, a Full-Stack Developer passionate about building products that solve real-world problems. At ZapTech LTD, I contribute to EchoTalk, an accessibility-focused SaaS platform, working with NestJS, PostgreSQL, Socket.IO, Agora RTC, and Next.js to deliver scalable, reliable, and user-friendly experiences.
          </p>
          <p className="text-base leading-relaxed" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
          I take features from idea to production, handling everything from API design and database modeling to frontend state management and edge cases. I’m now looking to join a team where I can keep growing and build impactful products.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="flex flex-col">
            {[
  {
    icon: <Rocket className="w-3.5 h-3.5" />,
    title: "End-to-End Feature Ownership",
    desc: "From database schema and API design to frontend UI. I build and ship features without handoff gaps.",
  },
  {
    icon: <Radio className="w-3.5 h-3.5" />,
    title: "Real-Time Communication Systems",
    desc: "Experience building chat and audio/video calling systems using Socket.IO and Agora RTC, including state management.",
  },
  {
    icon: <Layers className="w-3.5 h-3.5" />,
    title: "Production-Ready Engineering",
    desc: "I’ve worked on live SaaS systems, fixing critical bugs, improving stability, and ensuring smooth user experiences under real usage.",
  },
].map((item, i) => (
              <div key={i}>
                <div className="py-8 flex items-start gap-6">
                  <div
                    className="mt-0.5 flex-shrink-0 w-7 h-7 flex items-center justify-center"
                    style={{ border: `1px solid ${C.accentBorder}`, color: C.accent }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2" style={{ color: C.text, fontFamily: "'DM Sans', sans-serif" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </div>
                {i < 2 && <Divider />}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);


const Projects = () => (
  <section id="projects" className="py-32 px-8">
    <div className="max-w-6xl mx-auto">
      <FadeUp className="mb-20 flex items-end justify-between">
        <div>
          <Label>Selected Work</Label>
          <SerifHeading className="text-4xl md:text-5xl">
            Things I've shipped.
          </SerifHeading>
        </div>
        <p className="hidden md:block text-sm" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
          2025 – 2026
        </p>
      </FadeUp>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <FadeUp key={project.name} delay={i * 0.07}>
            <div>
              <motion.div
                className="py-10 grid md:grid-cols-12 gap-6 group cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                 onClick={() => project.link && window.open(project.link, "_blank", "noopener noreferrer")}
              >
                <div className="md:col-span-1 flex items-start pt-1">
                  <span className="text-xs" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0" style={{ color: C.accent }}>{project.icon}</div>
                    <div>
                      <p className="font-normal text-lg mb-1 group-hover:text-opacity-80 transition-colors"
                        style={{ color: C.text, fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}>
                        {project.name}
                        {project.featured && (
                          <span className="ml-2 text-xs px-2 py-0.5 align-middle" style={{ border: `1px solid ${C.accentBorder}`, color: C.accent, fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
                            FEATURED
                          </span>
                        )}
                      </p>
                      <p className="text-xs tracking-wide" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
                        {project.type}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm leading-relaxed" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1"
                        style={{ border: `1px solid ${C.hairline}`, color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 flex items-start justify-end gap-4">
                  <span className="text-xs pt-1" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>{project.year}</span>
                  <ArrowUpRight
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-0.5"
                    style={{ color: C.accent }}
                  />
                </div>
              </motion.div>

              
              <Divider />
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);


const Skills = () => (
  <section id="skills" className="py-32 px-8">
    <div className="max-w-6xl mx-auto">
      <FadeUp className="mb-20">
        <Label>Skills</Label>
        <SerifHeading className="text-4xl md:text-5xl">
          My stack.
        </SerifHeading>
        <p className="mt-4 text-base max-w-lg" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
          TypeScript across the board. Next.js on the frontend, NestJS on the backend, PostgreSQL underneath.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-4 gap-0">
        {skills.map((skill, i) => (
          <FadeUp key={skill.category} delay={i * 0.06}>
            <div
              className="py-8 px-6 h-full"
              style={{
                borderLeft: i === 0 ? `1px solid ${C.hairline}` : "none",
                borderRight: `1px solid ${C.hairline}`,
                borderTop: `1px solid ${C.hairline}`,
                borderBottom: `1px solid ${C.hairline}`,
              }}
            >
              <div className="flex items-center gap-2 mb-6" style={{ color: C.accent }}>
                {skill.icon}
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: C.accent, letterSpacing: "0.12em" }}>
                  {skill.category}
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {skill.items.map((item) => (
                  <p key={item} className="text-sm" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── Experience ───────────────────────────────────────────────────────────────

const Experience = () => (
  <section id="experience" className="py-32 px-8">
    <div className="max-w-6xl mx-auto">
      <FadeUp className="mb-20">
        <Label>Experience</Label>
        <SerifHeading className="text-4xl md:text-5xl">
          Where I've worked.
        </SerifHeading>
      </FadeUp>

      <div className="flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <FadeUp key={exp.company} delay={i * 0.1}>
            <div
              className="py-10 grid md:grid-cols-12 gap-6"
              style={{ borderTop: `1px solid ${C.hairline}`, ...(i === experiences.length - 1 ? { borderBottom: `1px solid ${C.hairline}` } : {}) }}
            >
              {/* Company / period */}
              <div className="md:col-span-4">
                <div className="flex items-start gap-3">
                  <div
                    className="mt-1 flex-shrink-0 w-7 h-7 flex items-center justify-center"
                    style={{ border: `1px solid ${C.accentBorder}`, color: C.accent }}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-normal mb-1" style={{ color: C.text, fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}>
                      {exp.company}
                    </p>
                    <p className="text-xs mb-1" style={{ color: C.accent, fontFamily: "'DM Sans', sans-serif" }}>{exp.role}</p>
                    <p className="text-xs" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>{exp.period}</p>
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <div className="md:col-span-8">
                <div className="flex flex-col gap-3">
                  {exp.bullets.map((b, bi) => (
                    <div key={bi} className="flex items-start gap-3">
                      <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: C.accentBorder }} />
                      <p className="text-sm leading-relaxed" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Education */}
       <FadeUp className="mb-20 mt-20">
        <Label>Education</Label>
        <SerifHeading className="text-4xl md:text-5xl">
          Where I studied
        </SerifHeading>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div
          className="mt-0 py-10 grid md:grid-cols-12 gap-6"
          style={{ borderTop: `1px solid ${C.hairline}`, borderBottom: `1px solid ${C.hairline}` }}
        >
          <div className="md:col-span-4">
            <div className="flex items-start gap-3">
              <div
                className="mt-1 flex-shrink-0 w-7 h-7 flex items-center justify-center"
                style={{ border: `1px solid ${C.accentBorder}`, color: C.accent }}
              >
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="font-normal mb-1" style={{ color: C.text, fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}>
                  SZABIST
                </p>
                <p className="text-xs mb-1" style={{ color: C.accent, fontFamily: "'DM Sans', sans-serif" }}>Bachelor of Computer Science</p>
                <p className="text-xs" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>Oct 2021 – June 2025 · Karachi</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 flex items-center">
            <p className="text-sm leading-relaxed" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Shaheed Zulfikar Ali Bhutto Institute of Science and Technology — four-year CS degree covering
              software engineering, databases, algorithms, and systems design.
            </p>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);

// ─── Process ──────────────────────────────────────────────────────────────────

const Process = () => (
  <section id="process" className="py-32 px-8">
    <div className="max-w-6xl mx-auto">
      <FadeUp className="mb-20">
        <Label>How I Work</Label>
        <SerifHeading className="text-4xl md:text-5xl">
          From ticket<br />
          <em>to production.</em>
        </SerifHeading>
      </FadeUp>

      <div className="grid md:grid-cols-4 gap-0">
        {steps.map((step, i) => (
          <FadeUp key={step.title} delay={i * 0.1}>
            <div
              className="p-8 h-full"
              style={{
                borderLeft: i === 0 ? `1px solid ${C.hairline}` : "none",
                borderRight: `1px solid ${C.hairline}`,
                borderTop: `1px solid ${C.hairline}`,
                borderBottom: `1px solid ${C.hairline}`,
              }}
            >
              <p
                className="text-5xl font-light mb-8"
                style={{ color: C.accentBorder, fontFamily: "'Cormorant Garamond', serif" }}
              >
                {step.number}
              </p>
              <p className="text-base font-normal mb-3" style={{ color: C.text, fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
                {step.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                {step.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── Contact ──────────────────────────────────────────────────────────────────

// const Contact = () => {
//   const [sent, setSent] = useState(false);

//   return (
//     <section id="contact" className="py-32 px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-20 items-start">
//           <FadeUp>
//             <Label>Contact</Label>
//             <SerifHeading className="text-4xl md:text-5xl mb-8">
//               Let's talk about<br />
//               <em>a role.</em>
//             </SerifHeading>
//             <p className="text-base leading-relaxed mb-12" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
//               I'm actively looking for full-time full-stack positions. If you're building something with Next.js and NestJS — or you just need someone who can own the whole stack — I'd love to hear about it.
//             </p>

//             <div className="flex flex-col gap-0">
//               {[
//                 {
//                   icon: <Mail className="w-3.5 h-3.5" />,
//                   label: "Email",
//                   value: "pershantparkash@gmail.com",
//                   href: "mailto:pershantparkash@gmail.com",
//                 },
//                 {
//                   icon: <Globe className="w-3.5 h-3.5" />,
//                   label: "Portfolio",
//                   value: "pershantparkash.com",
//                   href: "https://www.pershantparkash.com",
//                 },
//               ].map((item, i) => (
//                 <a
//                   key={i}
//                   href={item.href}
//                   className="group flex items-center justify-between py-5 transition-colors duration-200"
//                   style={{
//                     borderTop: `1px solid ${C.hairline}`,
//                     ...(i === 1 ? { borderBottom: `1px solid ${C.hairline}` } : {}),
//                   }}
//                   onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = C.accentDim)}
//                   onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="w-7 h-7 flex items-center justify-center" style={{ border: `1px solid ${C.accentBorder}`, color: C.accent }}>
//                       {item.icon}
//                     </div>
//                     <div>
//                       <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>{item.label}</p>
//                       <p className="text-sm" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
//                     </div>
//                   </div>
//                   <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: C.accent }} />
//                 </a>
//               ))}
//             </div>
//           </FadeUp>

//           <FadeUp delay={0.15}>
//             <div
//               className="p-8"
//               style={{ border: `1px solid ${C.hairline}`, background: C.bgCard }}
//             >
//               <AnimatePresence mode="wait">
//                 {sent ? (
//                   <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
//                     <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ border: `1px solid ${C.accentBorder}`, color: C.accent }}>
//                       <Send className="w-5 h-5" />
//                     </div>
//                     <p className="font-normal mb-2" style={{ color: C.text, fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>Message sent.</p>
//                     <p className="text-sm" style={{ color: C.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>I'll get back to you within 24 hours.</p>
//                   </motion.div>
//                 ) : (
//                   <motion.div key="form" initial={{ opacity: 1 }}>
//                     <p className="text-xs uppercase tracking-widest mb-6" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
//                       Send a message
//                     </p>
//                     <div className="flex flex-col gap-5">
//                       {[
//                         { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
//                         { id: "company", label: "Company", type: "text", placeholder: "Acme Inc." },
//                         { id: "email", label: "Email", type: "email", placeholder: "jane@acme.com" },
//                       ].map((field) => (
//                         <div key={field.id}>
//                           <label className="block text-xs uppercase tracking-widest mb-2.5" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>{field.label}</label>
//                           <input
//                             type={field.type}
//                             placeholder={field.placeholder}
//                             className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
//                             style={{
//                               background: "transparent",
//                               border: `1px solid ${C.hairline}`,
//                               color: C.text,
//                               fontFamily: "'DM Sans', sans-serif",
//                             }}
//                             onFocus={(e) => (e.currentTarget.style.borderColor = C.accentBorder)}
//                             onBlur={(e) => (e.currentTarget.style.borderColor = C.hairline)}
//                           />
//                         </div>
//                       ))}
//                       <div>
//                         <label className="block text-xs uppercase tracking-widest mb-2.5" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>Role / Opportunity</label>
//                         <textarea
//                           rows={4}
//                           placeholder="Tell me about the role or what you're building..."
//                           className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
//                           style={{
//                             background: "transparent",
//                             border: `1px solid ${C.hairline}`,
//                             color: C.text,
//                             fontFamily: "'DM Sans', sans-serif",
//                           }}
//                           onFocus={(e) => (e.currentTarget.style.borderColor = C.accentBorder)}
//                           onBlur={(e) => (e.currentTarget.style.borderColor = C.hairline)}
//                         />
//                       </div>
//                       <motion.button
//                         whileHover={{ x: 2 }}
//                         whileTap={{ scale: 0.99 }}
//                         onClick={() => setSent(true)}
//                         className="w-full py-4 text-xs font-medium tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-200"
//                         style={{
//                           border: `1px solid ${C.accentBorder}`,
//                           color: C.accent,
//                           fontFamily: "'DM Sans', sans-serif",
//                           background: "transparent",
//                         }}
//                         onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = C.accentDim)}
//                         onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
//                       >
//                         Send Message
//                         <ArrowRight className="w-3.5 h-3.5" />
//                       </motion.button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </FadeUp>
//         </div>
//       </div>
//     </section>
//   );
// };


const Footer = () => (
  <footer className="py-10 px-8" style={{ borderTop: `1px solid ${C.hairline}` }}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
        Pershant Parkash · Next.js & NestJS Developer
      </span>
      <p className="text-xs" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}>
        Open to full-time roles · {new Date().getFullYear()}
      </p>
      <a href="mailto:pershantparkash@gmail.com" style={{ color: C.faint, fontFamily: "'DM Sans', sans-serif" }}
        className="flex items-center gap-1.5 text-xs transition-colors duration-200"
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.faint)}>
        <Mail className="w-3.5 h-3.5" />
        pershantparkash@gmail.com
      </a>
    </div>
  </footer>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth antialiased" style={{ background: C.bg, color: C.text }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Process />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}