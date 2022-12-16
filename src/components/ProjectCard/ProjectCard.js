import React from "react";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { GrView } from "react-icons/gr";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProjectCard = ({ project }) => {
  return (
    <article key={project._id} className="card glass">
      <figure>
        <PhotoProvider>
          {project.pictures.map((img, index) => (
            <PhotoView src={img} key={index}>
              {index === 0 ? (
                <img
                  title="Click to view full screen"
                  className="cursor-zoom-in"
                  style={{ minHeight: "16rem" }}
                  src={img}
                  alt={project.name}
                />
              ) : undefined}
            </PhotoView>
          ))}
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.about}</p>
        <div className="card-actions justify-end flex-nowrap">
          <a target="_blank" rel="noreferrer" href={project.links.liveSite}>
            <button className="btn btn-primary">
              <CgWebsite className="mr-1 text-lg" />
              Live site
            </button>
          </a>
          <Link to={`/projects/${project._id}`}>
            <button className="btn btn-primary">
              <GrView className="mr-1 text-lg" />
              details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
