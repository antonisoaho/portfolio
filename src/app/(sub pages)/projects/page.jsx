import Image from "next/image";
import bg from "../../../../public/background/projects-background.jpg";
import RenderModel from "@/components/RenderModel";
import Projects from "@/components/projects";
import { client } from "@/sanity/lib/client";
import dynamic from "next/dynamic";
const GlobeHologram = dynamic(
  () => import("@/components/models/GlobeHologram"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: {
    template: "Anton Isoaho | Projects",
    default: "Anton Isoaho | Projects",
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
    image: "/background/projects-background.jpg",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@handle",
    title: "Projects | Anton Isoaho",
    description: "Explore the projects by Anton Isoaho",
    image: "/background/projects-background.jpg",
  },
};

export default async function ProjectsPage() {
  const projects = await client.fetch(
    `*[_type == "project" && !(_id in path("drafts.**"))]{_id, name, description, date, slug}`
  );

  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
      <div className="w-full sm:h-screen h-full lg:w-72 absolute top-28 lg:top-1/3 -translate-y-1/2 left-0 -z-40">
        <RenderModel>
          <GlobeHologram />
        </RenderModel>
      </div>

      <Projects projects={projects} />
    </>
  );
}
