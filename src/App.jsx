import { useMemo, useState } from "react";
import {
  ArrowRight,
  Braces,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileCode2,
  GitBranch,
  Layers3,
  Mail,
  Menu,
  Rocket,
  ServerCog,
  Sparkles,
  X,
} from "lucide-react";
import profileImage from "./assets/profile.jpg";
import mealAppImage from "./assets/mealapp.jpg";
import chatifyImage from "./assets/chatify.jpg";
import portfolioImage from "./assets/old-portfolio.jpg";

const contact = {
  email: "musa.vakilov@yahoo.com",
  github: "https://github.com/Musa1981",
  linkedin: "https://www.linkedin.com/in/musa-vakilov-47b1392a0/",
};

const projects = [
  {
    title: "MealApp",
    type: "React app",
    image: mealAppImage,
    url: "https://mealappreact1.netlify.app/",
    sv: "En responsiv React-applikation för måltider och recept, byggd med fokus på tydlig navigation och en enkel användarupplevelse.",
    en: "A responsive React application for meals and recipes, built with clear navigation and a simple user experience in focus.",
  },
  {
    title: "Chatify",
    type: "Chat app",
    image: chatifyImage,
    url: "https://musa-chatify-app.netlify.app/",
    sv: "En chattapplikation med modern gränssnittsdesign, tydliga flöden och en visuell stil som känns snabb och social.",
    en: "A chat application with a modern interface, clear flows, and a visual style that feels fast and social.",
  },
  {
    title: "Old Portfolio",
    type: "Portfolio",
    image: portfolioImage,
    url: "https://oldportfolio111.netlify.app/",
    sv: "Min tidigare portfolio, nu använd som bas för innehåll, kontaktuppgifter och projektmaterial i den nya versionen.",
    en: "My previous portfolio, now used as a base for content, contact details, and project material in this new version.",
  },
];

const stackPillars = [
  { icon: Code2, title: "Frontend", items: ["React", "Angular", "Tailwind", "JavaScript"] },
  { icon: ServerCog, title: "Backend", items: [".NET", "Node.js", "REST APIs", "Auth"] },
  { icon: Database, title: "Data", items: ["MySQL", "Redis", "RabbitMQ", "Contracts"] },
  { icon: Braces, title: "Workflow", items: ["Clean code", "Responsive UI", "Git", "Deploy"] },
];

const skillLogos = [
  { name: "React", color: "#61dafb" },
  { name: "Angular", color: "#dd0031" },
  { name: "HTML", color: "#e44d26" },
  { name: "CSS", color: "#1572b6" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Node.js", color: "#5fa04e" },
  { name: ".NET", color: "#6d4aff" },
  { name: "MySQL", color: "#00758f" },
  { name: "RabbitMQ", color: "#ff6600" },
  { name: "Redis", color: "#dc382d" },
];

const techIcons = {
  React: Sparkles,
  Angular: Code2,
  JavaScript: FileCode2,
  "Node.js": ServerCog,
  ".NET": Braces,
  MySQL: Database,
  RabbitMQ: ServerCog,
  Redis: Database,
  Tailwind: Sparkles,
  "REST APIs": ServerCog,
  Auth: Braces,
  Contracts: FileCode2,
  "Clean code": Code2,
  "Responsive UI": Sparkles,
  Git: GitBranch,
  Deploy: Rocket,
};

function GitHubMark({ size = 23 }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.85 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInMark({ size = 23 }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M5.34 8.72H2.67v12.02h2.67V8.72ZM4.02 3.26a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1Zm6.06 5.46H7.52v12.02h2.56v-6.32c0-1.66.78-2.65 2.13-2.65 1.24 0 1.84.88 1.84 2.65v6.32h2.67v-7.2c0-3.2-1.7-5.03-4.15-5.03-1.42 0-2.27.78-2.49 1.33V8.72Z" />
      <path d="M19.5 3.25h-15A1.25 1.25 0 0 0 3.25 4.5v15c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25v-15c0-.69-.56-1.25-1.25-1.25Zm-.25 16h-14.5V4.75h14.5v14.5Z" />
    </svg>
  );
}

function SkillLogo({ name, color }) {
  if (name === "React") {
    return (
      <svg className="h-16 w-16 sm:h-20 sm:w-20" viewBox="-11.5 -10.23 23 20.46">
        <circle cx="0" cy="0" fill={color} r="2.05" />
        <g fill="none" stroke={color} strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (name === "Angular") {
    return (
      <svg className="h-16 w-16 sm:h-20 sm:w-20" viewBox="0 0 64 64">
        <path d="M32 4 7 13l4 34 21 13 21-13 4-34Z" fill={color} />
        <path d="M32 10v44l17-10 3-27Z" fill="#c3002f" opacity=".55" />
        <path d="m32 13-16 36h7l3-8h12l3 8h7Zm-4 22 4-10 4 10Z" fill="#fff" />
      </svg>
    );
  }

  if (name === "HTML" || name === "CSS") {
    const isHtml = name === "HTML";
    return (
      <svg className="h-16 w-16 sm:h-20 sm:w-20" viewBox="0 0 64 64">
        <path d="M11 4h42l-4 48-17 8-17-8Z" fill={color} />
        <path d="M32 8h17l-3 41-14 7Z" fill={isHtml ? "#f16529" : "#33a9dc"} />
        <text
          fill="#111827"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="26"
          fontWeight="900"
          textAnchor="middle"
          x="32"
          y="39"
        >
          {isHtml ? "5" : "3"}
        </text>
      </svg>
    );
  }

  if (name === "JavaScript") {
    return (
      <svg className="h-16 w-16 sm:h-20 sm:w-20" viewBox="0 0 64 64">
        <rect fill={color} height="56" rx="2" width="56" x="4" y="4" />
        <text
          fill="#111827"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="29"
          fontWeight="900"
          textAnchor="middle"
          x="34"
          y="45"
        >
          JS
        </text>
      </svg>
    );
  }

  if (name === "Node.js") {
    return (
      <svg className="h-16 w-16 sm:h-20 sm:w-20" viewBox="0 0 64 64">
        <path d="M32 4 55 17v30L32 60 9 47V17Z" fill="none" stroke={color} strokeWidth="4" />
        <text
          fill={color}
          fontFamily="Inter, Arial, sans-serif"
          fontSize="24"
          fontWeight="900"
          textAnchor="middle"
          x="32"
          y="41"
        >
          JS
        </text>
      </svg>
    );
  }

  if (name === ".NET") {
    return (
      <div className="grid h-12 w-16 place-items-center text-3xl font-black sm:h-20 sm:w-24 sm:text-4xl" style={{ color }}>
        .NET
      </div>
    );
  }

  if (name === "MySQL") {
    return (
      <div className="grid h-12 w-16 place-items-center sm:h-20 sm:w-24">
        <span className="text-xl font-black sm:text-3xl" style={{ color }}>
          MySQL
        </span>
      </div>
    );
  }

  if (name === "RabbitMQ") {
    return (
      <svg className="h-16 w-16 sm:h-20 sm:w-20" viewBox="0 0 64 64">
        <rect fill={color} height="52" rx="5" width="52" x="6" y="6" />
        <rect fill="#222" height="14" rx="2" width="14" x="34" y="34" />
        <rect fill="#222" height="24" rx="3" width="9" x="18" y="14" />
        <rect fill="#222" height="24" rx="3" width="9" x="32" y="14" />
      </svg>
    );
  }

  return (
    <svg className="h-16 w-16 sm:h-20 sm:w-20" viewBox="0 0 64 64">
      <path
        d="M14 18c0-7 36-7 36 0v28c0 7-36 7-36 0Z"
        fill={color}
      />
      <path d="M14 18c0 7 36 7 36 0M14 32c0 7 36 7 36 0M14 46c0 7 36 7 36 0" fill="none" stroke="#111827" strokeOpacity=".35" strokeWidth="3" />
      <path d="m44 13-9 11h8l-12 16 4-13h-8l7-14Z" fill="#fff" opacity=".9" />
    </svg>
  );
}

const copy = {
  sv: {
    nav: ["Home", "Om mig", "Projekt", "Kontakt"],
    badge: "Full Stack Developer / React, Angular och .NET",
    heroTitle: "Hej, jag är Musa Vakilov.",
    roleIntro: "Och jag är",
    role: "Full Stack Developer",
    heroText:
      "Jag bygger användarvänliga webbapplikationer från gränssnitt till backend. Med React, Angular, Tailwind och .NET skapar jag lösningar som är responsiva, strukturerade och redo att vidareutvecklas.",
    heroCta: "Se projekt",
    contactCta: "Kontakta mig",
    cvCta: "Ladda ner CV",
    stats: [
      ["React", "Frontend"],
      ["Angular", "UI"],
      [".NET", "Backend"],
    ],
    aboutTitle: "Om mig",
    aboutKicker: "Frontend + .NET backend",
    aboutText:
      "Jag utvecklar moderna webbapplikationer med fokus på tydliga användarflöden, ren kod och stabil backend. Jag levererar frontend med React, Angular, HTML, CSS och JavaScript, och bygger backend-lösningar med .NET, Node.js, MySQL, RabbitMQ och Redis.",
    aboutSecond:
      "Under min LIA utvecklade jag en avancerad AI-chatbot som effektiviserar kundservice genom att hantera kontrakt, svara på frågor och föreslå nästa steg.",
    expertiseTitle: "Det jag kan bygga",
    expertiseText:
      "Jag tar idéer från design och struktur till fungerande gränssnitt, API:er, databaser och backend-flöden.",
    strengths: ["React", "Angular", "JavaScript", "Node.js", ".NET", "MySQL", "RabbitMQ", "Redis"],
    projectsTitle: "Projekt",
    projectsKicker: "Riktiga projekt från min tidigare portfolio",
    visit: "Besök",
    contactTitle: "Kontakt",
    contactKicker: "Låt oss prata",
    contactText:
      "Jag söker möjligheter där jag får bidra med frontend, backend och problemlösning i verkliga projekt.",
    name: "Namn",
    message: "Meddelande",
    send: "Skicka meddelande",
    footer: "All rights reserved Musa Vakilov 2026",
  },
  en: {
    nav: ["Home", "About", "Projects", "Contact"],
    badge: "Full Stack Developer / React, Angular and .NET",
    heroTitle: "Hi, I am Musa Vakilov.",
    roleIntro: "And I'm a",
    role: "Full Stack Developer",
    heroText:
      "I build user-friendly web applications from interface to backend. With React, Angular, Tailwind, and .NET, I deliver responsive, structured solutions that are ready to grow.",
    heroCta: "View projects",
    contactCta: "Contact me",
    cvCta: "Download CV",
    stats: [
      ["React", "Frontend"],
      ["Angular", "UI"],
      [".NET", "Backend"],
    ],
    aboutTitle: "About",
    aboutKicker: "Frontend + .NET backend",
    aboutText:
      "I develop modern web applications with a focus on clear user flows, clean code, and reliable backend systems. I deliver frontend with React, Angular, HTML, CSS, and JavaScript, and build backend solutions with .NET, Node.js, MySQL, RabbitMQ, and Redis.",
    aboutSecond:
      "During my internship, I developed an advanced AI chatbot that improves customer service by handling contracts, answering questions, and suggesting next actions.",
    expertiseTitle: "What I can build",
    expertiseText:
      "I turn ideas into working interfaces, APIs, databases, and backend flows.",
    strengths: ["React", "Angular", "JavaScript", "Node.js", ".NET", "MySQL", "RabbitMQ", "Redis"],
    projectsTitle: "Projects",
    projectsKicker: "Real projects from my previous portfolio",
    visit: "Visit",
    contactTitle: "Contact",
    contactKicker: "Let's talk",
    contactText:
      "I am looking for opportunities where I can contribute with frontend, backend, and practical problem-solving in real projects.",
    name: "Name",
    message: "Message",
    send: "Send message",
    footer: "All rights reserved Musa Vakilov 2026",
  },
};

const sectionIds = ["home", "about", "project", "contact"];

const languageMeta = {
  sv: { code: "SV", flag: "./flag-sv.svg", label: "Svenska" },
  en: { code: "EN", flag: "./flag-en.svg", label: "English" },
};

function App() {
  const [lang, setLang] = useState("sv");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  const navItems = useMemo(
    () => t.nav.map((label, index) => ({ label, id: sectionIds[index] })),
    [t.nav],
  );

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(17,24,39,.075)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,.075)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="fixed inset-0 -z-10 opacity-75 [background:linear-gradient(115deg,#f7f4ed_0%,#f0fbf7_34%,#fff2e3_68%,#eef3ff_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 [background:repeating-linear-gradient(115deg,transparent_0px,transparent_42px,rgba(37,99,235,.12)_43px,transparent_44px)]" />
      <Header
        lang={lang}
        navItems={navItems}
        menuOpen={menuOpen}
        setLang={setLang}
        setMenuOpen={setMenuOpen}
        jumpTo={jumpTo}
      />
      <main>
        <Hero t={t} jumpTo={jumpTo} />
        <About t={t} />
        <Projects t={t} lang={lang} />
        <Contact t={t} />
      </main>
      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer}</p>
        <div className="h-px flex-1 bg-ink/10 sm:mx-8" />
      </footer>
    </div>
  );
}

function Header({ lang, navItems, menuOpen, setLang, setMenuOpen, jumpTo }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-paper/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:px-5">
        <button
          className="group flex min-w-0 items-center gap-2 font-display text-sm font-black tracking-[0.1em] sm:gap-3 sm:text-base sm:tracking-[0.16em]"
          onClick={() => jumpTo("home")}
          type="button"
        >
          <span className="grid h-9 w-9 place-items-center rounded bg-ink text-paper shadow-lift transition-transform group-hover:rotate-6">
            M
          </span>
          <span className="truncate">MUSA</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              className="rounded px-4 py-2 text-sm font-semibold text-ink/70 transition hover:bg-ink hover:text-paper"
              key={item.id}
              onClick={() => jumpTo(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label={`Change language to ${lang === "sv" ? "English" : "Svenska"}`}
            className="group flex h-10 items-center gap-1 rounded border border-ink/15 bg-white/55 px-2 text-xs font-bold shadow-line transition hover:bg-ink hover:text-paper sm:gap-2 sm:px-3 sm:text-sm"
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            type="button"
            title={`Current language: ${languageMeta[lang].label}`}
          >
            <img
              alt=""
              aria-hidden="true"
              className="h-4 w-6 rounded-sm object-cover shadow-line"
              src={languageMeta[lang].flag}
            />
            <span>{languageMeta[lang].code}</span>
            <span className="text-ink/30 transition group-hover:text-paper/40">/</span>
            <img
              alt=""
              aria-hidden="true"
              className="h-4 w-6 rounded-sm object-cover shadow-line"
              src={languageMeta[lang === "sv" ? "en" : "sv"].flag}
            />
          </button>
          <button
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded border border-ink/15 bg-white/55 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-ink/10 bg-paper/95 px-5 py-4 backdrop-blur md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <button
                className="rounded bg-white/60 px-4 py-3 text-left font-bold shadow-line"
                key={item.id}
                onClick={() => jumpTo(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero({ t, jumpTo }) {
  return (
    <section
      className="relative flex min-h-screen items-start px-3 pb-14 pt-20 sm:px-5 sm:pb-16 sm:pt-28 lg:items-center"
      id="home"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
        <div className="min-w-0 max-w-full lg:max-w-4xl">
          <div className="mb-6 flex w-full max-w-full animate-reveal items-start gap-2 rounded border border-ink/15 bg-white/60 px-3 py-2 text-xs font-bold leading-snug shadow-line backdrop-blur sm:mb-7 sm:inline-flex sm:w-auto sm:items-center sm:text-sm">
            <Sparkles size={17} className="shrink-0 text-ember" />
            <span className="min-w-0 break-words">{t.badge}</span>
          </div>
          <h1 className="max-w-full animate-reveal break-words font-display text-[clamp(1.8rem,8.6vw,5.6rem)] font-black leading-[1.08] text-ink [animation-delay:120ms] sm:leading-[0.95]">
            {t.heroTitle}
          </h1>
          <div className="mt-5 flex max-w-full animate-reveal flex-col items-start gap-2 font-display [animation-delay:180ms] sm:flex-row sm:flex-wrap sm:items-end sm:gap-x-3 sm:gap-y-1">
            <span className="text-xl font-black text-ink/70 sm:text-4xl">{t.roleIntro}</span>
            <span className="relative max-w-full break-words text-[clamp(1.75rem,8vw,3rem)] font-black leading-tight text-cobalt sm:text-5xl">
              {t.role}
              <span className="absolute -bottom-2 left-0 h-1 w-full origin-left animate-pulseLine rounded bg-gradient-to-r from-ember via-mint to-cobalt" />
            </span>
          </div>
          <p className="mt-6 max-w-2xl animate-reveal break-words text-base leading-7 text-ink/70 [animation-delay:240ms] sm:mt-7 sm:text-lg sm:leading-8">
            {t.heroText}
          </p>
          <div className="mt-7 grid animate-reveal grid-cols-2 gap-3 [animation-delay:300ms] sm:grid-cols-4">
            {["React", "Angular", ".NET", "MySQL"].map((item) => {
              const Icon = techIcons[item];
              return (
              <span
                className="relative inline-flex min-w-0 items-center justify-center gap-2 overflow-hidden rounded border border-ink/10 bg-white/55 px-2 py-3 text-center text-sm font-black shadow-line sm:px-3"
                key={item}
              >
                <span className="absolute inset-y-0 left-0 w-10 animate-sweep bg-white/45" />
                <Icon className="relative text-cobalt" size={17} />
                <span className="relative">{item}</span>
              </span>
              );
            })}
          </div>
          <div className="mt-9 flex animate-reveal flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <button
              className="group inline-flex w-full items-center justify-center gap-3 rounded bg-ink px-5 py-4 font-bold text-paper shadow-lift transition hover:-translate-y-1 sm:w-auto sm:px-6"
              onClick={() => jumpTo("project")}
              type="button"
            >
              {t.heroCta}
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </button>
            <button
              className="inline-flex w-full items-center justify-center gap-3 rounded border border-ink/15 bg-white/60 px-5 py-4 font-bold shadow-line transition hover:-translate-y-1 hover:bg-white sm:w-auto sm:px-6"
              onClick={() => jumpTo("contact")}
              type="button"
            >
              <Mail size={18} />
              {t.contactCta}
            </button>
            <a
              className="inline-flex w-full items-center justify-center gap-3 rounded border border-ink/15 bg-white/60 px-5 py-4 font-bold shadow-line transition hover:-translate-y-1 hover:bg-white sm:w-auto sm:px-6"
              href="./CV MUSA.pdf"
            >
              <Download size={18} />
              {t.cvCta}
            </a>
          </div>
        </div>

        <HeroVisual stats={t.stats} />
      </div>
    </section>
  );
}

function HeroVisual({ stats }) {
  return (
    <div className="relative mx-auto mt-2 grid w-full max-w-[270px] place-items-center sm:mt-0 sm:max-w-[540px] sm:animate-drift">
      <div className="absolute inset-8 hidden rotate-3 rounded border border-ink/15 bg-white/35 shadow-lift backdrop-blur-xl sm:block" />
      <div className="absolute inset-16 hidden -rotate-6 rounded border border-ink/15 bg-mint/15 shadow-line sm:block" />
      <div className="relative w-full overflow-hidden rounded bg-ink p-3 text-paper shadow-lift sm:p-5">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-ember via-mint to-cobalt" />
        <img
          alt="Musa Vakilov"
          className="aspect-[4/5] w-full rounded object-cover object-center"
          src={profileImage}
        />
        <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">
          <div className="min-w-0">
            <p className="text-sm font-bold text-paper/55">Musa Vakilov</p>
            <p className="break-words text-lg font-black leading-tight sm:text-2xl">Full Stack Developer</p>
          </div>
          <Code2 size={22} className="shrink-0 text-mint" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
          {stats.map(([value, label]) => (
            <div className="min-w-0 rounded border border-white/10 bg-white/10 p-2 sm:p-3" key={label}>
              <p className="truncate text-sm font-black sm:text-xl">{value}</p>
              <p className="mt-1 truncate text-[10px] text-paper/60 sm:text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 left-8 right-8 hidden h-1 origin-center animate-pulseLine rounded bg-ink/25 sm:block" />
    </div>
  );
}

function About({ t }) {
  return (
    <Section id="about" kicker={t.aboutKicker} title={t.aboutTitle}>
      <div className="grid w-full gap-8 lg:grid-cols-[.92fr_1.08fr]">
        <div className="w-full min-w-0 rounded border border-ink/12 bg-white/55 p-4 shadow-line backdrop-blur sm:p-6">
          <div className="flex h-14 w-14 items-center justify-center rounded bg-ember text-white">
            <Layers3 size={26} />
          </div>
          <p className="mt-7 text-base font-bold leading-7 text-ink sm:mt-8 sm:text-2xl sm:leading-snug">{t.aboutText}</p>
          <p className="mt-5 text-sm leading-7 text-ink/70 sm:text-base">{t.aboutSecond}</p>
        </div>
        <div className="w-full min-w-0 overflow-hidden rounded border border-ink/12 bg-ink p-3 text-paper shadow-lift sm:p-7">
          <div className="grid w-full grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-5">
            {skillLogos.map((skill) => (
              <div
                className="group grid min-w-0 place-items-center gap-3 overflow-hidden text-center transition duration-300 hover:-translate-y-2"
                key={skill.name}
              >
                <div className="grid h-14 place-items-center transition duration-300 group-hover:scale-110 sm:h-20">
                  <SkillLogo {...skill} />
                </div>
                <p className="break-words text-sm font-bold text-paper sm:text-lg">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 min-w-0 rounded border border-ink/12 bg-ink p-4 text-paper shadow-lift sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="break-words text-sm font-black uppercase tracking-[0.1em] text-mint sm:tracking-[0.16em]">{t.expertiseTitle}</p>
            <p className="mt-3 max-w-2xl break-words text-base font-semibold leading-7 text-paper/70 sm:text-lg">{t.expertiseText}</p>
          </div>
          <div className="h-1 w-32 origin-right animate-pulseLine rounded bg-gradient-to-r from-ember via-mint to-cobalt" />
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stackPillars.map(({ icon: Icon, title, items }, index) => (
            <div
              className="group relative overflow-hidden rounded border border-white/10 bg-white/10 p-4 transition duration-300 hover:-translate-y-2 hover:bg-white/15"
              key={title}
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-ember via-mint to-cobalt transition duration-500 group-hover:scale-x-100" />
              <div className="flex items-center justify-between">
                <Icon className="text-mint transition group-hover:scale-110" size={23} />
                <span className="text-xs font-black text-paper/35">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => {
                  const ItemIcon = techIcons[item] ?? Code2;
                  return (
                  <span className="inline-flex min-w-0 items-center gap-1 rounded bg-paper/10 px-2 py-1 text-xs font-bold text-paper/75" key={item}>
                    <ItemIcon size={13} />
                    {item}
                  </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Projects({ t, lang }) {
  return (
    <Section id="project" kicker={t.projectsKicker} title={t.projectsTitle}>
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            className="group overflow-hidden rounded border border-ink/12 bg-white/70 shadow-line transition duration-300 hover:-translate-y-2 hover:shadow-lift"
            key={project.title}
          >
            <div className="relative overflow-hidden bg-ink/5">
              <img
                alt={project.title}
                className="aspect-[16/11] w-full object-contain p-2 transition duration-500 group-hover:scale-[1.03] sm:p-3"
                src={project.image}
              />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ember via-mint to-cobalt" />
            </div>
            <div className="min-w-0 p-5 sm:p-6">
              <div className="mb-8 flex min-w-0 items-center justify-between gap-3">
                <span className="min-w-0 rounded border border-ink/10 bg-paper px-3 py-1 text-xs font-black uppercase text-ink/60">
                  {project.type}
                </span>
                <p className="text-sm font-black text-cobalt">0{index + 1}</p>
              </div>
              <h3 className="break-words text-2xl font-black sm:text-3xl">{project.title}</h3>
              <p className="mt-5 min-h-0 break-words leading-7 text-ink/68 sm:min-h-28">{project[lang]}</p>
              <a
                className="mt-6 inline-flex items-center gap-2 rounded bg-ink px-4 py-3 font-black text-paper transition hover:-translate-y-1 hover:bg-cobalt"
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                {t.visit}
                <ExternalLink size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 overflow-hidden border-y border-ink/10 py-5">
        <div className="flex w-max animate-marquee gap-7 text-base font-black uppercase tracking-[0.12em] text-ink/35 sm:gap-10 sm:text-xl sm:tracking-[0.18em]">
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <div className="flex gap-10" key={groupIndex}>
              <span>React</span>
              <span>Angular</span>
              <span>Node.js</span>
              <span>.NET</span>
              <span>RabbitMQ</span>
              <span>Redis</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact({ t }) {
  const handleEmailSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent("Portfolio message");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    window.open(
      `https://outlook.live.com/mail/0/deeplink/compose?to=${contact.email}&subject=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Section id="contact" kicker={t.contactKicker} title={t.contactTitle}>
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="min-w-0 rounded bg-ink p-4 text-paper shadow-lift sm:p-8">
          <Mail size={34} className="text-mint" />
          <p className="mt-7 break-words text-lg font-black leading-tight sm:mt-10 sm:text-3xl">{t.contactText}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              className="inline-flex max-w-full items-center gap-2 break-all rounded bg-paper px-3 py-4 text-xs font-black text-ink transition hover:-translate-y-1 sm:gap-3 sm:px-5 sm:text-base"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
              <ArrowRight size={18} />
            </a>
            <a
              aria-label="GitHub"
              className="grid h-14 w-14 place-items-center rounded border border-white/15 text-sm font-black text-paper transition hover:-translate-y-1 hover:bg-white hover:text-ink"
              href={contact.github}
              rel="noreferrer"
              target="_blank"
            >
              <GitHubMark size={23} />
            </a>
            <a
              aria-label="LinkedIn"
              className="grid h-14 w-14 place-items-center rounded border border-white/15 text-sm font-black text-paper transition hover:-translate-y-1 hover:bg-white hover:text-ink"
              href={contact.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInMark size={23} />
            </a>
          </div>
        </div>
        <form
          className="min-w-0 rounded border border-ink/12 bg-white/60 p-4 shadow-line backdrop-blur sm:p-6"
          onSubmit={handleEmailSubmit}
        >
          <label className="grid gap-2 text-sm font-black text-ink/60">
            {t.name}
            <input
              className="min-w-0 rounded border border-ink/15 bg-paper px-4 py-4 text-base font-semibold text-ink outline-none transition focus:border-cobalt focus:bg-white"
              name="name"
              placeholder="Musa Vakilov"
              type="text"
            />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-black text-ink/60">
            Email
            <input
              className="min-w-0 rounded border border-ink/15 bg-paper px-4 py-4 text-base font-semibold text-ink outline-none transition focus:border-cobalt focus:bg-white"
              name="email"
              placeholder={contact.email}
              type="email"
            />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-black text-ink/60">
            {t.message}
            <textarea
              className="min-h-36 min-w-0 resize-none rounded border border-ink/15 bg-paper px-4 py-4 text-base font-semibold text-ink outline-none transition focus:border-cobalt focus:bg-white"
              name="message"
              placeholder="..."
            />
          </label>
          <button
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded bg-cobalt px-5 py-4 font-black text-white shadow-lift transition hover:-translate-y-1 hover:bg-ink"
            type="submit"
          >
            {t.send}
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Section({ id, kicker, title, children }) {
  return (
    <section className="px-3 py-16 sm:px-5 sm:py-28" id={id}>
      <div className="mx-auto min-w-0 max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.1em] text-cobalt sm:text-sm sm:tracking-[0.22em]">
              {kicker}
            </p>
            <h2 className="mt-3 break-words font-display text-3xl font-black sm:text-7xl">{title}</h2>
          </div>
          <div className="hidden h-1 w-40 origin-right animate-pulseLine rounded bg-ink/30 sm:block" />
        </div>
        {children}
      </div>
    </section>
  );
}

export default App;
