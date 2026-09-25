export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold">Keith Layne</div>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <a href="/about" className="hover:text-blue-600">
              About
            </a>
            <a href="/resume" className="hover:text-blue-600">
              Resume
            </a>
            <a href="/homelab" className="hover:text-blue-600">
              Home Lab
            </a>
            <a href="/projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="/contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-40 grayscale"
          style={{ backgroundImage: "url('/hero-tech.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Technology & Infrastructure Leader
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Keith Layne
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            25+ years leading enterprise infrastructure, transformation,
            engineering, and complex technology delivery across large-scale
            environments.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
            >
              View Resume
            </a>

            <a
              href="/homelab"
              className="rounded-lg border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-800 backdrop-blur-sm hover:bg-white"
            >
              Explore Home Lab
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE BAR */}
      <section className="border-y border-slate-300 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-4">
          <Stat title="25+" subtitle="Years Experience" />

          <Stat
            title="Enterprise"
            subtitle="Infrastructure & Transformation"
          />

          <Stat
            title="Leadership"
            subtitle="Teams, Programs & Delivery"
          />

          <Stat
            title="Technology"
            subtitle="Cloud, Automation & AI"
          />
        </div>
      </section>

      {/* HOME LAB FEATURE */}
      <section className="relative overflow-hidden border-t border-slate-200">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 grayscale"
          style={{ backgroundImage: "url('/server-room.jpg')" }}
        />

        {/* WHITE OVERLAY */}
        <div className="absolute inset-0 bg-white/80" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Featured Technical Project
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Enterprise-Style Home Lab
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            A multi-node Proxmox environment built to explore infrastructure
            engineering, networking, security, containers, automation, AI, and
            modern DevOps practices.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <Feature
              title="Virtualization"
              text="Proxmox cluster and virtual machines"
            />

            <Feature
              title="Networking"
              text="UniFi, VLANs and segmentation"
            />

            <Feature
              title="Automation"
              text="GitHub, CI/CD, n8n and AI"
            />

            <Feature
              title="Applications"
              text="Home Assistant, Plex, Authentik and more"
            />
          </div>

          <a
            href="/homelab"
            className="mt-10 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
          >
            View Home Lab →
          </a>
        </div>
      </section>
    </main>
  );
}

function Stat({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="text-xl font-bold text-slate-900">
        {title}
      </div>

      <div className="mt-1 text-sm text-slate-500">
        {subtitle}
      </div>
    </div>
  );
}

function Feature({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:bg-slate-200 hover:shadow-md">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
}
