import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaPlus, FaUserPlus, FaGripHorizontal, FaReadme } from "react-icons/fa";

const DashBoard = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 mt-3 gap-3">
        <Link
          to="/dashboard"
          className="btn btn-primary text-primary text-white mr-3"
        >
          <FaUserPlus className="text-2xl mr-2"></FaUserPlus>
          Admin Make Admin
        </Link>
        <Link
          to="addservices"
          className="btn btn-primary text-primary text-white mr-3 "
        >
          <FaPlus className="text-2xl mr-2"></FaPlus>
          Admin Add service
        </Link>
        <Link
          to="manageservice"
          className="btn btn-primary text-primary text-white"
        >
          <FaGripHorizontal className="text-2xl mr-2"></FaGripHorizontal>
          Admin Manage Services
        </Link>
        <Link to="message" className="btn btn-primary text-primary text-white">
          <FaReadme className="text-2xl mr-2"></FaReadme>
          Message List
        </Link>
      </div>
      <h1 className="font-bold text-4xl text-center text-primary mt-6">
        Welcome To Dashboard!
      </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default DashBoard;
