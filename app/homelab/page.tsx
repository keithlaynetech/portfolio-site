import Link from "next/link";

const sections = [
  {
    title: "Overview",
    description:
      "Architecture, network topology, hardware inventory, and overall design.",
    href: "/homelab/overview",
    icon: "◈",
  },
  {
    title: "Network",
    description:
      "UniFi infrastructure, VLAN segmentation, firewall design, and DNS.",
    href: "/homelab/network",
    icon: "◎",
  },
  {
    title: "Compute",
    description:
      "Proxmox cluster architecture, Minisforum MS-01 systems, and Beelink nodes.",
    href: "/homelab/compute",
    icon: "▣",
  },
  {
    title: "Storage",
    description:
      "Centralized storage architecture built around the Ubiquiti UNAS Pro.",
    href: "/homelab/storage",
    icon: "▤",
  },
  {
    title: "Applications",
    description:
      "Self-hosted services including Home Assistant, Plex, Authentik, and more.",
    href: "/homelab/applications",
    icon: "◇",
  },
  {
   title: "Monitoring",
  description:
    "Infrastructure health, uptime, performance metrics, alerting, and operational visibility.",
  href: "/homelab/monitoring",
  icon: "◉",
},
{
  title: "Observability",
  description:
    "Logs, metrics, dashboards, telemetry, and correlation across infrastructure and applications.",
  href: "/homelab/observability",
  icon: "◫",
},
{
title: "Automation / AI",
    description:
      "n8n, AI agents, infrastructure automation, and intelligent operations.",
    href: "/homelab/automation",
    icon: "✦",
  },
  {
    title: "Projects",
    description:
      "CI/CD, AI network monitoring, GitHub workflows, and future experiments.",
    href: "/homelab/projects",
    icon: "→",
  },
];

export default function HomeLabPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold">
            Keith Layne
          </Link>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/resume" className="hover:text-blue-600">
              Resume
            </Link>
            <Link
              href="/homelab"
              className="font-semibold text-blue-600"
            >
              Home Lab
            </Link>
            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 grayscale"
          style={{ backgroundImage: "url('/server-room.jpg')" }}
        />

        <div className="absolute inset-0 bg-white/85" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Infrastructure Lab
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-6xl">
            Home Lab
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            A multi-node environment designed to explore enterprise
            infrastructure, networking, virtualization, storage, security,
            automation, DevOps, and AI.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">
            Explore the Environment
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Select an area to explore the architecture, technologies,
            configuration approach, and projects behind the lab.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg"
            >
              <div className="text-3xl text-blue-600">
                {section.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold group-hover:text-blue-600">
                {section.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {section.description}
              </p>

              <div className="mt-6 text-sm font-semibold text-blue-600">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

