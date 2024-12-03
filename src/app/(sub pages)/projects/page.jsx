import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import RenderModel from "@/components/RenderModel";
import Projects from "@/components/projects";
// import dynamic from "next/dynamic";

// const Model = dynamic(() => import(""), { srr: false});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      {/* Render projectslist - make database integration */}
      <Projects />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          {/* Here I will generate 3d-models  */} <></>
        </RenderModel>
      </div>
    </>
  );
}
