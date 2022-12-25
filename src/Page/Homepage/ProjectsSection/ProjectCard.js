import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({ data, setButtonId }) => {
  const { id, img, title, shortDesc, liveSite, github } = data;

  return (
    <div
      className="card max-w-96 bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-1"
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl md:text-3xl font-bold">{title}</h2>
        <p>{shortDesc}</p>
        <div className="card-actions mt-4">
          <a href={liveSite} className="btn btn-primary" title="live site link">
            <FiExternalLink className="text-3xl"></FiExternalLink>
          </a>

          <a href={github} className="btn btn-primary" title="github link">
            <BsGithub className="text-3xl"></BsGithub>
          </a>
        </div>
        <div className="w-full mt-4">
          <Link to={`/allProjects/project/${id}`} className="btn btn-block">
            See Project Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
