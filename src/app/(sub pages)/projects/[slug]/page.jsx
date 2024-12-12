import ProjectDetails from "@/components/projects/ProjectDetails";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import bg from "../../../../../public/background/projects-background.jpg";

export const metadata = {
  title: {
    template: "Anton Isoaho",
    default: "Anton Isoaho | Project",
  },
  description: "My first portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Anton Isoaho | Next.js Portfolio",
    description: "My first portfolio",
    type: "website",
    url: "https://nextjs-portfolio-ecru-two.vercel.app/",
    image: "/background/projects-background.jpg",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@handle",
    title: "Anton Isoaho | Next.js Portfolio",
    description: "My first portfolio",
    image: "/background/projects-background.jpg",
  },
};

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
