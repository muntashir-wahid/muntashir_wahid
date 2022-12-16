import React, { Fragment } from "react";

const ProjectDescription = ({ description }) => {
  return (
    <Fragment>
      <h3 className="text-3xl font-semibold mb-4">Project description</h3>
      <ul className="list-disc list-inside">
        {description.map((des, index) => (
          <li key={index}>{des}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProjectDescription;
