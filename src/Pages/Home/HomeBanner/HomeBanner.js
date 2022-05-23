import React from "react";
import bannerImg1 from "../../../img/slider-1.webp";
import bannerImg2 from "../../../img/slider2.webp";
import bannerImg3 from "../../../img/slider3.webp";

const HomeBanner = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative bg-base-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src={bannerImg1}
              className="block w-full"
              alt="Motorbike Smoke"
            />
            <div className="carousel-caption hidden md:block absolute text-center bg-base-200 bg-opacity-75 rounded mb-28">
              <h1 className="text-4xl font-bold">Modern Power Tools</h1>
              <h5 className="text-2xl text-red-500">
                Hardware Equipments & Accessories Shop!
              </h5>
              <p>
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapi bus. Vivamus elementum semper nisi.
              </p>
              <button className="btn btn-active btn-warning px-5 mt-3">
                Shop Now
              </button>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img src={bannerImg2} className="block w-full" alt="Mountaintop" />
            <div className="carousel-caption hidden md:block absolute text-center bg-base-200 bg-opacity-75 rounded mb-28">
              <h1 className="text-4xl font-bold">Power Tool Accessories</h1>
              <h5 className="text-2xl text-red-500">Cordless Power Tools</h5>
              <p>
                Consequat semper viverra nam libero. Neque convallis a cras
                semper proin libero nunc sed rit acreco sit amet auctor.
              </p>
              <button className="btn btn-active btn-success px-5 mt-3">
                Shop Now
              </button>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src={bannerImg3}
              className="block w-full"
              alt="Woman Reading a Book"
            />
            <div className="carousel-caption hidden md:block absolute text-center bg-base-200 bg-opacity-75 rounded mb-28">
              <h1 className="text-4xl font-bold">Support & Service</h1>
              <h5 className="text-2xl text-red-500">Power Tool Attachments</h5>
              <p>
                Fames ac turpis egestas integer eget aliquet nibh praesent.
                Laoreet non curabitur gravida arcu ac tortor dignissim
                convallis.
              </p>
              <button className="btn btn-active btn-primary px-5 mt-3">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
