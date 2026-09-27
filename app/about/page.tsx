import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    title: "People First",
    description:
      "I build high-performing teams by creating clarity, trust, accountability, and room for people to grow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c.6-4.2 2.7-6.5 6-6.5s5.4 2.3 6 6.5M14 14.5c3.7-.8 6.1 1.2 7 5.5" />
      </svg>
    ),
  },
  {
    title: "Execution",
    description:
      "I turn strategy into measurable outcomes by simplifying complexity, creating ownership, and keeping teams focused on delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 13l4 4L19 7" />
        <rect x="3" y="3" width="18" height="18" rx="3" />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    description:
      "I look for repeatable ways to improve reliability, efficiency, visibility, and the way teams work together.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 6v5h-5M4 18v-5h5" />
        <path d="M6.1 9A7 7 0 0 1 18.4 6.8L20 11M4 13l1.6 4.2A7 7 0 0 0 17.9 15" />
      </svg>
    ),
  },
  {
    title: "Real-World Impact",
    description:
      "I solve problems that matter: resilient platforms, safer change, stronger delivery, and technology that enables the business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M5 8h14M7 21h10" />
        <path d="M8 8c0 5 2 8 4 8s4-3 4-8" />
      </svg>
    ),
  },
];

const interests = [
  { label: "Photography", detail: "Portrait, branding, and creative work", emoji: "📷" },
  { label: "Cooking & BBQ", detail: "Fire, smoke, experimentation, and family meals", emoji: "🔥" },
  { label: "Home Lab", detail: "Infrastructure, automation, networking, and AI", emoji: "🖥️" },
  { label: "Family & Travel", detail: "Time together, new places, and new experiences", emoji: "✈️" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Keith Layne
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link
              href="/about"
              className="border-b-2 border-blue-600 pb-1 font-semibold text-blue-600"
            >
              About
            </Link>
            <Link href="/resume" className="hover:text-blue-600">Resume</Link>
            <Link href="/homelab" className="hover:text-blue-600">Home Lab</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>

          <a
            href="/Keith-Layne-Resume.pdf"
            download
            className="hidden rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 lg:inline-flex"
          >
            Download Resume
          </a>
        </div>
      </header>

      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[520px] lg:min-h-[610px]">
            <Image
              src="/keith-layne-headshot.png"
              alt="Keith Layne professional portrait"
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
          </div>

          <div className="flex items-center px-8 py-14 md:px-14 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-300">
                About Me
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[1.03] tracking-tight md:text-6xl">
                Technology leader,
                <br />
                builder, and
                <br />
                problem solver.
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-300">
                I&apos;m Keith Layne, a technology leader with 25+ years of
                experience delivering enterprise infrastructure,
                modernization, transformation, and complex technology programs.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                I&apos;m most energized where people, technology, and execution
                meet: taking difficult environments, creating clarity, building
                strong teams, and turning complexity into reliable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {item.icon}
              </div>
              <h2 className="mt-5 text-lg font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
            My Journey
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            From technology delivery to enterprise transformation.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              My career has moved through technical operations, consulting,
              project and program leadership, cloud and infrastructure
              modernization, SRE transformation, M&amp;A integration, and
              large-scale enterprise delivery.
            </p>
            <p>
              Along the way, I&apos;ve led teams, managed complex vendor
              ecosystems, supported critical platforms, guided cloud and data
              center initiatives, and helped organizations improve the way they
              plan, govern, and deliver technology.
            </p>
            <p>
              The common thread is execution: understanding the problem,
              aligning the people around it, and building a path from strategy
              to measurable results.
            </p>
          </div>

          <Link
            href="/resume"
            className="mt-7 inline-flex rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Explore My Resume →
          </Link>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-100 p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="mt-2 text-sm text-slate-500">Years in Technology</div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">$20M+</div>
              <div className="mt-2 text-sm text-slate-500">Programs & Portfolios</div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">1,000+</div>
              <div className="mt-2 text-sm text-slate-500">Applications Enabled</div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">20+</div>
              <div className="mt-2 text-sm text-slate-500">Concurrent Initiatives</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
            Beyond Work
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Technology is only part of the story.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Outside of work, I&apos;m a photographer, an enthusiastic home
                cook and BBQ experimenter, a home-lab builder, and a husband
                and father. Those interests keep me creative, curious, and
                grounded.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {interests.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl">{item.emoji}</div>
                  <h3 className="mt-4 text-lg font-bold">{item.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[28px] bg-blue-50 px-8 py-10 text-center">
          <div className="text-5xl text-blue-400">“</div>
          <blockquote className="mx-auto max-w-3xl text-2xl font-medium leading-10 text-slate-800">
            I&apos;m motivated by solving complex problems, building great
            teams, and creating technology platforms that make a lasting impact.
          </blockquote>
          <div className="mt-5 text-sm font-semibold text-slate-500">— Keith Layne</div>
        </div>
      </section>
    </main>
  );
}
