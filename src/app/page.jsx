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
  description:
    "Portfolio of Anton Isoaho, focused on practical software, clear workflows, and user-first cloud products.",
  icons: {
    icon: "/favicon.ico",
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
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <h1 className="sr-only">Anton Isoaho - System Developer Portfolio</h1>
      <div
        className="page-gradient"
        aria-hidden="true"
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
