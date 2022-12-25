import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Page/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
