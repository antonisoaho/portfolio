"use client";
import { useEffect, useState } from "react";
import ProjectLayout from "./ProjectLayout";
import { motion } from "framer-motion";
import { sanityFetch } from "@/sanity/lib/live";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projects.map((project) => {
        return (
          <ProjectLayout
            key={project._id}
            {...project}
          />
        );
      })}
    </motion.div>
  );
};

const fetchProjects = async () => {
  try {
    const data = await sanityFetch(
      `*[_type == "project" && !(_id in path("drafts.**"))]`
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  return <ProjectList projects={projects} />;
};

export default Projects;