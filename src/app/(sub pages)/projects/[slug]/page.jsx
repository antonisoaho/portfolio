import ProjectDetails from "@/components/projects/ProjectDetails";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

const ProjectPage = async ({ params }) => {
  const { slug } = params;
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  const project = await client.fetch(query, { slug });

  return <ProjectDetails project={project} />;
};

export default ProjectPage;
