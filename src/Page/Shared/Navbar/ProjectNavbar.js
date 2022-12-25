import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectNavbar = () => {
  return (
    <div className="navbar bg-base-200 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/19EI1KNZZ_4mC8g59Ook04lYDWcTE3Z4d/view?usp=share_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Mohammad Hidayat
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/19EI1KNZZ_4mC8g59Ook04lYDWcTE3Z4d/view?usp=share_link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="../../../assets/pdf/mohammad_hidayat_ullah_reza_resume.pdf"
          className="btn"
          download="mohammad_hidayat_ullah_reza_resume.pdf"
        >
          Resume<FaFileDownload className="text-base ml-2"></FaFileDownload>{" "}
        </a>
      </div>
    </div>
  );
};

export default ProjectNavbar;
