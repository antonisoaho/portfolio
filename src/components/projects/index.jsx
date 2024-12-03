const { default: ProjectList } = require("@/components/projects/ProjectList");
const { client } = require("@/sanity/lib/client");

const Projects = async () => {
  const projects = await client.fetch(
    `*[_type == "project" && !(_id in path("drafts.**"))]`
  );
  console.log("projects", projects);

  return <ProjectList projects={projects} />;
};
export default Projects;
