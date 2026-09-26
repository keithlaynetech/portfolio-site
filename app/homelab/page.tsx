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
      "UniFi infrastructure, VLAN segmentation, firewall design, DNS, VPN, and TLS.",
    href: "/homelab/network",
    icon: "◎",
  },
  {
    title: "Compute",
    description:
      "Five-node Proxmox cluster, Minisforum MS-01 systems, and Beelink compute nodes.",
    href: "/homelab/compute",
    icon: "▣",
  },
  {
    title: "Storage",
    description:
      "UNAS Pro storage with six drives, ~40 TB usable after RAID 5, NFS, SMB, and backups.",
    href: "/homelab/storage",
    icon: "▤",
  },
  {
    title: "Applications",
    description:
      "Self-hosted platforms including Plex, Home Assistant, Authentik, Traefik, and more.",
    href: "/homelab/applications",
    icon: "◇",
  },
  {
    title: "Monitoring",
    description:
      "Infrastructure health, uptime, resource utilization, performance metrics, and alerting.",
    href: "/homelab/monitoring",
    icon: "◉",
  },
  {
    title: "Observability",
    description:
      "Logs, dashboards, telemetry, metrics, and event correlation across the environment.",
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
    title: "Apple HomeKit",
    description:
      "Apple-centric smart home integration using HomeKit, Home Assistant, Homebridge, Scrypted, and connected devices.",
    href: "/homelab/homekit",
    icon: "⌂",
  },
];

const upcomingProjects = [
  {
    title: "Proxmox High Availability",
    description:
      "Design and test automatic workload recovery across the five-node cluster.",
  },
  {
    title: "AI Network Agent",
    description:
      "Build an AI assistant that can understand the lab, retrieve documentation, and surface operational insight.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Expand Ansible, Terraform/OpenTofu, Docker Compose, and GitHub-based automation.",
  },
  {
    title: "Advanced Monitoring & Observability",
    description:
      "Expand centralized metrics, logging, dashboards, alerting, and event correlation.",
  },
  {
    title: "CI/CD Expansion",
    description:
      "Extend GitHub-driven deployment workflows beyond the portfolio website into lab automation.",
  },
];

export default function HomeLabPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold">
            Keith Layne
          </Link>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/resume" className="hover:text-blue-600">Resume</Link>
            <Link href="/homelab" className="font-semibold text-blue-600">Home Lab</Link>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale"
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
            A multi-node environment designed to explore enterprise infrastructure,
            networking, virtualization, storage, security, automation, smart home
            integration, DevOps, and AI.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Explore the Environment</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Select an area to explore the architecture, technologies, design
            decisions, challenges, and lessons behind the lab.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg"
            >
              <div className="text-3xl text-blue-600">{section.icon}</div>

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

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Roadmap
            </p>

            <h2 className="mt-3 text-3xl font-bold">Upcoming Projects</h2>

            <p className="mt-3 max-w-3xl text-slate-600">
              Planned work focused on resilience, automation, observability,
              infrastructure-as-code, and AI-assisted operations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcomingProjects.map((project) => (
              <Link
                key={project.title}
                href="/homelab/projects"
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-4 text-sm font-semibold text-blue-600">
                  View roadmap →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
