import React from "react";

const AboutMeSection = () => {
  return (
    <div id="aboutMe" className="hero min-h-screen px-3 md:px-10">
      <div className="hero-content flex-col lg:flex-row lg:justify-between w-full">
        <img
          src="https://i.ibb.co/g6H90wj/IMG-20210108-230535.jpg"
          className="max-w-sm rounded-lg shadow-2xl hidden md:block"
          alt=""
          data-aos="fade-'left'"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        />
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-3xl md:text-5xl text-center lg:text-left font-bold">
            About Me
          </h2>
          <p className="py-6 text-justify">
            I'm a junior front-end developer. Currently, I've finished 5 months
            of coding boot camp and now building exceptional projects for skill
            development. Enjoy working closely with team members and look
            forward to developing my skill further by collaborating with your
            company
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
