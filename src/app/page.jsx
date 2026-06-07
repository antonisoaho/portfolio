import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import RecentWork from "@/components/home/RecentWork";
import AboutDetails from "@/components/about";
import Form from "@/components/contact/Form";

export const metadata = {
  title: {
    template: "Anton Isoaho",
    default: "Anton Isoaho | Portfolio",
  },
  description:
    "Portfolio of Anton Isoaho, focused on practical software, clear workflows, and user-first cloud products.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Anton Isoaho",
    description:
      "System developer building practical web apps, SaaS, and cloud products that simplify real work.",
    type: "website",
    url: "https://www.isoaho.se/",
    images: [{ url: "/preview/home-page.png" }],
  },
};

export default function Home() {
  return (
    <SiteShell>
      <section
        aria-labelledby="hero-heading"
        className="flex min-h-[calc(100dvh-5.5rem)] w-full flex-col justify-center sm:min-h-[calc(100dvh-6rem)]"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <span className="glass-panel inline-flex items-center rounded-full px-4 py-1 text-xs uppercase tracking-[0.24em] text-cyan">
            Software engineer · Product builder
          </span>
          <h1
            id="hero-heading"
            className="w-full text-balance text-center text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Building Digital Experiences
          </h1>
          <p className="mx-auto w-full max-w-2xl text-center text-base text-foreground/80 sm:text-lg">
            I build practical web apps, SaaS products, and cloud systems that make
            work clearer, faster, and easier to trust.
          </p>
          <Link
            href="#work"
            className="inline-flex rounded-full border border-cyan/55 bg-cyan/10 px-6 py-3 text-sm font-semibold text-foreground shadow-glass-glow transition hover:bg-cyan/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View Latest Projects
          </Link>
        </div>
      </section>

      <RecentWork />

      <section
        id="about"
        aria-labelledby="about-heading"
        className="anchor-section mx-auto mt-20 w-full max-w-6xl"
      >
        <div className="glass-panel mx-auto max-w-3xl p-7 text-center sm:p-10">
          <h2
            id="about-heading"
            className="text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl"
          >
            About Anton
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/80 sm:text-lg">
            I build practical software for people who need clarity, reliability,
            and calm digital workflows.
          </p>
        </div>
        <AboutDetails />
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="anchor-section mx-auto mt-20 w-full max-w-6xl px-4 sm:px-6"
      >
        <div className="glass-panel px-5 py-9 sm:px-10 sm:py-11">
          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_min(100%,24rem)] lg:items-start lg:gap-x-14 lg:gap-y-0">
            <header className="max-w-xl space-y-5 text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan/80">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Let&apos;s talk about your next build
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-foreground/75 sm:text-[17px]">
                <p>
                  If you need a developer for a web app, internal tool, or cloud
                  setup, send a short note with what you&apos;re trying to ship
                  and when you&apos;d like to move.
                </p>
                <p className="text-foreground/60">
                  I usually reply within a couple of working days. For urgent
                  work, mention it in the message.
                </p>
              </div>
            </header>
            <div className="relative lg:pt-1">
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan/12 via-transparent to-violet/10 opacity-80 sm:-inset-1"
                aria-hidden
              />
              <div className="relative rounded-2xl border border-foreground/10 bg-panel/50 p-5 sm:p-6">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
