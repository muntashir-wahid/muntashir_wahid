import React, { Fragment } from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Home;
