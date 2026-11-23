import Image from "next/image";
import Branches from "./components/Branches";
import CopyEmail from "./components/CopyEmail";
import Reels from "./components/Reels";
import { history, profile, projects, reels, skills, steps } from "./content";

const wrap = "mx-auto w-full max-w-7xl px-6 md:px-10";
const h2 = "display text-[clamp(2rem,4vw,3.25rem)]";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#videos", label: "Videos" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Hero() {
  return (
    <header className="bg-slate relative overflow-hidden text-white">
      <Branches className="hero-branches" />
      <div className={`${wrap} relative flex min-h-[min(100svh,56rem)] flex-col`}>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-1 py-5">
          <a href="#" className="py-2 font-semibold">
            {profile.name}
          </a>
          <nav aria-label="Main" className="-mx-3 flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="px-3 py-2 text-[0.95rem] text-mist hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="grid flex-1 gap-12 pt-10 md:grid-cols-12 md:gap-8 md:pt-0">
          <div className="self-center md:col-span-7 md:py-8">
            <p className="mb-6 flex items-center gap-2.5 font-medium">
              <span className="size-2.5 rounded-full bg-brass" aria-hidden="true" />
              {profile.status}
            </p>
            <h1 className="display text-[clamp(2.5rem,5vw,4.25rem)]">
              I build web and mobile apps end to end and film what I learn.
            </h1>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-pretty text-mist">
              Full-stack developer in Karachi with 1.5+ years of experience, from data modeling and APIs to real-time
              features, AI integrations and responsive UI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-4 sm:gap-x-4">
              <a href="#work" className="rounded-full bg-brass px-5 py-3.5 text-[0.95rem] font-semibold sm:px-7 sm:text-base text-slate hover:bg-white">
                See my work
              </a>
              <a
                href={profile.resume}
                download
                className="rounded-full border border-mist/50 px-5 py-3.5 text-[0.95rem] font-semibold sm:px-7 sm:text-base hover:border-white"
              >
                Download resume
              </a>
              <a href="#videos" className="textlink py-2 font-medium sm:px-2">
                Watch my videos
              </a>
            </div>
            <div className="mt-9 border-t border-mist/25 pt-5">
              <p className="text-mist">Tech stack</p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-[1.05rem] font-medium">
                {profile.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="self-end md:col-span-5">
            <Image
              src="/kamal.jpg"
              alt="Pershant Parkash in a dark double-breasted suit"
              width={641}
              height={842}
              preload
              sizes="(min-width: 768px) 460px, 80vw"
              className="mx-auto h-auto w-full max-w-[27rem] rounded-t-lg md:mr-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className={wrap}>
        <h2 className={h2}>Work</h2>
        <div className="mt-14 space-y-20 md:space-y-28">
          {projects.map((p) => (
            <article key={p.name} className="grid gap-8 md:grid-cols-12 md:gap-x-12">
              {p.image && (
                <div className="md:col-span-7">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={1440}
                    height={900}
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="h-auto w-full rounded-lg border border-line"
                  />
                </div>
              )}
              <div
                className={
                  p.image
                    ? "md:col-span-5"
                    : "border-t border-line pt-10 md:col-span-12 md:grid md:grid-cols-12 md:gap-x-12"
                }
              >
                <div className={p.image ? "" : "md:col-span-5"}>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-[1.75rem]">{p.name}</h3>
                  <p className="mt-1 text-soft">
                    {p.kind}, {p.year}
                  </p>
                </div>
                <div className={p.image ? "mt-5" : "mt-5 md:col-span-7 md:mt-0"}>
                  <p className="max-w-[62ch] leading-relaxed">{p.description}</p>
                  {p.built.length > 0 && (
                    <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-soft">
                      {p.built.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-5 text-sm leading-relaxed text-soft">{p.stack.join(", ")}</p>
                  {(p.link || p.reels) && (
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 font-semibold">
                      {p.link && (
                        <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="textlink py-2">
                          {p.link.label}
                        </a>
                      )}
                      {p.reels?.map((r) => (
                        <a key={r.code} href={`#reel-${r.code}`} className="textlink py-2">
                          {r.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section id="videos" className="bg-slate py-24 text-white md:py-32">
      <div className={wrap}>
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <h2 className={h2}>Videos</h2>
            <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-mist">
              On Instagram I share AI tools I use, stories from being a developer, and projects as they get built.
            </p>
          </div>
          <a
            href={profile.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-mist/50 px-6 py-3 font-medium hover:border-white"
          >
            Follow @{profile.instagram.handle}
          </a>
        </div>
        <div className="mt-12">
          <Reels reels={reels} />
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className={wrap}>
        <h2 className={h2}>Experience and education</h2>
        <ol className="mt-14">
          {history.map((h) => (
            <li key={h.title} className="grid gap-x-12 gap-y-4 border-t border-line py-9 md:grid-cols-12">
              <p className="text-soft tabular-nums md:col-span-3">{h.period}</p>
              <div className="md:col-span-9">
                <h3 className="text-xl font-semibold tracking-tight">{h.title}</h3>
                <p className="mt-0.5 text-soft">{h.place}</p>
                <ul className="mt-4 max-w-[72ch] space-y-2 leading-relaxed">
                  {h.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section id="skills" className="bg-sheet py-24 md:py-32">
      <div className={`${wrap} grid gap-20 md:grid-cols-2 md:gap-16`}>
        <div>
          <h2 className={h2}>What I work with</h2>
          <dl className="mt-10 space-y-6">
            {skills.map((s) => (
              <div key={s.area} className="grid gap-x-6 sm:grid-cols-[7.5rem_1fr]">
                <dt className="font-semibold">{s.area}</dt>
                <dd className="leading-relaxed text-soft">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className={h2}>How I work</h2>
          <ol className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2rem_1fr]">
                <span className="font-semibold text-soft tabular-nums" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="max-w-[52ch] leading-relaxed text-soft">
                  <strong className="font-semibold text-ink">{s.title}.</strong> {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Open to", value: profile.openTo },
  { label: "Main stack", value: profile.stack.join(", ") },
];

const footerLinks = [
  { title: "On this page", links: nav.filter((n) => n.href !== "#contact") },
  {
    title: "Projects",
    links: projects.map((p) => ({ href: p.link?.href ?? "#work", label: p.name })),
  },
  {
    title: "Latest videos",
    links: reels.slice(0, 3).map((r) => ({ href: `#reel-${r.code}`, label: r.title })),
  },
  {
    title: "Find me",
    links: [
      { href: profile.linkedin, label: "LinkedIn" },
      { href: profile.instagram.url, label: "Instagram" },
      { href: profile.github, label: "GitHub" },
      { href: `mailto:${profile.email}`, label: "Email" },
    ],
  },
];

function Contact() {
  return (
    <footer id="contact" className="bg-slate text-white">
      <div className={`${wrap} pt-24 pb-10 md:pt-32`}>
        <div className="grid gap-x-12 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className={h2}>Have a role or a project in mind?</h2>
            <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-mist">
              Tell me what you are building and where I could help.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="textlink mt-10 inline-block text-[clamp(1.15rem,3.4vw,2.25rem)] font-semibold tracking-tight break-all"
            >
              {profile.email}
            </a>
            <div className="mt-9 flex flex-wrap gap-4">
              <CopyEmail email={profile.email} />
              <a
                href={profile.resume}
                download
                className="rounded-full border border-mist/50 px-6 py-3 font-medium hover:border-white"
              >
                Download resume
              </a>
            </div>
          </div>
          <dl className="self-end lg:col-span-5">
            {facts.map((f) => (
              <div
                key={f.label}
                className="grid gap-x-6 gap-y-1 border-t border-mist/25 py-5 last:border-b sm:grid-cols-[8rem_1fr]"
              >
                <dt className="text-mist">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-28 md:grid-cols-4">
          {footerLinks.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="font-semibold">{group.title}</p>
              <ul className="mt-3">
                {group.links.map((l) => {
                  const external = l.href.startsWith("http");
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="inline-block py-1.5 leading-snug text-mist hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-mist/25 pt-6 text-sm text-mist">
          <p>© 2026 {profile.name}</p>
          <a href="#" className="py-2 hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Full-Stack Developer",
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  sameAs: [profile.linkedin, profile.instagram.url, profile.github],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <main>
        <Work />
        <Videos />
        <Experience />
        <Practice />
      </main>
      <Contact />
    </>
  );
}
