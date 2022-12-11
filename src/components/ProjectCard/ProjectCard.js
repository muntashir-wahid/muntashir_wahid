import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article key={project._id} className="card glass">
      <figure>
        <img src={project.pictures[0]} alt={project.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.about}</p>
        <div className="card-actions justify-end flex-nowrap">
          <a target="_blank" rel="noreferrer" href={project.links.liveSite}>
            <button className="btn btn-primary">Live site</button>
          </a>
          <Link to={`/projects/${project._id}`}>
            <button className="btn btn-primary">View details</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
