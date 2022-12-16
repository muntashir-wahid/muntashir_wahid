import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import SectionWrapper from "../../../components/UI/SectionWrapper/SectionWrapper";
import displayImg from "./../../../asstes/images/display_img.png";

const About = () => {
  return (
    <SectionWrapper className="px-2 md:px-12">
      <article className="hero bg-base-200 rounded-lg">
        <div className="hero-content flex-col md:flex-row">
          <PhotoProvider>
            <PhotoView src={displayImg}>
              <img
                title="Click to view full screen"
                src={displayImg}
                className="rounded-lg shadow-2xl max-h-96 cursor-zoom-in"
                alt="Muntashir Wahid"
              />
            </PhotoView>
          </PhotoProvider>
          <div className=" px-0 md:px-10 text-center md:text-left">
            <h2 className="text-3xl font-bold">
              Hello there
              <MdWavingHand className="inline-block mx-1" /> <br />
              <span>I'm Muntashir Wahid</span>
              <br />
              <span className="text-lg font-semibold">
                I'm a MERN Stack developer
              </span>
            </h2>

            <p className="py-2">
              I'm learning and working with web technologies for the last one
              and a half year. I've got a good foundation in JavaScript. I'm so
              much passionate about programming and web development.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/muntashir-wahid"
            >
              <button className="btn btn-primary">
                <FaGithub className="text-lg mr-1" /> Visit GitHub
              </button>
            </a>
          </div>
        </div>
      </article>
    </SectionWrapper>
  );
};

export default About;
