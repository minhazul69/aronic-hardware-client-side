import React from "react";
import offerImg1 from "../../../img/img5_770x.webp";
import offerImg2 from "../../../img/img6_770x.webp";

const Offer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-12 gap-4 mt-10">
      <div class="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={offerImg1} alt="Shoes" />
        </figure>
        <div class="card-body mt-5">
          <h2 className="font-bold text-2xl text-right">Best Offer Today !!</h2>
          <span className="text-xl text-right bg-warning w-50 ml-auto p-2 text-black">
            Best Offer Today !
          </span>
          <h2 className=" text-2xl text-right">
            <span className="text-red-500"> 30%</span> off New Trending
          </h2>
          <div className="text-right">
            <button class="btn btn-warning hover:bg-black hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={offerImg2} alt="Shoes" />
        </figure>
        <div class="card-body mt-5">
          <h2 className="font-bold text-2xl text-right">Plumber’s Picks!</h2>
          <span className="text-xl text-right bg-warning w-70 ml-auto p-2 text-black">
            LIMITED STOCK OFFERS
          </span>
          <h2 className=" text-2xl text-right">
            <span className="text-red-500"> 42%</span> off Best Deals
          </h2>
          <div className="text-right">
            <button class="btn btn-warning hover:bg-black hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;