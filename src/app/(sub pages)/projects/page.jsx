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
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await client.fetch(
    `*[_type == "project" && !(_id in path("drafts.**"))]{_id, name, description, date, slug}`
  );

  console.log(projects);
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <Projects projects={projects} />

      <div className="w-full sm:h-screen h-full lg:w-72 absolute top-28 lg:top-1/3 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <GlobeHologram />
        </RenderModel>
      </div>
    </>
  );
}
