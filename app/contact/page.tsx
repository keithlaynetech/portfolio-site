import Link from "next/link";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7.5v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 19c-4 1.2-4-2-5-2.5M14 21v-3.2c0-.9.3-1.6.8-2.1 2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 19 6.4 4.4 4.4 0 0 0 18.9 3S17.8 2.7 15 4.3a11.4 11.4 0 0 0-6 0C6.2 2.7 5.1 3 5.1 3A4.4 4.4 0 0 0 5 6.4a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6 .5.5.8 1.2.8 2.1V21" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export default function ContactPage() {
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
            <Link href="/resume" className="hover:text-blue-600">Resume</Link>
            <Link href="/homelab" className="hover:text-blue-600">Home Lab</Link>
            <Link
              href="/contact"
              className="border-b-2 border-blue-600 pb-1 font-semibold text-blue-600"
            >
              Contact
            </Link>
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

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-slate-100 via-white to-blue-50">
        <div className="absolute right-[-8%] top-[-30%] h-[520px] w-[520px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Get In Touch
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Let&apos;s Connect
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m always open to conversations about technology leadership,
            infrastructure transformation, modernization, delivery, and
            opportunities to solve complex problems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="mailto:YOUR-EMAIL-HERE"
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <MailIcon />
            </div>
            <h2 className="mt-5 text-xl font-bold group-hover:text-blue-600">Email</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Best for direct professional conversations and opportunities.
            </p>
          </a>

          <a
            href="YOUR-LINKEDIN-URL"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <LinkedInIcon />
            </div>
            <h2 className="mt-5 text-xl font-bold group-hover:text-blue-600">LinkedIn</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Connect professionally and view my broader career profile.
            </p>
          </a>

          <a
            href="https://github.com/keithlaynetech"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <GitHubIcon />
            </div>
            <h2 className="mt-5 text-xl font-bold group-hover:text-blue-600">GitHub</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Explore my portfolio, home lab documentation, and technical work.
            </p>
          </a>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1.25fr_0.75fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              This form is ready for a service such as Formspree. Replace the
              placeholder form action before publishing it as a working form.
            </p>

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="mt-7 space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Name
                  <input
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Your name"
                  />
                </label>

                <label className="block text-sm font-semibold text-slate-700">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block text-sm font-semibold text-slate-700">
                Subject
                <input
                  name="subject"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="How can I help?"
                />
              </label>

              <label className="block text-sm font-semibold text-slate-700">
                Message
                <textarea
                  name="message"
                  required
                  rows={7}
                  className="mt-2 w-full resize-y rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Your message..."
                />
              </label>

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </section>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-xl font-bold">What I&apos;m Interested In</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Technology leadership, infrastructure modernization,
                engineering leadership, platform strategy, enterprise
                transformation, and complex delivery environments.
              </p>
            </div>

            {[
              ["Home Lab", "Explore the infrastructure, automation, and AI environment.", "/homelab"],
              ["Resume", "Review my professional background and experience.", "/resume"],
              ["About", "Learn more about how I think, lead, and build.", "/about"],
            ].map(([title, description, href]) => (
              <Link
                key={title}
                href={href}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div>
                  <h3 className="font-bold group-hover:text-blue-600">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
                </div>
                <div className="ml-4 text-slate-400 group-hover:text-blue-600">
                  <ArrowIcon />
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </main>
  );
}
