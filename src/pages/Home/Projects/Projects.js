import React, { useEffect, useState } from "react";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import SectionWrapper from "../../../components/UI/SectionWrapper/SectionWrapper";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://muntashir-wahid-server.vercel.app/api/v1/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data?.data?.projects);
        }
      });
  }, []);

  return (
    <SectionWrapper className="px-2 md:px-12">
      <h2 className="text-center font-bold text-4xl mb-12">My Projects</h2>
      {projects.length === 0 && (
        <LoadingSpinner
          className="w-full h-96"
          message="Please wait!Projects is loading..."
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
