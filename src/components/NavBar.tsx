import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="">
      <div className=" flex flex-row justify-between px-5 align-middle text-blue-900">
        <div className="flex flex-row ">
          <img className=" h-16" src="/med-logo.png" alt="logo" />
          <div className="flex flex-col">
            <h2 className="mt-2 text-3xl">MediCare</h2>
            <h3 className="text-base font-thin text-gray-700">
              Dedication Beyond Measures
            </h3>
          </div>
        </div>
        <div className="flex flex-column justify-between mt-6 text-lg">
          <Link className="mr-4" to={"/"}>
            Home
          </Link>
          <Link className="mr-4" to={"/"}>
            About Us
          </Link>
          <Link className="mr-4" to={"/"}>
            Departments
          </Link>
          <Link to={"/"}>Testimonials</Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
