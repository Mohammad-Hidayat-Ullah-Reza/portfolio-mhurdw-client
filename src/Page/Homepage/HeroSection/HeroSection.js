import React from "react";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-10">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between w-full">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="w-2/3">
          <h1 className="text-5xl font-bold mb-3">Assalamu Alaikum</h1>
          <h2 className="text-4xl font-bold mb-3">
            I'm Mohammad Hidayat Ullah Reza
          </h2>
          <h2 className="text-3xl font-bold mb-3">Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
