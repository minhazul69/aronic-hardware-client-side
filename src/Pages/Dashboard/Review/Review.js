import { useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import Spinner from "../../Shared/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const [isRadio, setIsRadio] = useState(5);
  const [rating, setRating] = useState(5);
  const [user] = useAuthState(auth);
  const [file, setFile] = useState();
  const countryRef = useRef("");
  const descriptionRef = useRef("");
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();
  // FIND TODAY DATE MONTH YEAR
  let dateObj = new Date();
  let shortMonth = dateObj.toLocaleString("en-us", { month: "short" });
  let myDate =
    shortMonth + " " + dateObj.getUTCDate() + "," + dateObj.getUTCFullYear();
  // ADD REVIEW
  const handleReviewSubmit = (e) => {
    setWaiting(true);
    e.preventDefault();
    const countryName = countryRef.current.value;
    const description = descriptionRef.current.value;
    if (!file || file === undefined) {
      return toast.error("Please Select Image And Try Again");
    }
    const image = file;
    console.log("image", image);
    const name = user?.displayName;
    const formData = new FormData();
    formData.append("image", image);
    const imageStorageKey = "fda6ab6214274b735172bdbc386ccc58";
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log(result.success);
          const image = result.data.url;
          console.log(image);
          const review = {
            image,
            name,
            myDate,
            countryName,
            rating,
            description,
          };
          fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.insertedId) {
                toast.success("Thanks For Adding Review ");
                navigate("/");
                e.target.reset();
              } else {
                toast.error("Review Add Fail Please Try Again");
              }
              console.log(inserted);
              setWaiting(false);
            });
        }
        console.log("Success:", result);
      });
  };
  // GET RATING VALUE
  const handleChange = (e) => {
    const star = e.currentTarget.value;
    setIsRadio(+star);
    setRating(star);
  };
  // GET IMAGE FILE VALUE
  const handleUrlChange = (e) => {
    const [f] = e.target.files;
    setFile(f);
  };

  if (waiting) {
    return <Spinner />;
  }
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
                required
                ref={countryRef}
                id="country"
                type="text"
                placeholder="Enter Your Country"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs mx-auto my-5">
              <label htmlFor="country" class="label">
                <span class="label-text">Rating</span>
              </label>
              <div class="rating rating-lg mx-auto">
                <input
                  type="radio"
                  name="rating-8"
                  id="radio1"
                  value="1"
                  onChange={handleChange}
                  checked={isRadio === 1}
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  id="radio2"
                  value="2"
                  onChange={handleChange}
                  checked={isRadio === 2}
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  id="radio3"
                  value="3"
                  onChange={handleChange}
                  checked={isRadio === 3}
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  id="radio4"
                  value="4"
                  onChange={handleChange}
                  checked={isRadio === 4}
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  id="radio5"
                  value="5"
                  onChange={handleChange}
                  checked={isRadio === 5}
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div class="form-control w-full max-w-xs">
              <label htmlFor="description" class="label">
                <span class="label-text">Your Comment</span>
              </label>
              <textarea
                required
                ref={descriptionRef}
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
                <input
                  onChange={handleUrlChange}
                  multiple={false}
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                />
              </label>
            </div>
            <div class="divider">OR</div>
            <button type="submit" class="btn btn-warning ">
              Add Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
