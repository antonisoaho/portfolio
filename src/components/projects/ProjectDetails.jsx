import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import SquareArrowOutUpRight from "lucide-react";

const ProjectDetails = ({ project }) => {
  if (!project) {
    return <div className="text-center text-muted">Project not found</div>;
  }

  return (
    <div className="p-6 md:p-8 custom-bg rounded-xl shadow-lg max-w-7xl">
      <div className="flex flex-col">
        <div className="w-full mb-4 xl:mb-0">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-accent mb-4">
              {project.name}
            </h1>
            {project.href && (
              <Link
                className="ml-auto text-accent"
                href={project.href}
                target="_blank"
              >
                <SquareArrowOutUpRight />
              </Link>
            )}
          </div>
          <p className="text-base md:text-lg text-foreground mb-4">
            {project.description}
          </p>
          <div className="text-base md:text-lg text-foreground mb-4">
            <PortableText value={project.bio} />
          </div>
        </div>
        {project.image_1 && (
          <div className="relative h-auto flex items-center">
            <Image
              alt={project.name}
              src={urlFor(project.image_1).url()}
              layout="responsive"
              width={1600}
              height={960}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
