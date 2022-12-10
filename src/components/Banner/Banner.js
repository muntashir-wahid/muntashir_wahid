import React from "react";
import banner from "./../../asstes/images/banner.jpg";

const background = {
  backgroundImage: `url(${banner})`,
};

const Banner = () => {
  return (
    <section className="hero min-h-screen" style={background}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 text-5xl font-bold">Muntashir Wahid</h1>
          <p className="mb-5 text-3xl font-semibold">MERN-Stack Developer</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1M1Af7pafqHoJ_4PuypgzU-sYy6xdAnHT/view?usp=share_link"
          >
            <button className="btn btn-primary mr-2">See resume</button>
          </a>
          <a href="#contact">
            <button className="btn btn-primary">Contact me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
