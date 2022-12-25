import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-black flex flex-col-reverse justify-center items-center p-3 md:p-10 min-h-screen">
      <div className="w-3/4 md:w-1/2 max-w-5xl flex justify-center items-center">
        <img
          className="w-full"
          src="https://i.ibb.co/gt7v4Q7/2108818.jpg"
          alt="oops an error ocurred"
        />
      </div>
      <div className="pb-10 flex justify-center items-center">
        <Link
          className="bg-white text-black font-bold text-lg md:text-2xl rounded-lg p-2 md:p-4 uppercase"
          to="/"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
