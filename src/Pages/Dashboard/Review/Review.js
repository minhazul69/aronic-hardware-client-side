import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Review = () => {
  const [user] = useAuthState(auth);
  const handleReviewSubmit = (e) => {
    e.preventDefault();
  };
  let dateObj = new Date();
  let shortMonth = dateObj.toLocaleString("en-us", { month: "short" });
  let myDate =
    shortMonth + " " + dateObj.getUTCDate() + "," + dateObj.getUTCFullYear();

  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mx-auto my-10">
        <div class="card-body">
          <h2 class="text-center font-bold text-2xl text-yellow-400">
            Add Review
          </h2>
          <form onSubmit={handleReviewSubmit}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                value={user?.displayName}
                disabled
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Date</span>
              </label>
              <input
                value={myDate}
                disabled
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label htmlFor="country" class="label">
                <span class="label-text">Country Name</span>
              </label>
              <input
                id="country"
                type="text"
                placeholder="Enter Your Country"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label htmlFor="country" class="label">
                <span class="label-text">Rating</span>
              </label>
              <div class="rating rating-lg">
                <input type="radio" name="rating-9" class="rating-hidden" />
                <input type="radio" name="rating-9" class="mask mask-star-2" />
                <input
                  type="radio"
                  name="rating-9"
                  class="mask mask-star-2"
                  checked
                />
                <input type="radio" name="rating-9" class="mask mask-star-2" />
                <input type="radio" name="rating-9" class="mask mask-star-2" />
                <input type="radio" name="rating-9" class="mask mask-star-2" />
              </div>
            </div>
            <div class="form-control w-full max-w-xs">
              <label htmlFor="description" class="label">
                <span class="label-text">Your Comment</span>
              </label>
              <textarea
                id="description"
                class="textarea textarea-primary h-40"
                placeholder="Enter Comment"
              ></textarea>
            </div>
            <div class="flex justify-center items-center w-full mt-6">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-28 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col justify-center items-center pt-5 pb-6 ">
                  <svg
                    class="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
