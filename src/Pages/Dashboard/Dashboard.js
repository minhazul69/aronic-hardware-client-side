import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="lg:px-12">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-dropdown"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col ">
          <h2 className="text-3xl font-bold text-purple-700 text-center my-10">
            Welcome To Dashboard
          </h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-dropdown"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Add Review</Link>
            </li>
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/allUer">All User</Link>
            </li>
            <li>
              <Link to="/dashboard/addProduct">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/manageProduct">Manage Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
