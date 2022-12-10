import React from "react";
import banner from "./../../asstes/images/banner.jpg";

const Banner = () => {
  return (
    <section
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 text-5xl font-bold">Muntashir Wahid</h1>
          <p className="mb-5 text-3xl font-semibold">MERN-Stack Developer</p>
          <button className="btn btn-primary mr-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1M1Af7pafqHoJ_4PuypgzU-sYy6xdAnHT/view?usp=share_link"
            >
              See resume
            </a>
          </button>
          <button className="btn btn-primary">Cotact me</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
