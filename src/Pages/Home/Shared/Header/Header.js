import React from "react";
import logo from "../../../../img/footer-logo_300x300.webp";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navitem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="lg:px-40 mt-5">
      <div className="flex items-center justify-between">
        <Link to="/">
          {" "}
          <img className="w-40 lg:w-48" src={logo} alt="" />
        </Link>
        <div className="flex items-center">
          <li className="list-none mr-8">
            <NavLink to="/login">
              <i class="fa-solid fa-user pr-1"></i> Login
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/signUp">
              <i class="fa-solid fa-user-plus pr-1"></i> Sign Up
            </NavLink>
          </li>
        </div>
      </div>
      <div class="navbar bg-black">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navitem}
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex lg:flex-col">
          <ul class=" menu menu-horizontal p-0 text-white">{navitem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
