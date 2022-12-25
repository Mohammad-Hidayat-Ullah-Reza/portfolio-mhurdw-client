import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";

const SkillsSection = () => {
  return (
    <div className="p-3 md:p-10">
      <h2 className="w-fit text-3xl md:text-5xl font-bold text-center pb-2 my-10 mx-auto">
        Skills
      </h2>
      <div>
        <div>
          <div>
            <h3
              className="w-fit text-2xl md:text-4xl font-bold my-5 pb-2 border-b-4 border-blue-900"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              Expert
            </h3>
          </div>
          <div
            className="grid grid-cols-3 gap-3 md:flex md:justify-around md:items-center mb-8"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <AiFillHtml5 className="text-7xl"></AiFillHtml5>
            <DiCss3 className="text-7xl"></DiCss3>
            <SiJavascript className="text-7xl"></SiJavascript>
            <FaReact className="text-7xl"></FaReact>
            <FaBootstrap className="text-7xl"></FaBootstrap>
            <SiTailwindcss className="text-7xl"></SiTailwindcss>
          </div>
        </div>
        <div>
          <div>
            <h3
              className="w-fit text-2xl md:text-4xl font-bold my-5 pb-2 border-b-4 border-blue-900"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              Comfortable
            </h3>
          </div>
          <div
            className="grid grid-cols-3 gap-3 md:flex md:justify-around md:items-center mb-8"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <FaNodeJs className="text-7xl"></FaNodeJs>
            <SiExpress className="text-7xl"></SiExpress>
            <SiMongodb className="text-7xl"></SiMongodb>
            <FiFigma className="text-7xl"></FiFigma>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
