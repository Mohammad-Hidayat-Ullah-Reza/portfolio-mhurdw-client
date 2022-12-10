import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ data }) => {
  const { img, title, shortDesc, liveSite, github } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-3">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-bold mb-4">{title}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions">
          <a href={liveSite} className="btn btn-primary" title="live site link">
            <FiExternalLink className="text-3xl"></FiExternalLink>
          </a>

          <a href={github} className="btn btn-primary" title="github link">
            <BsGithub className="text-3xl"></BsGithub>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
