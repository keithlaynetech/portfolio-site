import Link from "next/link";

type IconName =
  | "overview"
  | "network"
  | "compute"
  | "storage"
  | "applications"
  | "monitoring"
  | "observability"
  | "automation"
  | "homekit";

const sections: {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  iconClass: string;
  iconBg: string;
}[] = [
  {
    title: "Overview",
    description: "Architecture & hardware",
    href: "/homelab/overview",
    icon: "overview",
    iconClass: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    title: "Network",
    description: "VLANs, DNS, VPN",
    href: "/homelab/network",
    icon: "network",
    iconClass: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    title: "Compute",
    description: "Proxmox cluster",
    href: "/homelab/compute",
    icon: "compute",
    iconClass: "text-violet-600",
    iconBg: "bg-violet-50",
  },
  {
    title: "Storage",
    description: "UNAS Pro, RAID 5",
    href: "/homelab/storage",
    icon: "storage",
    iconClass: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    title: "Applications",
    description: "Media & services",
    href: "/homelab/applications",
    icon: "applications",
    iconClass: "text-orange-600",
    iconBg: "bg-orange-50",
  },
  {
    title: "Monitoring",
    description: "Health & alerts",
    href: "/homelab/monitoring",
    icon: "monitoring",
    iconClass: "text-rose-500",
    iconBg: "bg-rose-50",
  },
  {
    title: "Observability",
    description: "Logs & dashboards",
    href: "/homelab/observability",
    icon: "observability",
    iconClass: "text-violet-600",
    iconBg: "bg-violet-50",
  },
  {
    title: "Automation / AI",
    description: "n8n & AI agent roadmap",
    href: "/homelab/automation",
    icon: "automation",
    iconClass: "text-teal-600",
    iconBg: "bg-teal-50",
  },
  {
    title: "Apple HomeKit",
    description: "Smart home automations",
    href: "/homelab/homekit",
    icon: "homekit",
    iconClass: "text-amber-500",
    iconBg: "bg-amber-50",
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
      "Build a read-oriented AI assistant that understands the lab and can surface operational insight.",
  },
  {
    title: "Kubernetes / K3s Lab",
    description:
      "Build a lightweight Kubernetes environment on Proxmox to learn orchestration, service networking, persistent storage, Helm, and GitOps.",
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

function SectionIcon({ name }: { name: IconName }) {
  const common = "h-9 w-9";

  switch (name) {
    case "overview":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v5h5" />
          <path d="M9.5 13h6M9.5 16.5h6" />
        </svg>
      );

    case "network":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <rect x="9" y="3" width="6" height="5" rx="1" />
          <rect x="3" y="16" width="6" height="5" rx="1" />
          <rect x="15" y="16" width="6" height="5" rx="1" />
          <path d="M12 8v4M6 16v-4h12v4" />
        </svg>
      );

    case "compute":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="4" width="16" height="6" rx="1.5" />
          <rect x="4" y="14" width="16" height="6" rx="1.5" />
          <path d="M8 7h.01M8 17h.01M12 7h5M12 17h5" />
        </svg>
      );

    case "storage":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );

    case "applications":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );

    case "monitoring":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M2 12h5l2.2-6 4.1 12 2.2-6H22" />
        </svg>
      );

    case "observability":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M5 20v-7M10 20V9M15 20V5M20 20V2" />
        </svg>
      );

    case "automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
        </svg>
      );

    case "homekit":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10v11h14V10M9 21v-7h6v7" />
        </svg>
      );
  }
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export default function HomeLabPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* TOP NAV */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-5">
          <Link href="/" className="justify-self-start text-xl font-bold tracking-tight">
            Keith Layne
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
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
              className="border-b-2 border-blue-600 pb-1 font-semibold text-blue-600"
            >
              Home Lab
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </nav>

          <div className="justify-self-end" />
        </div>
      </header>

      {/* TITLE */}
      <section className="mx-auto max-w-7xl px-6 pt-14 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
          Home Lab
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
          Home Lab{" "}
          <span className="text-blue-600">Infrastructure</span>
        </h1>

        <p className="mx-auto mt-4 max-w-4xl text-xl text-slate-600 md:text-2xl">
          A segmented, virtualized, automated home infrastructure environment.
        </p>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-600" />
      </section>

      {/* ARCHITECTURE DIAGRAM */}
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <div className="overflow-hidden rounded-2xl bg-white">
          <img
            src="/homelab-architecture.png"
            alt="Home lab architecture showing AT&T Fiber, dual UDM Pro gateways, a 10GbE SFP+ backbone, Proxmox compute, UNAS Pro storage, and Smart Home / IoT."
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* 9 CORE AREAS */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group flex min-h-[128px] items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${section.iconBg} ${section.iconClass}`}
              >
                <SectionIcon name={section.icon} />
              </div>

              <div className="ml-5 min-w-0 flex-1">
                <h2 className="text-xl font-bold tracking-tight text-slate-950 transition group-hover:text-blue-600">
                  {section.title}
                </h2>
                <p className="mt-1 text-base text-slate-500">
                  {section.description}
                </p>
              </div>

              <div className="ml-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-600">
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
              Roadmap
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Upcoming Projects
            </h2>

            <p className="mt-3 text-lg leading-8 text-slate-600">
              Planned work focused on resilience, automation, observability,
              infrastructure-as-code, and AI-assisted operations.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcomingProjects.map((project) => (
              <Link
                key={project.title}
                href="/homelab/projects"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950 group-hover:text-blue-600">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600">
                  View roadmap
                  <ArrowIcon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
