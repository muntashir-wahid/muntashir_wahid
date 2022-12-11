import React, { useEffect, useState } from "react";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import SectionWrapper from "../../../components/UI/SectionWrapper/SectionWrapper";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <SectionWrapper className="px-2 md:px-12">
      <h2 className="text-center font-bold text-4xl mb-12">My Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
