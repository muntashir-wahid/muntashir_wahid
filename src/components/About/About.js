import React from "react";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper";
import displayImg from "../../asstes/images/display_img.png";

const About = () => {
  return (
    <SectionWrapper className="px-2 md:px-12">
      <article className="hero bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <img
            src={displayImg}
            className="rounded-lg shadow-2xl max-h-96"
            alt="Muntashir Wahid"
          />
          <div className=" px-0 md:px-10 text-center md:text-left">
            <h2 className="text-3xl font-bold">
              Hello there! I'm Muntashir Wahid <br />
              <span className="text-lg font-semibold">
                I'm a MERN Stack developer
              </span>
            </h2>

            <p className="py-2">
              I'm learning and working with web technologies for the last one
              and a half year. I've got a good foundation in JavaScript. I'm so
              much passionate about programming and web development.
            </p>
            <button className="btn btn-primary">Contact me</button>
          </div>
        </div>
      </article>
    </SectionWrapper>
  );
};

export default About;
