import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-rho-woad.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-4xl mb-4 font-bold text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
