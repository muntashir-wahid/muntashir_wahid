import React, { Fragment } from "react";

const UsedTechnologies = ({ technologies }) => {
  return (
    <Fragment>
      <h3 className="text-3xl font-semibold mb-4">Used technologies</h3>
      {technologies.map((des, index) => (
        <p className="badge badge-primary mr-2" key={index}>
          {des}
        </p>
      ))}
    </Fragment>
  );
};

export default UsedTechnologies;
