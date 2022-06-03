import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../../Shared/Spinner/Spinner";
import { useQuery } from "react-query";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { data: profile, isLoading } = useQuery("profile", () =>
    fetch(
      `https://polar-journey-11488.herokuapp.com/myProfile?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }

  const noImg =
    "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
  return (
    <div>
      <div className="card lg:w-2/4  shadow-xl mx-auto bg-base-200">
        <div className="card-body">
          <h2 className="text-center font-bold text-xl text-yellow-400">
            Update Profile
          </h2>
          <div className="mt-10">
            <div className="avatar online  mb-7">
              <div className="w-24 rounded-full">
                <img
                  className="object-top "
                  src={profile[0] ? profile[0].image : noImg}
                  alt={user.display}
                />
              </div>
            </div>
            <div className="text-left rounded-xl p-5 bg-white">
              <h2 className="mt-7">
                <span className="text-yellow-400 font-bold mr-1"> Name: </span>{" "}
                <br />
                <span className="font-bold text-xl"> {user?.displayName}</span>
              </h2>
              <h2 className="mt-7">
                <span className="text-yellow-400 font-bold mr-1"> Email: </span>
                <br />
                <span className="font-bold text-xl"> {user?.email}</span>
              </h2>
              <h2 className="mt-7">
                <span className="text-yellow-400 font-bold mr-1">
                  {" "}
                  Address:{" "}
                </span>
                <br />
                <span className="font-bold text-xl">
                  {profile[0] ? profile[0].address : "Please Add Your Address"}
                </span>
              </h2>
              <h2 className="mt-7">
                <span className="text-yellow-400 font-bold mr-1"> Phone: </span>
                <br />
                <span className="font-bold text-xl">
                  {" "}
                  {profile[0]
                    ? profile[0].phone
                    : "Please Add Your Phone Number"}
                </span>
              </h2>
              <h2 className="mt-7">
                <span className="text-yellow-400 font-bold mr-1">
                  {" "}
                  Education:{" "}
                </span>
                <br />
                <span className="font-bold text-xl">
                  {" "}
                  {profile[0]
                    ? profile[0].education
                    : "Please Add Your Education"}
                </span>
              </h2>
              <h2 className="mt-7">
                <span className="text-yellow-400 font-bold mr-1">
                  {" "}
                  Linkedin:{" "}
                </span>
                <br />
                <span className="font-bold text-xl">
                  {" "}
                  {profile[0]
                    ? profile[0].linkedin
                    : "Please Add Your Linkedin Profile Link"}
                </span>
              </h2>
              <h2 className="mt-7 mb-7">
                <span className="text-yellow-400 font-bold mr-1">
                  {" "}
                  Facebook:{" "}
                </span>
                <br />
                <span className="font-bold text-xl">
                  {" "}
                  {profile[0]
                    ? profile[0].facebook
                    : "Please Add Your Facebook Profile Link"}
                </span>
              </h2>
            </div>
          </div>
          <div className="card-actions justify-center mt-4">
            <Link to="/editProfile" className="btn btn-warning">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
