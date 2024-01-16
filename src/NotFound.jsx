import React from "react";
import { Link } from "react-router-dom";
import { LuAlertTriangle } from "react-icons/lu";
import Footer from "./components/shared/Footer";

const NotFound = () => {
  return (
    <div className="text-center mt-8 	">
      <p className="text-2xl font-semibold">404 - Not Found</p>
      <div className="">
        <LuAlertTriangle size={280} className="m-auto" />
        <p className="text-lg">something went wrong</p>
        <p className="mt-4 text-xl">Please refresh the page, or try again</p>
      </div>
      <Link to="/">
        <button className=" bg-yellow-500 border-2 border-black rounded-2xl py-3 px-40 mt-4 hover:bg-yellow-400 font-semibold text-xl">
          {" "}
          Go back to home{" "}
        </button>
      </Link>
      <Footer />
    </div>
  );
};
export default NotFound;
