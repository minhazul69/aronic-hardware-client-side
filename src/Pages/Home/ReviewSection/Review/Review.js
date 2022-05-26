import React from "react";

const Review = ({ review }) => {
  const { name, image, countryName, description, myDate, rating } = review;
  return (
    <div
      className="card w-full bg-base-100 shadow-xl px-6 "
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="card-body">
        <div className="flex items-center">
          <div className="avatar mr-3">
            <div className="w-16 rounded-full">
              <img src={image} alt={name} />
            </div>
          </div>
          <div>
            <h2 className="font-bold">{name}</h2>
            <h2 className="text-left text-primary">{countryName}</h2>
          </div>
        </div>
        <p className="text-left">``{description.slice(0, 120)}``</p>
        <p className="text-left font-bold text-slate-400">{myDate}</p>
        <div className="text-left">
          <Rating ratings={parseInt(rating)}></Rating>
        </div>
      </div>
    </div>
  );
};
export const Rating = ({ ratings }) => {
  if (ratings === 5) {
    return (
      <div className="text-yellow-500 icon">
        <div>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    );
  } else if (ratings === 4) {
    return (
      <div className="text-yellow-500 icon">
        <div>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
          </div>
        </div>
      </div>
    );
  } else if (ratings === 3) {
    return (
      <div className="text-yellow-500 icon">
        <div>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
          </div>
        </div>
      </div>
    );
  } else if (ratings === 2) {
    return (
      <div className="text-yellow-500 icon">
        <div>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
          </div>
        </div>
      </div>
    );
  } else if (ratings === 1) {
    return (
      <div className="text-yellow-500 icon">
        <div>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
          </div>
        </div>
      </div>
    );
  } else if (ratings) {
    return <p className="text-warning icon">No Rating</p>;
  }
  return <div></div>;
};
export default Review;
