import React from "react";
import logo from "../../../img/footer-logo_300x300.webp";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import "./Header.css";
import Spinner from "../Spinner/Spinner";
import { useQuery } from "react-query";
const Header = () => {
  const [user] = useAuthState(auth);
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProduct">All Product</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      <li>
        {" "}
        <NavLink to="/myPortfolio">My Portfolio</NavLink>
      </li>
    </>
  );
  const noImg =
    "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
  const { data: profile, isLoading } = useQuery("profile", () =>
    fetch(`http://localhost:5000/myProfile?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="lg:px-36 mt-5">
      <div className="flex items-center justify-between">
        <Link to="/">
          {" "}
          <img className="w-40 lg:w-48" src={logo} alt="" />
        </Link>
        <div className="flex items-center">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div className="avatar hover:cursor-pointer" tabIndex="5">
                  <div className="w-12 rounded-full mr-2 border-2 border-yellow-400">
                    <img
                      className="object-top "
                      src={profile[0] ? profile[0].image : noImg}
                      alt={user?.displayName}
                    />
                  </div>
                </div>
                <div
                  tabIndex="5"
                  className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-60 mt-3 pb-2"
                >
                  <div className="avatar mx-auto my-3">
                    <div className="w-24 rounded-full">
                      <img
                        className="object-top"
                        src={profile[0] ? profile[0].image : noImg}
                        alt={user?.displayName}
                      />
                    </div>
                  </div>
                  <h2 className="font-bold text-primary mb-3">
                    {user?.displayName}
                  </h2>
                  {profile[0] ? (
                    <div className="px-1 bg-white rounded-xl">
                      <div className="text-left mt-4 bg-white p-3 rounded-xl">
                        <p className="text-yellow-400 font-bold">Email:</p>
                        <h2 className="font-bold">
                          <small>{user?.email}</small>
                        </h2>
                      </div>
                      <div className="text-left bg-white p-3 rounded-xl">
                        <p className="text-yellow-400 font-bold">Phone:</p>
                        <h2 className="font-bold">
                          <small>{profile[0].phone}</small>
                        </h2>
                      </div>

                      <Link
                        className="btn btn-primary btn-sm w-full mt-4 "
                        to="/dashboard/myProfile"
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="btn w-full btn-link text-left mt-2 hover:no-underline btn-sm mr-3"
                      >
                        <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>{" "}
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-left mt-4 bg-white p-3 rounded-xl">
                        <p className="text-yellow-400 font-bold">Email:</p>
                        <h2 className="font-bold">
                          <small>{user?.email}</small>
                        </h2>
                      </div>
                      <Link
                        className="btn btn-warning btn-sm w-full mt-4 "
                        to="/editProfile"
                      >
                        Edit Profile
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="btn w-full btn-sm mr-3 btn-link text-left mt-2 hover:no-underline"
                      >
                        <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>{" "}
                        Sign Out
                      </button>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <li className="list-none mr-8">
                <Link to="/login">
                  <i className="fa-solid fa-user pr-1"></i> Login
                </Link>
              </li>
              <li className="list-none">
                <Link to="/signUp">
                  <i className="fa-solid fa-user-plus pr-1"></i> Sign Up
                </Link>
              </li>
            </>
          )}
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
        {user && (
          <div className="navbar-end">
            <label
              htmlFor="dashboard-dropdown"
              tabIndex="1"
              className="btn btn-ghost lg:hidden"
            >
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
