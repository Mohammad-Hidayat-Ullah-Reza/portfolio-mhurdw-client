import React from "react";
import { Outlet } from "react-router-dom";
import ProjectNavbar from "../../Page/Shared/Navbar/ProjectNavbar";

const AllProjects = () => {
  return (
    <div>
      <ProjectNavbar></ProjectNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AllProjects;
