import React from "react";

const Review = ({ review }) => {
  const { name, img, country, description, date, rating } = review;
  return (
    <div class="card w-96 bg-base-100 shadow-xl px-6">
      <div class="card-body">
        <div className="flex items-center">
          <div class="avatar mr-3">
            <div class="w-16 rounded-full">
              <img src={img} alt={name} />
            </div>
          </div>
          <div>
            <h2 className="font-bold">{name}</h2>
            <h2 className="text-left text-primary">{country}</h2>
          </div>
        </div>
        <p className="text-left">``{description}``</p>
        <p className="text-left font-bold text-slate-400">{date}</p>
        <p className="text-left">
          <Rating ratings={rating}></Rating>
        </p>
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
