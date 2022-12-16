import React, { Fragment } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaServer } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";

const ProjectLinks = ({ links }) => {
  return (
    <Fragment>
      <a target="_blank" rel="noreferrer" href={links.liveSite}>
        <button className="btn btn-secondary">
          <CgWebsite className="mr-1 text-lg" />
          Live site
        </button>
      </a>
      <a target="_blank" rel="noreferrer" href={links.client}>
        <button className="btn btn-secondary">
          <GoBrowser className="mr-1 text-lg" />
          Source code client
        </button>
      </a>
      {links.server && (
        <a target="_blank" rel="noreferrer" href={links.server}>
          <button className="btn btn-secondary">
            <FaServer className="mr-1 text-lg" />
            Source code server
          </button>
        </a>
      )}
    </Fragment>
  );
};

export default ProjectLinks;
