import React from "react";
import laptopBazar from "../../../assets/img/laptop_bazar.jpg";
import rezaTravelAgent from "../../../assets/img/reza_travel_agent.jpg";
import rezaBrihi from "../../../assets/img/reza_brihi.jpg";
import ProjectCard from "./ProjectCard";

const projectCardData = [
  {
    id: 1,
    img: laptopBazar,
    title: "Laptop Bazar",
    shortDesc: "buy or sell used laptops online",
    liveSite: "https://laptop-bazar-4e5fd.web.app/",
    github:
      "https://github.com/Mohammad-Hidayat-Ullah-Reza/laptop_bazar-clients-repo",
  },
  {
    id: 2,
    img: rezaTravelAgent,
    title: "Reza Travel Agent",
    shortDesc: "find your dream location for travelling",
    liveSite: "https://traveller-blog-asignment-11.web.app/",
    github:
      "https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-Mohammad-Hidayat-Ullah-Reza",
  },
  {
    id: 3,
    img: rezaBrihi,
    title: "Reza Brihi",
    shortDesc: "learn your desired programming skill",
    liveSite: "https://rezabrihi-3ef1c.web.app/",
    github:
      "https://github.com/Mohammad-Hidayat-Ullah-Reza/reza_brihi-clients-repo",
  },
];

const ProjectsSection = () => {
  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold m-3 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectCardData.map((d) => (
          <ProjectCard key={d.id} data={d}></ProjectCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="btn btn-primary">Show All</button>
      </div>
    </div>
  );
};

export default ProjectsSection;
