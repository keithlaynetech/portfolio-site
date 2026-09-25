import Link from "next/link";
import { notFound } from "next/navigation";

const homelabData = {
overview: {
  title: "Overview",
  description:
    "A five-node, segmented home infrastructure environment designed to mirror many of the architectural patterns used in enterprise technology environments.",
  sections: [
    {
      title: "Architecture",
      content:
        "The lab is built around a five-node Proxmox cluster consisting of three Minisforum MS-01 systems and two Beelink EQ14 nodes. Compute, networking, storage, security, automation, and application services are intentionally separated into logical layers rather than operating as a collection of standalone devices. The environment is designed to provide a platform for virtualization, containerized workloads, infrastructure experimentation, DevOps, automation, security testing, and AI-driven operations.",
    },
    {
      title: "Network Design",
      content:
        "The network is built around a UniFi Dream Machine Pro and UniFi switching infrastructure. Multiple VLANs segment infrastructure, trusted devices, IoT systems, VPN traffic, security cameras, guest devices, homelab workloads, DMZ services, and backup infrastructure. Inter-VLAN communication is controlled through firewall policies, allowing services to communicate only where required while maintaining separation between trust zones.",
    },
    {
      title: "Compute Platform",
      content:
        "Virtualization is provided by a five-host Proxmox environment. The three Minisforum MS-01 systems provide the primary compute capacity, while two Beelink EQ14 nodes provide additional lightweight compute resources. Virtual machines and containers host core network services, identity platforms, media applications, automation systems, monitoring tools, databases, and development workloads.",
    },
    {
      title: "Storage",
      content:
        "Centralized storage is provided by a Ubiquiti UNAS Pro. The storage platform supports shared application data, media, backups, virtual machine workloads, snapshots, and other infrastructure services. NFS and SMB provide network-based access while keeping storage independent from individual compute nodes.",
    },
    {
      title: "Core Services",
      content:
        "The environment hosts a broad collection of self-hosted services including Authentik, Vaultwarden, AdGuard, Unbound, Traefik, WireGuard, Home Assistant, Zigbee2MQTT, Mosquitto, Plex, Jellyfin, Sonarr, Radarr, Redis, PostgreSQL, Portainer, and other supporting platforms. These services provide identity, networking, automation, media, data, remote access, and application capabilities.",
    },
    {
      title: "Security & Segmentation",
      content:
        "Security is built into the architecture through VLAN segmentation, firewall policy, IDS/IPS capabilities, DNS filtering, isolated IoT and camera networks, controlled remote access, and separate DMZ and backup network segments. The goal is to treat the environment as a small enterprise network rather than a single trusted home LAN.",
    },
    {
      title: "Automation & AI",
      content:
        "The lab also serves as a development environment for automation and AI. Current and planned work includes GitHub-based CI/CD, n8n workflows, infrastructure automation, AI agents, network monitoring, automated documentation, and eventually controlled AI-assisted infrastructure operations.",
    },
  ],
},

  network: {
    title: "Network",
    description:
      "Network architecture designed around segmentation, security, resilience, and controlled service access.",
    sections: [
      {
        title: "UniFi",
        content:
          "UniFi-based network infrastructure including gateway, switching, wireless networking, and centralized management.",
      },
      {
        title: "VLANs",
        content:
          "Network segmentation separating infrastructure, trusted devices, IoT, security systems, guests, homelab workloads, and other services.",
      },
      {
        title: "Firewall Rules",
        content:
          "Policy-based traffic controls governing communication between network segments and services.",
      },
      {
        title: "DNS",
        content:
          "Internal DNS architecture using AdGuard and Unbound for filtering, name resolution, and privacy.",
      },
    ],
  },

  compute: {
    title: "Compute",
    description:
      "Virtualized compute infrastructure supporting applications, services, development, and experimentation.",
    sections: [
      {
        title: "Proxmox Cluster",
        content:
          "Multi-node Proxmox virtualization environment hosting virtual machines, containers, and infrastructure services.",
      },
      {
        title: "Minisforum MS-01",
        content:
          "Primary high-performance compute nodes forming the core of the virtualization environment.",
      },
      {
        title: "Beelink Nodes",
        content:
          "Additional compact compute nodes supporting secondary workloads and lab services.",
      },
    ],
  },

  storage: {
    title: "Storage",
    description:
      "Centralized storage supporting virtual machines, media, backups, and application data.",
    sections: [
      {
        title: "UNAS Pro",
        content:
          "Ubiquiti UNAS Pro providing centralized network storage for the home lab environment.",
      },
      {
        title: "VM Storage",
        content:
          "Shared storage used by Proxmox workloads and virtual machine infrastructure.",
      },
      {
        title: "Backup Strategy",
        content:
          "Storage and backup design focused on protecting infrastructure configurations and application data.",
      },
    ],
  },

  applications: {
    title: "Applications",
    description:
      "Self-hosted platforms and services running throughout the environment.",
    sections: [
      {
        title: "Plex / Jellyfin",
        content:
          "Media platforms providing centralized streaming and library management.",
      },
      {
        title: "Home Assistant",
        content:
          "Primary smart-home automation and device management platform.",
      },
      {
        title: "Authentik",
        content:
          "Identity and authentication platform providing centralized application access.",
      },
      {
        title: "Traefik",
        content:
          "Reverse proxy providing routing and secure access to internal services.",
      },
      {
        title: "Vaultwarden",
        content:
          "Self-hosted password management platform for internal credential management.",
      },
      {
        title: "AdGuard",
        content:
          "Network-wide DNS filtering combined with Unbound recursive DNS.",
      },
      {
        title: "Monitoring",
        content:
          "Monitoring and operational visibility across infrastructure and hosted applications.",
      },
    ],
  },

  monitoring: {
  title: "Monitoring",
  description:
    "Monitoring infrastructure health, availability, performance, and operational events across the environment.",
  sections: [
    {
      title: "Infrastructure Monitoring",
      content:
        "Monitoring compute, storage, network, and application availability across the home lab.",
    },
    {
      title: "Performance Metrics",
      content:
        "Tracking CPU, memory, storage, network utilization, and service performance.",
    },
    {
      title: "Alerting",
      content:
        "Generating actionable alerts when infrastructure or services exceed defined thresholds or become unavailable.",
    },
  ],
},

observability: {
  title: "Observability",
  description:
    "Building deeper operational insight through metrics, logs, dashboards, telemetry, and event correlation.",
  sections: [
    {
      title: "Dashboards",
      content:
        "Centralized dashboards providing visibility into infrastructure and application behavior.",
    },
    {
      title: "Logging",
      content:
        "Centralized collection and analysis of logs generated across infrastructure and applications.",
    },
    {
      title: "Telemetry",
      content:
        "Collecting operational data that can be used to understand system behavior and troubleshoot issues.",
    },
    {
      title: "Event Correlation",
      content:
        "Connecting metrics, logs, and events to identify relationships and accelerate root-cause analysis.",
    },
  ],
},

automation: {
    title: "Automation / AI",
    description:
      "Exploring intelligent automation, AI agents, workflows, and infrastructure operations.",
    sections: [
      {
        title: "n8n",
        content:
          "Workflow automation platform connecting infrastructure, services, APIs, and future AI workflows.",
      },
      {
        title: "AI Agents",
        content:
          "AI agents designed to understand the environment, answer infrastructure questions, and eventually assist with operations.",
      },
      {
        title: "Network Automation",
        content:
          "Automation projects focused on monitoring, configuration management, documentation, and infrastructure operations.",
      },
    ],
  },

  projects: {
    title: "Projects",
    description:
      "Active and planned technical projects used to expand the capabilities of the environment.",
    sections: [
      {
        title: "CI/CD Pipeline",
        content:
          "GitHub-based development and deployment workflows used to learn and implement modern CI/CD practices.",
      },
      {
        title: "AI Network Agent",
        content:
          "An AI-driven assistant designed to understand infrastructure documentation and eventually provide operational insights.",
      },
      {
        title: "Future Projects",
        content:
          "Upcoming infrastructure, automation, security, DevOps, and AI experiments.",
      },
    ],
  },
};

type SectionName = keyof typeof homelabData;

export default async function HomeLabSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  const data = homelabData[section as SectionName];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold">
            Keith Layne
          </Link>

          <Link
            href="/homelab"
            className="text-sm font-semibold text-blue-600 hover:text-blue-500"
          >
            ← Home Lab
          </Link>
        </div>
      </header>

      {/* PAGE HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Home Lab
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            {data.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {data.description}
          </p>
        </div>
      </section>

      {/* OVERVIEW ARCHITECTURE */}
{section === "overview" && (
  <section className="mx-auto max-w-5xl px-6 pt-12">
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg">
      <img
        src="/network-architecture.png"
        alt="Home Lab Network Architecture"
        className="w-full object-contain"
      />
    </div>

    <p className="mt-3 text-center text-sm text-slate-500">
      High-level architecture of the compute, network, storage, security,
      and application environment.
    </p>
  </section>
)}
      
     {/* ACCORDIONS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-4">
          {data.sections.map((item, index) => (
            <details
              key={item.title}
              className="group rounded-xl border border-slate-200 bg-white shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-semibold">
                {item.title}

                <span className="text-2xl font-light text-blue-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-slate-200 px-6 py-6 leading-7 text-slate-600">
                {item.content}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
