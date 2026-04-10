import Image from "next/image";
import bg from "../../public/background/home-background.jpg";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

const RenderModel = dynamic(() => import("@/components/RenderModel"), {
  ssr: false,
});
const StyledPlanet = dynamic(() => import("@/components/models/StyledPlanet"), {
  ssr: false,
});

export const metadata = {
  title: {
    template: "Anton Isoaho",
    default: "Anton Isoaho | Next.js Portfolio",
  },
  description: "My first portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Anton Isoaho",
    description: "Portfolio — developer and creative technologist.",
    type: "website",
    url: "https://www.isoaho.se/",
    images: [{ url: "/preview/home-page.png" }],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        placeholder="blur"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <StyledPlanet />
        </RenderModel>
      </div>
    </main>
  );
}
