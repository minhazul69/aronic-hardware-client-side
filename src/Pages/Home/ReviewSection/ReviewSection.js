import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import Review from "./Review/Review";
const ReviewSection = () => {
  const { data: allReviews, isLoading } = useQuery("allReviews", () =>
    fetch("https://polar-journey-11488.herokuapp.com/review", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  const latestReview = [...allReviews].splice(
    allReviews.length - 3,
    allReviews.length
  );
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 lg:mx-0 mx-3  gap-4 lg:px-12 place-items-center my-10">
      {allReviews &&
        latestReview
          .slice(0, 3)
          .map((review) => <Review review={review} key={review._id} />)}
    </div>
  );
};
export default ReviewSection;
