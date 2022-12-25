import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  //   const [projectsData, setProjectsData] = useState();

  //   useEffect(() => {
  //     fetch("./projects.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setProjectsData(data);
  //       })
  //       .catch((e) => console.log(e));
  //   }, []);

  return (
    <div>
      <h2 className="text-5xl font-bold">All Projects</h2>

      {/* {projectsData && projectsData.length > 0 && (
        <>
          <Project projectData={projectsData[0]}></Project>
          <Project projectData={projectsData[1]}></Project>
          <Project projectData={projectsData[2]}></Project>
        </>
      )} */}
    </div>
  );
};

export default Projects;
