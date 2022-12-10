import React, { useEffect, useState } from "react";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper";

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
          <div key={project._id} className="card glass">
            <figure>
              <img src={project.picture} alt={project.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.about}</p>
              <div className="card-actions justify-end flex-nowrap">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.links.liveSite}
                >
                  <button className="btn btn-primary">Live site</button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.links.codeLink}
                >
                  <button className="btn btn-primary">Source code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
