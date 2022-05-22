import React from "react";
import Review from "./Review/Review";
const ReviewSection = () => {
  const allReviews = [
    {
      _id: 1,
      name: "Robart Martin",
      country: "Bangladesh",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, tenetur culpa maxime cupiditate reiciendis veritatis mollitia? Nesciunt obcaecati et perspiciatis!",
      img: "https://diviultimate.com/wp-content/uploads/2017/01/client-3.jpg",
      date: "Jan 25, 2017",
      rating: 4,
    },
    {
      _id: 2,
      name: "Robart Martin",
      country: "Bangladesh",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, tenetur culpa maxime cupiditate reiciendis veritatis mollitia? Nesciunt obcaecati et perspiciatis!",
      img: "https://diviultimate.com/wp-content/uploads/2017/01/client-3.jpg",
      date: "Jan 25, 2017",
      rating: 3,
    },
    {
      _id: 3,
      name: "Robart Martin",
      country: "Bangladesh",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, tenetur culpa maxime cupiditate reiciendis veritatis mollitia? Nesciunt obcaecati et perspiciatis!",
      img: "https://diviultimate.com/wp-content/uploads/2017/01/client-3.jpg",
      date: "Jan 25, 2017",
      rating: 5,
    },
  ];
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 lg:px-12 place-items-center my-10">
      {allReviews.map((review) => (
        <Review review={review} key={review._id} />
      ))}
    </div>
  );
};

export default ReviewSection;
