import Image from "next/image";
import bg from "../../public/background/home-background.jpg";
import Navigation from "@/components/navigation";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
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
    title: "Projects | Anton Isoaho",
    description: "Explore the projects by Anton Isoaho",
    type: "website",
    url: "https://nextjs-portfolio-ecru-two.vercel.app/projects",
    image: "/path/to/your/image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@handle",
    title: "Projects | Anton Isoaho",
    description: "Explore the projects by Anton Isoaho",
    image: "/path/to/your/image.jpg",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        loading="eager"
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
