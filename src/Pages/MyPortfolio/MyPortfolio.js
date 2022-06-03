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
            Hi! I am <span className="font-bold">Minhajul Alam</span>.I'm
            learning web development. I have professional experience with
            programming languages and tools such as HTML, CSS, Bootstrap, ect.
            contribute features by writing and maintaining code. I am highly
            motivated and enthusiastic, always with excellent attention to
            detail. I will give my best effort to achieve the best result. All
            tasks I try to carry out on time and in full. So if you have any
            questions or inputs, please don't hesitate to contact me.
          </p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-200 shadow-2xl py-14">
        <div className="card-body w-full lg:w-2/4 bg-base-200 justify-center content-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-left border-b-2 pb-2 border-yellow-400">
            My Information
          </h1>
          <div className="text-left">
            <div className="mt-5">
              <p className="text-1xl font-bold text-yellow-400">Name:</p>
              <h2 className="text-xl lg:text-2xl font-bold">Minhajul Alam</h2>
            </div>
            <div className="mt-6">
              <p className="text-1xl font-bold text-yellow-400">Email:</p>
              <h2 className="text-xl lg:text-2xl font-bold">
                <a href="mailto:akibchowdhurydev@gmail.com">
                  akibchowdhurydev@gmail.com
                </a>
              </h2>
            </div>
            <div className="mt-6">
              <p className="text-1xl font-bold text-yellow-400">Mobile:</p>
              <h2 className="text-xl lg:text-2xl font-bold">
                <a href="tel:01889202448">01889202448</a>
              </h2>
            </div>
            <div className="mt-6">
              <p className="text-1xl font-bold text-yellow-400">Education:</p>
              <h2 className="text-xl lg:text-2xl font-bold">
                Nazirhat University College
              </h2>
            </div>
            <div className="mt-6">
              <p className="text-1xl font-bold text-yellow-400">Location:</p>
              <h2 className="text-xl lg:text-2xl font-bold">
                Fatikchhari, Chattogram, Bangladesh
              </h2>
            </div>
            <div className="mt-6">
              <p className="text-1xl font-bold text-yellow-400">Linkedin:</p>
              <h2 className="text-xl lg:text-2xl font-bold">
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/akib-chy/"
                  target="_blank"
                >
                  Akib Chowdhury
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-body  lg:w-2/4 bg-base-200 justify-center content-center ">
          <h1 className="text-3xl lg:text-4xl font-bold text-left border-b-2 pb-3 mb-2 border-amber-600 text-yellow-400">
            My Skill
          </h1>
          <div className="text-left">
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              HTML
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              CSS
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              BOOTsTRAP
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              TAILWIND
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              JAVASCRIPT
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              ES 6
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              REACT
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              NODE JS
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              EXPRESS JS
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              FIREBASE
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              MATERIAL UI
            </button>
            <button className="btn btn-outline btn-sm mr-2 mb-2 font-bold">
              MONGO DB
            </button>
          </div>
        </div>
      </div>
      <h2
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-3xl font-bold text-yellow-400 mt-16"
      >
        Our Portfolio
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4  mx-3 lg:mx-0 pt-7">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <a target="_black" href="https://combo-immigration.web.app/">
              <img
                className="w-full"
                src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/626623293dfcf03850b51835/screenshot_2022-04-25-04-27-52-0000.png"
                alt="Shoes"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-primary">
              Comgo Immigration
            </h2>
            <p>
              Full React Website. This Website Uses React, MongoDB, Firebase ,
              Express js, Animation AOS and Etc.
            </p>
            <div className="flex justify-between mt-3">
              <a
                rel="noreferrer"
                className="btn btn-outline btn-primary font-bold text-white mt-2"
                target="_blank"
                href="https://combo-immigration.web.app/"
              >
                Live Preview
              </a>
              <a
                rel="noreferrer"
                className="btn btn-outline btn-secondary font-bold text-white mt-2"
                target="_blank"
                href="https://github.com/akib-chy/comgo-immigration-with-react"
              >
                GITHUB CODE
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <a target="_black" href="https://ema-jhons-shoping.netlify.app/">
              <img
                className="w-full"
                src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6279454bcc596100bc5140c1/screenshot_2022-05-09-16-46-13-0000.png"
                alt="Shoes"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-primary">
              Ema John Shopping
            </h2>
            <p>
              Full React Website. This Website Uses React, MongoDB, Firebase ,
              Express js and Etc.
            </p>
            <div className="flex justify-between mt-3">
              <a
                rel="noreferrer"
                className="btn btn-outline btn-primary font-bold text-white mt-2"
                target="_blank"
                href="https://ema-jhons-shoping.netlify.app/"
              >
                Live Preview
              </a>
              <a
                rel="noreferrer"
                className="btn btn-outline btn-secondary font-bold text-white mt-2"
                target="_blank"
                href="https://github.com/akib-chy/ema-john-shoping"
              >
                GITHUB CODE
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <a target="_black" href="https://asifzone.netlify.app/">
              <img
                className="w-full"
                src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/614b07fa12f1159ff3d75248/screenshot_2021-09-22-10-39-57-0000.png"
                alt="Shoes"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-primary">Asif Zone</h2>
            <p>
              Full Bootstrap Website. This Website Uses HTML, CSS, Bootstrap and
              Etc.
            </p>
            <div className="flex justify-between mt-3">
              <a
                rel="noreferrer"
                className="btn btn-outline btn-primary font-bold text-white mt-2"
                target="_blank"
                href="https://asifzone.netlify.app/"
              >
                Live Preview
              </a>
              <a
                rel="noreferrer"
                className="btn btn-outline btn-secondary font-bold text-white mt-2"
                target="_blank"
                href="https://github.com/akib-chy/asifzone"
              >
                GITHUB CODE
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <a target="_black" href="https://food-akib.netlify.app/">
              <img
                className="w-full"
                src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/61482574d1832a471b13e782/screenshot_2021-09-20-06-08-58-0000.png"
                alt="Shoes"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-primary">Healthy Food</h2>
            <p>
              Full Javascript Website. This Website Uses Javascript, Bootstrap,
              HTML, CSS and Etc.
            </p>
            <div className="flex justify-between mt-3">
              <a
                rel="noreferrer"
                className="btn btn-outline btn-primary font-bold text-white mt-2"
                target="_blank"
                href="https://food-akib.netlify.app/"
              >
                Live Preview
              </a>
              <a
                rel="noreferrer"
                className="btn btn-outline btn-secondary font-bold text-white mt-2"
                target="_blank"
                href="https://github.com/akib-chy/My-Awesome-Food-Store-Project"
              >
                GITHUB CODE
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <a target="_black" href="https://bata-shop.netlify.app/">
              <img
                className="w-full"
                src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/624e6e0979576d1d2b3f1190/screenshot_2022-04-07-04-52-33-0000.png"
                alt="Shoes"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-primary">Bata Shop</h2>
            <p>
              Full React Website. This Website Uses React, Javascript ,and Etc.
            </p>
            <div className="flex justify-between mt-3">
              <a
                rel="noreferrer"
                className="btn btn-outline btn-primary font-bold text-white mt-2"
                target="_blank"
                href="https://bata-shop.netlify.app/"
              >
                Live Preview
              </a>
              <a
                rel="noreferrer"
                className="btn btn-outline btn-secondary font-bold text-white mt-2"
                target="_blank"
                href="https://github.com/akib-chy/bata-shop-with-react"
              >
                GITHUB CODE
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure>
            <a target="_black" href="https://simple-houses.netlify.app/">
              <img
                className="w-full"
                src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/622f545f62f15b2461c4f952/screenshot_2022-03-14-14-42-48-0000.png"
                alt="Shoes"
              />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-primary">Simple House</h2>
            <p>
              Full Bootstrap Website. This Website uses Bootstrap,CSS,
              Javascript and Etc.
            </p>
            <div className="flex justify-between mt-3">
              <a
                rel="noreferrer"
                className="btn btn-outline btn-primary font-bold text-white mt-2"
                target="_blank"
                href="https://simple-houses.netlify.app/"
              >
                Live Preview
              </a>
              <a
                rel="noreferrer"
                className="btn btn-outline btn-secondary font-bold text-white mt-2"
                target="_blank"
                href="https://github.com/akib-chy/simple-house-templet"
              >
                GITHUB CODE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
