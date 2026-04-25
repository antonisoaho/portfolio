import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const RenderModel = dynamic(() => import("@/components/RenderModel"), {
  ssr: false,
});
const Model = dynamic(() => import("@/components/models/InhabitedPlanet"), {
  ssr: false,
});
export const metadata = {
  title: {
    template: "Anton Isoaho | About",
    default: "Anton Isoaho | About",
  },
  description:
    "Learn more about Anton Isoaho, a Swedish system developer and GoLife co-owner building practical SaaS and cloud products.",
  icons: {
    icon: "/favicon.ico",
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

export default function Home() {
  return (
    <div className="w-full xl:max-w-7xl">
      <div
        className="page-gradient-soft"
        aria-hidden="true"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Model />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 max-w-2xl mx-auto px-6 gap-5">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-accent">
            Anton Isoaho
          </h1>
          <p className="font-light text-foreground text-lg sm:text-xl w-full leading-relaxed tracking-wide">
            I build practical web apps and cloud software that make everyday
            work simpler, clearer, and easier to trust.
          </p>
        </div>
      </div>

      <AboutDetails />
    </div>
  );
}
