import React from "react";
import "./MyPortfolio.css";

const MyPortfolio = () => {
  return (
    <div className="lg:px-12">
      <div className="card lg:card-side bg-base-100 mt-16 shadow-2xl lg:h-96">
        <figure className="lg:w-2/4 block">
          <img
            className="object-top w-full"
            src="https://i.ibb.co/wrYX1vC/IMG-7260-01.jpg"
            alt="Minhajul Alam"
          />
        </figure>
        <div className="card-body  lg:w-2/4 bg-base-200 justify-center content-center ">
          <h1 className="text-3xl lg:text-6xl font-bold text-left">
            Hi There !
          </h1>
          <p className="text-justify grow-0">
            Hi! I am Minhajul Alam.I'm learning web development. I have
            professional experience with programming languages and tools such as
            React, Redux, HTML, CSS, Sass, Bootstrap, javascript, ES6, Express
            Js, Material UI, and Firebase Auth to contribute features by writing
            and maintaining code. I also have experience in Photoshop, Node.js,
            JSON, WordPress, After Effects. I am highly motivated and
            enthusiastic, always with excellent attention to detail. I will give
            my best effort to achieve the best result. All tasks I try to carry
            out on time and in full. So if you have any questions or inputs,
            please don't hesitate to contact me.
          </p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-200  shadow-2xl lg:h-96">
        <div className="card-body  lg:w-2/4 bg-base-200 justify-center content-center">
          <p className="text-justify grow-0">
            Hi! I am Minhajul Alam.I'm learning web development. I have
            professional experience with programming languages and tools such as
            React, Redux, HTML, CSS, Sass, Bootstrap, javascript, ES6, Express
            Js, Material UI, and Firebase Auth to contribute features by writing
            and maintaining code. I also have experience in Photoshop, Node.js,
            JSON, WordPress, After Effects. I am highly motivated and
            enthusiastic, always with excellent attention to detail. I will give
            my best effort to achieve the best result. All tasks I try to carry
            out on time and in full. So if you have any questions or inputs,
            please don't hesitate to contact me.
          </p>
        </div>
        <div className="card-body  lg:w-2/4 bg-base-200 justify-center content-center ">
          <h1 className="text-3xl lg:text-4xl font-bold text-left border-b-2 pb-3 mb-2 border-amber-600">
            My Skill
          </h1>
          <div className="text-left">
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              HTML
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              CSS
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              BOOTsTRAP
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              TAILWIND
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              JAVASCRIPT
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              ES 6
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              REACT
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              NODE JS
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              EXPRESS JS
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              FIREBASE
            </button>
            <button class="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              MATERIAL UI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
