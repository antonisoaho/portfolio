import AboutDetails from "@/components/about";

export const metadata = {
  title: {
    template: "Anton Isoaho | About",
    default: "Anton Isoaho | About",
  },
  description:
    "Learn more about Anton Isoaho, a Swedish system developer and GoLife co-owner building practical SaaS and cloud products.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "About | Anton Isoaho",
    description:
      "System developer focused on practical software, clear workflows, and user-first cloud products.",
    type: "website",
    url: "https://www.isoaho.se/about",
    images: [{ url: "/preview/home-page.png" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@antonisoaho",
    title: "About | Anton Isoaho",
    description:
      "System developer focused on practical software, clear workflows, and user-first cloud products.",
    images: ["/preview/home-page.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="glass-panel mx-auto mt-4 max-w-3xl p-7 text-center sm:p-10">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-6xl">
          About Anton
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/80 sm:text-lg">
          I build practical software for people who need clarity, reliability,
          and calm digital workflows.
        </p>
      </div>

      <AboutDetails />
    </div>
  );
}
