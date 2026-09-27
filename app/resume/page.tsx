import Image from "next/image";
import Link from "next/link";

const experience = [
  {
    company: "Wells Fargo",
    role: "Senior Project Manager (Contract)",
    period: "2025–2026",
    location: "Charlotte, NC",
    bullets: [
      "Revitalized a $20M+ enterprise middleware portfolio spanning MQ, Kafka, Redis, and Solace across four data centers and enabling migration of 1,000+ applications.",
      "Reduced a 12-month schedule delay by approximately four months and progressed delivery from roughly 10% to 45% complete in the first year.",
      "Managed six vendors and 12 contracts while maintaining operational stability and avoiding unplanned outages attributable to the work.",
      "Completed the build phase and transitioned the program into observability, stability, and migration activities.",
    ],
  },
  {
    company: "Vanguard",
    role: "Senior Manager / Project Manager",
    period: "Selected Experience",
    location: "Charlotte / Enterprise",
    bullets: [
      "Led cloud migration work supporting 150+ application teams moving from legacy platforms toward AWS-based environments.",
      "Managed 10+ direct reports and a $1.5M+ program.",
      "Helped drive an enterprise SRE transformation engaging 1,500+ leaders and practitioners.",
      "Led technology integration work for the Just Invest acquisition across data center, VPN, cloud, security, vendors, and 20 matrixed departments.",
    ],
  },
  {
    company: "Barclays / RCI",
    role: "Delivery & Technology Execution Leader",
    period: "Selected Experience",
    location: "Multi-Site",
    bullets: [
      "Managed approximately 10 project managers across four delivery hubs and roughly 20 concurrent initiatives.",
      "Used OKR reporting and portfolio governance to improve visibility and execution discipline.",
      "Delivered approximately 10% more projects year over year with the same or lower budget.",
    ],
  },
  {
    company: "Deloitte",
    role: "Senior Project Manager",
    period: "2007–2013",
    location: "Multiple Locations",
    bullets: [
      "Managed approximately 10 project managers and around 20 concurrent projects representing roughly $20M in annual delivery.",
      "Led development and execution of 12 SOW/RFP engagements.",
      "Helped train approximately 1,500 employees on Agile delivery practices.",
    ],
  },
  {
    company: "IBM",
    role: "Technology Lead",
    period: "Earlier Career",
    location: "Enterprise Operations",
    bullets: [
      "Led a 10-engineer Tivoli team supporting more than 20 client environments in 24/7 operations.",
      "Improved mean time to repair by approximately 35% and reliability by approximately 45%.",
      "Reduced maintenance-related incidents by approximately 30%.",
    ],
  },
];

const strengths = [
  "Infrastructure Strategy",
  "Technology Transformation",
  "Cloud & Data Center",
  "SRE & Reliability",
  "Portfolio Leadership",
  "Vendor Management",
  "Agile / SAFe / ITIL",
  "Executive Stakeholders",
  "Operational Excellence",
  "Engineering Leadership",
];

const technologies = [
  "AWS",
  "Cisco",
  "UniFi",
  "Proxmox",
  "Docker",
  "GitHub",
  "Linux",
  "Windows",
  "Kafka",
  "Redis",
  "Solace",
  "IBM MQ",
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Keith Layne
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/resume" className="border-b-2 border-blue-600 pb-1 font-semibold text-blue-600">
              Resume
            </Link>
            <Link href="/homelab" className="hover:text-blue-600">Home Lab</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>

          <a
            href="/Keith-Layne-Resume.pdf"
            download
            className="hidden items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 lg:flex"
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.12),transparent_65%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-blue-600">
              Resume
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
              Enterprise Technology &amp; Infrastructure Transformation Leader
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              25+ years leading reliable, secure, and scalable technology
              platforms, transformation programs, and complex enterprise
              delivery that enable business growth and operational performance.
            </p>

            <div className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["$20M+", "Largest Program Portfolio"],
                ["1,000+", "Applications Enabled"],
                ["25+", "Years of Experience"],
                ["0", "Unplanned Outages from Key Delivery"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                  <div className="text-2xl font-bold text-slate-950">{value}</div>
                  <div className="mt-1 text-sm text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-2 shadow-2xl">
              <Image
                src="/keith-layne-headshot.png"
                alt="Keith Layne professional headshot"
                width={1000}
                height={1500}
                priority
                className="aspect-[4/5] w-full rounded-[22px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-6 py-12 lg:grid-cols-[1.6fr_0.8fr]">
        <div className="space-y-7">
          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold">Professional Experience</h2>
            <p className="mt-1 text-slate-500">
              Selected leadership experience across infrastructure,
              transformation, engineering, and enterprise delivery.
            </p>

            <div className="relative mt-9 space-y-10 before:absolute before:bottom-2 before:left-[10px] before:top-2 before:w-px before:bg-blue-200">
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="relative pl-9">
                  <span className="absolute left-[4px] top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-blue-600 shadow" />

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{item.company}</h3>
                      <p className="mt-1 font-semibold text-slate-700">{item.role}</p>
                    </div>
                    <div className="text-left text-sm text-slate-500 sm:text-right">
                      <div className="font-medium">{item.period}</div>
                      <div>{item.location}</div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 pl-5 text-sm leading-6 text-slate-600">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc">{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <a
            href="/Keith-Layne-Resume.pdf"
            download
            className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-4 font-semibold text-white transition hover:bg-blue-600"
          >
            <DownloadIcon />
            Download Full Resume (PDF)
          </a>
        </div>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Executive Profile</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Senior technology leader with experience spanning enterprise
              infrastructure, transformation, engineering, portfolio
              execution, vendor ecosystems, and operational reliability.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Core Competencies</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Professional Development</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Current certification roadmap:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {["ITIL 4", "CISM", "SAFe Lean Portfolio Management", "AWS Solutions Architect"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Technology Exposure</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {technologies.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
