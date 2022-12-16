import React, { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import SectionWrapper from "../../components/UI/SectionWrapper/SectionWrapper";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectLinks from "./ProjectLinks/ProjectLinks";
import SliderBanner from "./SliderBanner/SliderBanner";
import UsedTechnologies from "./UsedTechnologies/UsedTechnologies";

const ProjectDetails = () => {
  const loadedData = useLoaderData();

  return (
    <Fragment>
      <header>
        <SliderBanner pictures={loadedData.data.project.pictures} />
      </header>
      <SectionWrapper className="px-2 md:px-12 min-h-screen">
        <h2 className="text-center text-4xl font-semibold mb-2">
          {loadedData.data.project.name}
        </h2>
        <p className="text-center text-lg font-medium">
          {loadedData.data.project.about}
        </p>
        <div className="mt-12">
          <ProjectDescription
            description={loadedData.data.project.description}
          />
        </div>
        <div className="mt-8">
          <UsedTechnologies technologies={loadedData.data.project.usedTools} />
        </div>

        <div className="btn-group mt-8 gap-3 flex-wrap">
          <ProjectLinks links={loadedData.data.project.links} />
          {/* <a
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
          )} */}
        </div>
      </SectionWrapper>
    </Fragment>
  );
};

export default ProjectDetails;
