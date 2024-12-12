import Image from "next/image";
import bg from "../../../../public/background/about-background.jpg";
import AboutDetails from "@/components/about";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Model = dynamic(() => import("@/components/models/InhabitedPlanet"), {
  srr: false,
});
export const metadata = {
  title: {
    template: "Anton Isoaho | About",
    default: "Anton Isoaho | About",
  },
  description: "My first portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "About | Anton Isoaho",
    description: "Learn more about Anton Isoaho",
    type: "website",
    url: "https://nextjs-portfolio-ecru-two.vercel.app/about",
    image: "/background/about-background.jpg",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@handle",
    title: "About | Anton Isoaho",
    description: "Learn more about Anton Isoaho",
    image: "/background/about-background.jpg",
  },
};

export default function Home() {
  return (
    <div className="w-full xl:max-w-7xl">
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Model />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl  text-accent">
            Anton Isoaho
          </h1>
          <p className="font-light text-foreground text-lg w-full">
            Welcome to my portfolio. I&apos;m a passionate developer dedicated
            to turning ideas into reality.
          </p>
        </div>
      </div>

      <AboutDetails />
    </div>
  );
}
