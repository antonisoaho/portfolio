import ProjectDetails from "@/components/projects/ProjectDetails";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import bg from "../../../../../public/background/projects-background.jpg";

export const dynamic = "force-dynamic";

const ProjectPage = async ({ params }) => {
  const { slug } = params;
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  const project = await client.fetch(query, { slug });

  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
      <ProjectDetails project={project} />
    </>
  );
};

export default ProjectPage;
