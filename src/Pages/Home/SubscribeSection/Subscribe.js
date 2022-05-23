import React from "react";

const Subscribe = () => {
  return (
    <div className="hidden lg:block">
      <div className="bg-black grid grid-cols-2 py-10 my-10 ">
        <h2 className="text-white font-bold text-3xl">
          Get The Latest News And Updates
        </h2>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs border-0"
          />
          <button className="bg-yellow-400 btn border-0 btn-accent rounded-none ml-3 hover:bg-white">
            Submit <i className="fa-solid fa-paper-plane ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
