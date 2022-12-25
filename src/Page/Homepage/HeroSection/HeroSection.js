import React from "react";
import hidayatPic from "../../../assets/img/mohammad_hidayat.jpg";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-transparent px-10">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between w-full">
        <img
          src={hidayatPic}
          className="max-w-sm rounded-lg shadow-2xl hidden md:block"
          alt="portrait of mohammad hidayat ullah reza"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        />
        <div className="avatar md:hidden">
          <div className="w-36 rounded">
            <img src={hidayatPic} alt="" className="" />
          </div>
        </div>
        <div
          className="w-full lg:w-2/3"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-center lg:text-left mb-3">
            Assalamu Alaikum
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-center lg:text-left mb-3">
            I'm Mohammad Hidayat Ullah Reza
          </h2>
          <h2 className="text-xl md:text-3xl font-bold text-center lg:text-left mb-3">
            Frontend Developer
          </h2>
          <h2 className="text-xl md:text-3xl font-bold text-center lg:text-left mb-3">
            React.js Developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
