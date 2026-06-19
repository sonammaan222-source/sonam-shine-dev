import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Code2,
  Trophy,
  Hash,
  ExternalLink,
  MapPin,
  GraduationCap,
  BookOpen,
  Sparkles,
  Shield,
  BarChart3,
  Brain,
  Database,
  Server,
  Layout,
  Award,
  Users,
  FileText,
  Mail,
  Send,
  Github as GithubIcon,
  Briefcase,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonam Maan — Aspiring Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sonam Maan — B.Tech Computer Science & IT student from Pune. Building scalable web applications.",
      },
      { property: "og:title", content: "Sonam Maan — Aspiring Software Developer" },
      {
        property: "og:description",
        content: "B.Tech CS & AI student. Web developer. Problem solver. Open to internships and collaborations.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const TYPING_PHRASES = [
  "Aspiring Software Developer.",
  "Web Developer.",
  "Computer Science Student.",
  "Problem Solver.",
];

function useTyping(phrases: string[], speed = 70, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const delay = done ? pause : cleared ? 300 : deleting ? speed / 2 : speed;

    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (cleared) {
        setDeleting(false);
        setI((p) => p + 1);
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases, speed, pause]);

  return text;
}

function Portfolio() {
  return (
    <div id="home" className="min-h-screen text-foreground">
      <Toaster theme="dark" position="bottom-right" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5">
        <div className="glass rounded-2xl flex items-center justify-between px-5 py-3">
          <a href="#home" className="font-display font-bold tracking-tight text-lg">
            SONAM<span className="text-accent">/</span>M.
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV.slice(0, 7).map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
                {n.label}<span className="text-primary">.</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm rounded-full bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition"
            >
              Let's talk <ArrowRight className="size-4" />
            </a>
            <button
              aria-label="Menu"
              className="lg:hidden p-2 rounded-md glass"
              onClick={() => setOpen((o) => !o)}
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-foreground" />
                <span className="block h-0.5 w-5 bg-foreground" />
              </div>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 grid grid-cols-2 gap-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const typed = useTyping(TYPING_PHRASES);
  return (
    <section className="relative pt-36 lg:pt-40 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr_1fr] gap-10 items-center">
        {/* left meta */}
        <div className="order-2 lg:order-1 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Available for internships
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-accent" /> Pune, Maharashtra
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
            B.Tech student exploring Computer Science & AI — building thoughtful, scalable web
            applications one commit at a time.
          </p>
        </div>

        {/* center profile */}
        <div className="order-1 lg:order-2 relative flex justify-center">
          <FloatingBadge className="absolute -top-2 left-2 lg:left-0 bg-primary text-primary-foreground" delay={0.3}>
            Developer
          </FloatingBadge>
          <FloatingBadge
            className="absolute bottom-6 -right-2 lg:right-0 bg-accent text-accent-foreground"
            delay={0.6}
          >
            CS & AI<br />Student
          </FloatingBadge>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 blur-3xl opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative size-[280px] sm:size-[340px] lg:size-[380px] rounded-full overflow-hidden border-4 border-white/10 glow-primary">
              <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display font-bold text-white text-[140px] sm:text-[180px] lg:text-[200px] leading-none drop-shadow-2xl">
                  SM
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* right intro */}
        <div className="order-3 space-y-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">/ This is me</div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
            Building scalable web applications and continuously learning modern technologies.
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm <span className="text-foreground font-medium">Sonam Maan</span> — a second-year
            B.Tech student in Computer Science & AI, focused on shipping real things and
            sharpening my craft as a developer.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition glow-primary"
            >
              View Projects <ArrowRight className="size-4" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <SocialIcon href="https://github.com/sonammaan222-source" label="GitHub">
              <Github className="size-4" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/sonam-maan-860409332/" label="LinkedIn">
              <Linkedin className="size-4" />
            </SocialIcon>
            <SocialIcon href="https://leetcode.com/u/SonamMaan222/" label="LeetCode">
              <Code2 className="size-4" />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* large name strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-10 lg:mt-4">
        <div className="grid lg:grid-cols-[1.1fr_1fr] items-end gap-6">
          <h2 className="font-display font-bold tracking-tight leading-[0.9] text-[18vw] lg:text-[10rem] xl:text-[12rem]">
            Sonam<br />Maan<ArrowRight className="inline size-[0.7em] -mt-[0.15em] ml-2 text-accent" />
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-3 pb-4">
            <div className="text-sm text-muted-foreground">
              <span className="text-accent">/</span> Currently
            </div>
            <div className="font-display text-xl sm:text-2xl text-foreground min-h-[2em]">
              {typed}
              <span className="inline-block w-[2px] h-6 sm:h-7 bg-primary align-middle ml-1 animate-pulse" />
            </div>
            <a
              href="#about"
              className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition mt-6"
            >
              scroll for more <ArrowDown className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay, duration: 0.6 },
        scale: { delay, duration: 0.6 },
        y: { delay: delay + 0.8, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`z-10 size-24 sm:size-28 rounded-full grid place-items-center text-center font-display font-semibold text-sm shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="size-10 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
    >
      {children}
    </a>
  );
}

/* -------------------- SECTION HELPERS -------------------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
      <span className="text-accent">/</span> {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
      {children}
    </h2>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="relative">
          <div className="script text-5xl sm:text-6xl text-white/5 absolute -top-4 -left-2 select-none">
            About me
          </div>
          <div className="relative grid grid-cols-2 gap-6 pt-12">
            <Stat value="9.1" label="Current CGPA" />
            <Stat value="2nd" label="Year B.Tech" accent />
            <Stat value="CS & AI" label="Specialization" />
            <Stat value="Pune" label="Based in" accent />
          </div>
        </div>

        <div className="space-y-6">
          <SectionLabel>About</SectionLabel>
          <SectionHeading>
            Curious by nature, a builder by habit — learning the craft of software, day by day.
          </SectionHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a second-year B.Tech student pursuing Computer Science and Information
              Technology at <span className="text-foreground">Alta School of Technology, Ajinkya
              D.Y. Patil Institute of Engineering, Pune</span>. My time so far has been split
              between coursework, side projects, and the quiet joy of figuring things out.
            </p>
            <p>
              I'm drawn to problems that scale — how a small piece of code can serve thousands,
              how clean architecture compounds over time, and how good UX hides a lot of careful
              engineering underneath. I'm building toward becoming a thoughtful software engineer:
              someone who ships, learns continuously, and writes code that other people are happy
              to read.
            </p>
            <p>
              Right now I'm focused on strengthening my fundamentals across programming, web
              development, and data — and exploring how AI tools can amplify what I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div
        className={`font-display font-bold text-3xl sm:text-4xl ${
          accent ? "text-accent" : "text-gradient"
        }`}
      >
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

/* -------------------- EDUCATION -------------------- */
function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Education</SectionLabel>
        <SectionHeading>Where I'm learning the fundamentals.</SectionHeading>

        <div className="mt-12 relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border" />
          <TimelineItem
            side="left"
            icon={<GraduationCap className="size-5" />}
            title="B.Tech — Computer Science & Information Technology"
            org="Ajinkya D.Y. Patil Institute of Engineering, Pune"
            meta="In progress · Entering 2nd year"
            tags={["CGPA 9.1", "First Year Completed"]}
          />
          <TimelineItem
            side="right"
            icon={<BookOpen className="size-5" />}
            title="Alta School of Technology"
            org="Affiliated program — CS & IT track"
            meta="Coursework, fundamentals & projects"
            tags={["DSA", "DBMS", "IT Foundations"]}
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  side,
  icon,
  title,
  org,
  meta,
  tags,
}: {
  side: "left" | "right";
  icon: React.ReactNode;
  title: string;
  org: string;
  meta: string;
  tags: string[];
}) {
  return (
    <div className={`relative grid lg:grid-cols-2 gap-6 mb-10`}>
      <div className={side === "right" ? "lg:order-2" : ""}>
        <div className="relative pl-12 lg:pl-0 lg:pr-12">
          <div
            className={`absolute top-4 left-0 lg:left-auto ${
              side === "left" ? "lg:right-[-22px]" : "lg:left-[-22px] lg:right-auto"
            } size-10 rounded-full grid place-items-center bg-primary text-primary-foreground glow-primary`}
            style={{ left: side === "right" ? "0" : undefined }}
          >
            {icon}
          </div>
          <div className="glass rounded-2xl p-6 hover:border-primary/40 transition">
            <div className="text-xs uppercase tracking-wider text-accent mb-2">{meta}</div>
            <h3 className="font-display font-semibold text-lg leading-snug">{title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{org}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block" />
    </div>
  );
}

/* -------------------- SKILLS -------------------- */
const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: <Code2 className="size-5" />,
    skills: ["C", "Java", "Python"],
  },
  {
    title: "Frontend",
    icon: <Layout className="size-5" />,
    skills: ["HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="size-5" />,
    skills: ["Java"],
  },
  {
    title: "Database",
    icon: <Database className="size-5" />,
    skills: ["MySQL"],
  },
];

const EXPLORING = [
  { label: "Data Science", icon: <BarChart3 className="size-4" /> },
  { label: "Data Analytics", icon: <BarChart3 className="size-4" /> },
  { label: "Cybersecurity", icon: <Shield className="size-4" /> },
  { label: "AI Foundations", icon: <Brain className="size-4" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Skills</SectionLabel>
            <SectionHeading>The tools in my toolbox today.</SectionHeading>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            A snapshot of what I work with day-to-day, plus the areas I'm actively exploring.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.06] hover:border-primary/40 transition group"
            >
              <div className="size-11 rounded-xl grid place-items-center bg-primary/15 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                {g.icon}
              </div>
              <h3 className="font-display font-semibold text-xl">{g.title}.</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            <Sparkles className="size-4 text-accent" /> Currently exploring
          </div>
          <div className="flex flex-wrap gap-3">
            {EXPLORING.map((e) => (
              <div
                key={e.label}
                className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm hover:border-accent/50 transition"
              >
                <span className="text-accent">{e.icon}</span>
                {e.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */
function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-12">
          <div>
            <SectionLabel>Featured Projects</SectionLabel>
            <SectionHeading>Selected work — built end to end.</SectionHeading>
          </div>
          <p className="text-muted-foreground text-sm max-w-md lg:justify-self-end">
            My goal is to build software that people actually find useful. Here's what I've
            been shaping recently.
          </p>
        </div>

        <div className="relative script text-6xl sm:text-8xl text-white/5 select-none -mb-8 pointer-events-none text-center">
          Build & Ship
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* Left content */}
            <div className="p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
                  Live
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Personal Project · 2025
                </span>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl">Access Notes.</h3>
              <p className="text-muted-foreground leading-relaxed">
                A modern note-taking platform designed to help students and professionals organize
                notes efficiently — fast capture, clean structure, and a focus on getting out of
                the user's way.
              </p>

              <div className="grid sm:grid-cols-3 gap-3">
                <MiniBlock label="Problem" value="Scattered notes, no structure" />
                <MiniBlock label="Solution" value="A focused, organized hub" />
                <MiniBlock label="Outcome" value="Live, in active development" />
              </div>

              <div className="flex flex-wrap gap-2">
                {["Web App", "Notes", "Productivity", "Vercel"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://accessnotesapp.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
                >
                  <ExternalLink className="size-4" /> Live Demo
                </a>
                <a
                  href="https://github.com/sonammaan222-source"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
                >
                  <GithubIcon className="size-4" /> View Code
                </a>
              </div>
            </div>

            {/* Right preview */}
            <div className="relative bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-8 sm:p-10 lg:p-12 min-h-[360px] flex items-center">
              <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
              <div className="relative w-full space-y-3">
                <BrowserMock>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-display font-semibold text-foreground">My Notes</div>
                      <div className="text-xs text-muted-foreground">12 notes</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {["Algorithms", "DBMS Lecture 4", "AI Notes", "Project Ideas"].map((n, i) => (
                        <div
                          key={n}
                          className="rounded-lg bg-white/5 border border-white/10 p-3 text-xs"
                        >
                          <div className="text-foreground font-medium">{n}</div>
                          <div className="text-muted-foreground mt-1 text-[10px]">
                            Updated {i + 1}d ago
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </BrowserMock>
                <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
                  <span>accessnotesapp.vercel.app</span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-accent" /> Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Project — Cosmic Glow Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative glass rounded-3xl overflow-hidden mt-10"
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* Left content */}
            <div className="p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
                  Live
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Personal Project · 2026
                </span>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl">Cosmic Glow Insights.</h3>
              <p className="text-muted-foreground leading-relaxed">
                An astrology and numerology themed web experience that generates personalized
                insights from birth details — zodiac readings, life path guidance, relationship
                analysis, and lucky numbers with an immersive, modern UI.
              </p>

              <div className="grid sm:grid-cols-3 gap-3">
                <MiniBlock label="Problem" value="Generic, cluttered horoscope sites" />
                <MiniBlock label="Solution" value="Clean, guided prediction flow" />
                <MiniBlock label="Outcome" value="Live, actively visited" />
              </div>

              <div className="flex flex-wrap gap-2">
                {["Web App", "Astrology", "Numerology", "React"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://cosmic-glow-insights.lovable.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
                >
                  <ExternalLink className="size-4" /> Live Demo
                </a>
                <a
                  href="https://github.com/sonammaan222-source"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
                >
                  <GithubIcon className="size-4" /> View Code
                </a>
              </div>
            </div>

            {/* Right preview */}
            <div className="relative bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 p-8 sm:p-10 lg:p-12 min-h-[360px] flex items-center">
              <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
              <div className="relative w-full space-y-3">
                <BrowserMock>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-display font-semibold text-foreground">Cosmic Readings</div>
                      <div className="text-xs text-muted-foreground">2026</div>
                    </div>
                    <div className="space-y-2">
                      {["Zodiac Reading", "Numerology Insights", "Career Tendencies", "Lucky Numbers & Colors"].map((n, i) => (
                        <div
                          key={n}
                          className="rounded-lg bg-white/5 border border-white/10 p-3 text-xs flex items-center gap-2"
                        >
                          <span className="size-1.5 rounded-full bg-accent shrink-0" />
                          <div className="text-foreground font-medium">{n}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </BrowserMock>
                <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
                  <span>cosmic-glow-insights.lovable.app</span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-accent" /> Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* features grid */}
        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          <FeatureCard
            title="Organized capture"
            text="Quickly jot down ideas and structure them so they don't get lost."
          />
          <FeatureCard
            title="Clean, focused UI"
            text="A distraction-free interface that prioritizes the content over chrome."
          />
          <FeatureCard
            title="Built to scale"
            text="A foundation designed to grow with more features over time."
          />
        </div>
      </div>
    </section>
  );
}

function MiniBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
      <div className="text-[10px] uppercase tracking-wider text-accent">{label}</div>
      <div className="text-sm mt-1">{value}</div>
    </div>
  );
}

function BrowserMock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-surface shadow-2xl">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/10">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-secondary/70" />
        <span className="size-2.5 rounded-full bg-accent/70" />
      </div>
      {children}
    </div>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h4 className="font-display font-semibold text-lg">{title}.</h4>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{text}</p>
    </div>
  );
}

/* -------------------- CERTIFICATIONS -------------------- */
const CERTS = [
  {
    title: "Introduction to Data Science",
    org: "Cisco Networking Academy",
    icon: <BarChart3 className="size-5" />,
  },
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Data Analytics Essentials",
    org: "Cisco Networking Academy",
    icon: <BarChart3 className="size-5" />,
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Certifications</SectionLabel>
        <SectionHeading>Coursework, completed and stamped.</SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 group hover:border-accent/40 transition"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="size-12 rounded-xl grid place-items-center bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                  {c.icon}
                </div>
                <Award className="size-5 text-muted-foreground group-hover:text-secondary transition" />
              </div>
              <h3 className="font-display font-semibold text-lg leading-snug">{c.title}.</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.org}</p>
              <div className="mt-5 flex items-center gap-2 text-xs">
                <span className="size-1.5 rounded-full bg-accent" />
                <span className="text-accent">Completed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- EXPERIENCE -------------------- */
function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <div>
          <SectionLabel>Experience</SectionLabel>
          <SectionHeading>Leadership beyond the keyboard.</SectionHeading>
          <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
            Engineering isn't just code. Coordinating people, planning, and executing under a
            deadline are skills I value just as much.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 size-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="flex items-center gap-4 mb-6 relative">
            <div className="size-12 rounded-xl grid place-items-center bg-secondary text-secondary-foreground">
              <Users className="size-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-accent">College Function</div>
              <h3 className="font-display font-semibold text-2xl">Decoration Team Head.</h3>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed relative">
            Led decoration planning and execution for a college function — coordinated team
            activities, managed responsibilities across members, and made sure the event came
            together on time. A small but real lesson in ownership, collaboration, and shipping
            under constraints.
          </p>
          <div className="flex flex-wrap gap-2 mt-6 relative">
            {["Leadership", "Teamwork", "Coordination", "Execution"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CODING PROFILES -------------------- */
const PROFILES = [
  {
    name: "GitHub",
    handle: "@sonammaan222-source",
    url: "https://github.com/sonammaan222-source",
    icon: <Github className="size-5" />,
    color: "from-white/10 to-white/5",
  },
  {
    name: "LinkedIn",
    handle: "Sonam Maan",
    url: "https://www.linkedin.com/in/sonam-maan-860409332/",
    icon: <Linkedin className="size-5" />,
    color: "from-primary/30 to-primary/5",
  },
  {
    name: "LeetCode",
    handle: "SonamMaan222",
    url: "https://leetcode.com/u/SonamMaan222/",
    icon: <Code2 className="size-5" />,
    color: "from-secondary/30 to-secondary/5",
  },
  {
    name: "Codeforces",
    handle: "SonamMaan222",
    url: "https://codeforces.com/profile/SonamMaan222",
    icon: <Trophy className="size-5" />,
    color: "from-accent/30 to-accent/5",
  },
  {
    name: "HackerRank",
    handle: "sonammaan222",
    url: "https://www.hackerrank.com/profile/sonammaan222",
    icon: <Hash className="size-5" />,
    color: "from-accent/30 to-primary/10",
  },
];

function CodingProfiles() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Coding Profiles</SectionLabel>
        <SectionHeading>Where I practice, learn, and ship.</SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {PROFILES.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative glass rounded-2xl p-6 group overflow-hidden hover:border-primary/40 transition`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition`} />
              <div className="relative flex items-start justify-between">
                <div className="size-12 rounded-xl grid place-items-center bg-white/5 border border-white/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition">
                  {p.icon}
                </div>
                <ArrowRight className="size-5 text-muted-foreground -rotate-45 group-hover:rotate-0 group-hover:text-foreground transition" />
              </div>
              <div className="relative mt-6">
                <div className="font-display font-semibold text-xl">{p.name}.</div>
                <div className="text-sm text-muted-foreground mt-1">{p.handle}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-indigo-600">{icon}</span>
        <h4 className="text-[10px] font-bold text-neutral-900 uppercase tracking-[0.15em]">{title}</h4>
      </div>
      <div className="pl-5 border-l-2 border-neutral-200">
        {children}
      </div>
    </div>
  );
}

function SkillRow({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-[10px] font-semibold text-neutral-900 uppercase tracking-wider min-w-[5.5rem] shrink-0">{label}</span>
      <span className="text-[11px] text-neutral-700">{values.join(", ")}</span>
    </div>
  );
}

/* -------------------- RESUME -------------------- */
function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="glass rounded-3xl p-8 sm:p-12 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative">
            <SectionLabel>Resume</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              Want the full story?<br />
              <span className="text-gradient">Grab my resume.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md">
              A one-page snapshot of my education, skills, projects, and what I'm working on next.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => toast("Resume coming soon — I'll share it as soon as it's ready.")}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition glow-primary"
              >
                <Download className="size-4" /> Download Resume
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <Mail className="size-4" /> Request via email
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              <span className="text-accent">Note:</span> resume upload coming soon.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white/95 text-neutral-900 p-6 shadow-2xl rotate-2 hover:rotate-0 transition-transform overflow-y-auto max-h-[520px]">
              {/* Header */}
              <div className="border-b-2 border-neutral-800 pb-4 mb-5">
                <h3 className="font-display font-bold text-2xl text-neutral-900 tracking-tight">SONAM MAAN</h3>
                <p className="text-sm font-medium text-neutral-700 mt-1">B.Tech CS & IT | Aspiring Software Developer</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] text-neutral-600">
                  <span>Pune, Maharashtra</span>
                  <span>•</span>
                  <a href="https://github.com/sonammaan222-source" className="underline-offset-2 hover:underline">GitHub</a>
                  <span>•</span>
                  <a href="https://www.linkedin.com/in/sonam-maan-860409332/" className="underline-offset-2 hover:underline">LinkedIn</a>
                </div>
              </div>

              {/* Professional Summary */}
              <ResumeSection icon={<Sparkles className="size-3.5" />} title="Professional Summary">
                <p className="text-[11px] leading-relaxed text-neutral-700">
                  Second-year B.Tech student in Computer Science and Information Technology with strong academic performance (CGPA: 9.1). Interested in software development, scalable web applications, and continuous learning across AI, data, and cybersecurity.
                </p>
              </ResumeSection>

              {/* Education */}
              <ResumeSection icon={<GraduationCap className="size-3.5" />} title="Education">
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-semibold text-[12px] text-neutral-900">B.Tech — Computer Science & IT</h4>
                    <span className="text-[10px] text-neutral-500 font-mono shrink-0">2024 — 2028</span>
                  </div>
                  <p className="text-[11px] text-neutral-600">Alta School of Technology, Ajinkya D.Y. Patil Institute of Engineering, Pune</p>
                  <div className="flex gap-3 mt-1">
                    <span className="text-[10px] bg-neutral-100 border border-neutral-200 rounded px-2 py-0.5 font-medium text-neutral-700">CGPA: 9.1</span>
                    <span className="text-[10px] bg-neutral-100 border border-neutral-200 rounded px-2 py-0.5 font-medium text-neutral-700">2nd Year</span>
                  </div>
                </div>
              </ResumeSection>

              {/* Technical Skills */}
              <ResumeSection icon={<Code2 className="size-3.5" />} title="Technical Skills">
                <div className="space-y-2">
                  <SkillRow label="Languages" values={["C", "Java", "Python"]} />
                  <SkillRow label="Frontend" values={["HTML", "CSS"]} />
                  <SkillRow label="Backend" values={["Java"]} />
                  <SkillRow label="Database" values={["MySQL"]} />
                  <div className="pt-1">
                    <p className="text-[10px] font-semibold text-neutral-900 uppercase tracking-wider mb-1.5">Areas of Interest</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Generative AI", "Data Science", "Data Analytics", "Cybersecurity"].map((tag) => (
                        <span key={tag} className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full px-2 py-0.5 font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ResumeSection>

              {/* Projects */}
              <ResumeSection icon={<Briefcase className="size-3.5" />} title="Projects">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-[12px] text-neutral-900">Access Notes</h4>
                      <a href="https://accessnotesapp.vercel.app/" target="_blank" rel="noreferrer" className="text-[10px] text-indigo-600 hover:underline flex items-center gap-0.5 shrink-0">
                        Live <ExternalLink className="size-2.5" />
                      </a>
                    </div>
                    <p className="text-[11px] text-neutral-600 mt-0.5">Modern note-taking platform for organizing notes and content efficiently.</p>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-[12px] text-neutral-900">Cosmic Glow Insights</h4>
                      <a href="https://cosmic-glow-insights.lovable.app/" target="_blank" rel="noreferrer" className="text-[10px] text-indigo-600 hover:underline flex items-center gap-0.5 shrink-0">
                        Live <ExternalLink className="size-2.5" />
                      </a>
                    </div>
                    <p className="text-[11px] text-neutral-600 mt-0.5">Astrology & numerology themed web experience with guided prediction flow and immersive UI.</p>
                  </div>
                </div>
              </ResumeSection>

              {/* Certifications */}
              <ResumeSection icon={<Award className="size-3.5" />} title="Certifications">
                <ul className="space-y-1.5">
                  {[
                    "Generative AI & LLMs — Sunstone School of Technology (Feb 2026)",
                    "Introduction to Data Science — Cisco Networking Academy",
                    "Introduction to Cybersecurity — Cisco Networking Academy",
                    "Data Analytics Essentials — Cisco Networking Academy",
                  ].map((cert) => (
                    <li key={cert} className="flex items-start gap-1.5 text-[11px] text-neutral-700">
                      <span className="mt-1.5 size-1 rounded-full bg-emerald-500 shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </ResumeSection>

              {/* Leadership */}
              <ResumeSection icon={<Users className="size-3.5" />} title="Leadership & Activities">
                <p className="text-[11px] text-neutral-700">
                  <span className="font-semibold text-neutral-900">Decoration Team Head</span> — College Function. Planned and coordinated event execution, managed team responsibilities, and ensured on-time delivery.
                </p>
              </ResumeSection>

              {/* Coding Profiles */}
              <ResumeSection icon={<Code2 className="size-3.5" />} title="Coding Profiles">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                  <a href="https://github.com/sonammaan222-source" target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-indigo-600 transition-colors">GitHub</a>
                  <a href="https://leetcode.com/u/SonamMaan222/" target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-indigo-600 transition-colors">LeetCode</a>
                  <a href="https://codeforces.com/profile/SonamMaan222" target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-indigo-600 transition-colors">Codeforces</a>
                  <a href="https://www.hackerrank.com/profile/sonammaan222" target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-indigo-600 transition-colors">HackerRank</a>
                </div>
              </ResumeSection>

              <div className="absolute bottom-4 right-4 text-[9px] text-neutral-400">
                <FileText className="size-3 inline" /> preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [webhookResponse, setWebhookResponse] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    try {
      const res = await fetch(
        "https://sonammaan-23.app.n8n.cloud/webhook-test/d716e6ad-fc37-43ae-91f2-b209531acef4",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );
      const body = await res.text();
      setWebhookResponse(body);
      setDialogOpen(true);
    } catch {
      // silently ignore network errors so the user still sees feedback
    }

    setSubmitting(false);
    form.reset();
    toast.success(`Thanks${name ? ", " + name : ""}! I'll get back to you soon.`);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div className="space-y-6 relative">
          <div className="script absolute -top-4 left-0 text-6xl sm:text-7xl text-white/5 select-none">
            Inquiries
          </div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight">
            Let's <span className="text-gradient">Connect</span>
            <ArrowRight className="inline size-10 ml-2 text-accent" />
          </h2>
          <p className="text-muted-foreground max-w-md">
            Open to <span className="text-foreground">internships</span>,{" "}
            <span className="text-foreground">collaborations</span>, and{" "}
            <span className="text-foreground">opportunities</span>. If you're building something
            interesting or just want to chat — drop a line.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <SocialIcon href="https://github.com/sonammaan222-source" label="GitHub">
              <Github className="size-4" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/sonam-maan-860409332/" label="LinkedIn">
              <Linkedin className="size-4" />
            </SocialIcon>
            <SocialIcon href="https://leetcode.com/u/SonamMaan222/" label="LeetCode">
              <Code2 className="size-4" />
            </SocialIcon>
            <SocialIcon href="https://codeforces.com/profile/SonamMaan222" label="Codeforces">
              <Trophy className="size-4" />
            </SocialIcon>
            <SocialIcon href="https://www.hackerrank.com/profile/sonammaan222" label="HackerRank">
              <Hash className="size-4" />
            </SocialIcon>
          </div>

          <div className="inline-flex items-center gap-3 mt-6 rounded-full glass px-4 py-2 text-sm">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Open for new projects.
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-3xl p-8 space-y-5">
          <Field label="Your name" name="name" placeholder="Jane Doe" required />
          <Field label="Your email" name="email" type="email" placeholder="jane@example.com" required />
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Tell me about the project
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What are you building? What do you need?"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition glow-primary disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send message"}
            <Send className="size-4" />
          </button>
        </form>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-surface-elevated border-white/10 text-foreground max-w-md">
          <DialogHeader>
            <DialogTitle className="text-foreground">Webhook Response</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Here is the response received from the server.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 rounded-xl bg-black/30 p-4 border border-white/10">
            <pre className="text-xs text-accent whitespace-pre-wrap break-words font-mono">
              {webhookResponse ?? "No response"}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-display font-bold tracking-tight">
          SONAM<span className="text-accent">/</span>M.
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Built with curiosity and continuous learning.
        </p>
        <div className="text-xs text-muted-foreground">© {year} Sonam Maan</div>
      </div>
    </footer>
  );
}
