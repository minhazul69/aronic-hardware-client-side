import React from "react";
import logo from "../../../img/footer-logo_300x300.webp";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
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
    <div className="lg:px-36 mt-5">
      <div className="flex items-center justify-between">
        <Link to="/">
          {" "}
          <img className="w-40 lg:w-48" src={logo} alt="" />
        </Link>
        <div className="flex items-center">
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="btn btn-active btn-ghost mr-5"
            >
              <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i> Sign
              Out
            </button>
          ) : (
            <li className="list-none mr-8">
              <Link to="/login">
                <i className="fa-solid fa-user pr-1"></i> Login
              </Link>
            </li>
          )}
          <li className="list-none">
            <Link to="/signUp">
              <i className="fa-solid fa-user-plus pr-1"></i> Sign Up
            </Link>
          </li>
        </div>
      </div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex lg:flex-col">
          <ul className=" menu menu-horizontal p-0 text-white">{navItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
