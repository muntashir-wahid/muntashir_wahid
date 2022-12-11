import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionWrapper from "../../components/UI/SectionWrapper/SectionWrapper";

const ProjectDetails = () => {
  const loadedData = useLoaderData();

  return (
    <SectionWrapper className="px-2 md:px-12 min-h-screen">
      <h2 className="text-center text-4xl font-semibold mb-8">
        {loadedData.data.project.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loadedData.data.project.pictures.map((img, index) => (
          <img key={index} src={img} alt="project" />
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-semibold mb-4">Project description</h3>
        <ul className="list-disc list-inside">
          {loadedData.data.project.desctiption.map((des, index) => (
            <li key={index}>{des}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-semibold mb-4">Used technologies</h3>
        {loadedData.data.project.usedTools.map((des, index) => (
          <p className="badge badge-primary mr-2" key={index}>
            {des}
          </p>
        ))}
      </div>

      <div className="btn-group mt-8">
        <a
          target="_blank"
          rel="noreferrer"
          href={loadedData.data.project.links.liveSite}
        >
          <button className="btn btn-secondary">Live site</button>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={loadedData.data.project.links.client}
        >
          <button className="btn btn-secondary">Source code client</button>
        </a>
        {loadedData.data.project.links.server && (
          <a
            target="_blank"
            rel="noreferrer"
            href={loadedData.data.project.links.server}
          >
            <button className="btn btn-secondary">Source code server</button>
          </a>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ProjectDetails;
