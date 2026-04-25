import Form from "@/components/contact/Form";
export const metadata = {
  title: {
    template: "Anton Isoaho",
    default: "Anton Isoaho | Contact",
  },
  description:
    "Contact Anton Isoaho for web app, SaaS, and cloud development focused on practical outcomes and clear user experience.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Contact | Anton Isoaho",
    description:
      "Get in touch with Anton Isoaho about practical web app, SaaS, and cloud software projects.",
    type: "website",
    url: "https://www.isoaho.se/contact",
    images: [{ url: "/preview/contact-page.png" }],
  },
};

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="glass-panel relative mx-auto mt-4 w-full max-w-6xl px-4 py-9 sm:px-10 sm:py-11"
    >
      <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_min(100%,24rem)] lg:items-start lg:gap-x-14">
        <header className="max-w-xl space-y-5 text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan/80">
            Contact
          </p>
          <h1
            id="contact-heading"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Let&apos;s talk about your next build
          </h1>
          <div className="space-y-4 text-base leading-relaxed text-foreground/75 sm:text-[17px]">
            <p>
              If you need a developer for a web app, internal tool, or cloud
              setup, send a short note with what you&apos;re trying to ship and
              when you&apos;d like to move.
            </p>
            <p className="text-foreground/60">
              I usually reply within a couple of working days. For urgent work,
              mention it in the message.
            </p>
          </div>
        </header>
        <div className="relative lg:pt-1">
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan/12 via-transparent to-violet/10 opacity-80 sm:-inset-1"
            aria-hidden
          />
          <div className="relative rounded-2xl border border-white/10 bg-background/40 p-5 sm:p-6">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
