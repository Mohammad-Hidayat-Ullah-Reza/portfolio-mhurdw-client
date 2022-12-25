import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";

const Project = () => {
  const projectData = useLoaderData();
  const {
    id,
    title,
    shortDesc,
    keyFeatures,
    Technologies,
    screenShots,
    liveSite,
    github,
  } = projectData;

  return (
    <div className="p-3 md:px-10" style={{ backdropFilter: "blur(2px)" }}>
      <h2 className="text-3xl md:text-5xl font-bold text-center pt-5 pb-3 md:pb-5">
        {title}
      </h2>
      <p className="text-2xl md:text-3xl font-bold text-center mb-5">
        {shortDesc}
      </p>
      <div className="mb-5">
        <p className="text-2xl md:text-3xl font-bold mb-5">ScreenShots</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenShots.map((s, i) => (
            <img key={i} src={s} alt="" className="rounded-lg shadow-lg"></img>
          ))}
        </div>
      </div>
      <div>
        <p className="text-2xl md:text-3xl font-bold mt-10 mb-5">
          KeyFeatures:
        </p>
        <ul className="list-disc pl-5">
          <>
            {keyFeatures.map((k, i) => (
              <li key={i} className="text-lg">
                {k}
              </li>
            ))}
          </>
        </ul>
      </div>
      <div>
        <p className="text-2xl md:text-3xl font-bold my-5">Technologies Used</p>
        <div className="flex flex-wrap justify-between md:justify-start lg:justify-between items-center gap-2">
          {Technologies.map((t, i) => (
            <p
              key={i}
              className="text-lg font-bold p-3 border-2 border-black rounded-lg"
            >
              {t}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center py-10">
        <a href={liveSite} className="btn btn-primary mr-5">
          LiveSite<FiExternalLink className="text-xl ml-2"></FiExternalLink>
        </a>
        <a href={github} className="btn btn-primary">
          Github<BsGithub className="text-xl ml-2"></BsGithub>
        </a>
      </div>
    </div>
  );
};

export default Project;
