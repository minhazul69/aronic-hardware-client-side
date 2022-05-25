import { useState, useRef } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../../../Shared/Spinner/Spinner";

const EditProfile = () => {
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const phoneRef = useRef("");
  const educationRef = useRef("");
  const linkedinRef = useRef("");
  const facebookRef = useRef("");
  const addressRef = useRef("");

  const [user] = useAuthState(auth);
  // ADD PRODUCT
  const handleEditProfile = (e) => {
    e.preventDefault();
    const phone = phoneRef.current.value;
    const education = educationRef.current.value;
    const linkedin = linkedinRef.current.value;
    const facebook = facebookRef.current.value;
    const address = addressRef.current.value;

    if (isNaN(phone)) {
      return toast.error("Phone Is A Number Please Type Number");
    }
    if (!file || file === undefined) {
      return toast.error("Please Select Image And Try Again");
    }
    if (file.size >= 1000000) {
      console.log(file.size);
      return Swal.fire({
        icon: "info",
        text: "File size must not exceed 2000 KB",
      });
    }
    const image = file;
    console.log("image", image);
    setLoading(true);
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
          const addProduct = {
            name: user.displayName,
            email: user?.email,
            image,
            phone,
            education,
            linkedin,
            facebook,
            address,
          };
          fetch(`http://localhost:5000/userProfile/${user.email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(addProduct),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted) {
                setLoading(false);
                toast.success("Profile Update SuccessFull");
                e.target.reset();
                navigate("/dashboard/myProfile");
              } else {
                toast.error("Profile Update Fail Please Try Again");
              }
              console.log(inserted);
            });
        }
        console.log("Success:", result);
      });
  };
  // GET IMAGE FILE VALUE
  const handleUrlChange = (e) => {
    const [f] = e.target.files;
    setFile(f);
  };
  const { data: profile, isLoading } = useQuery("profile", () =>
    fetch(`http://localhost:5000/myProfile?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-yellow-400">
            Edit Product
          </h2>
          <form onSubmit={handleEditProfile}>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                value={user?.displayName}
                disabled
                placeholder="Enter Product Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="price" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={user?.email}
                disabled
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="address" className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                required
                placeholder={
                  profile[0] ? profile[0].address : " Enter Your Address"
                }
                id="address"
                ref={addressRef}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="phone" className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                required
                placeholder={
                  profile[0] ? profile[0].phone : "Enter Phone Number"
                }
                id="phone"
                ref={phoneRef}
                type="tel"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="education" className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                required
                placeholder={
                  profile[0] ? profile[0].education : "Enter Your Education"
                }
                id="education"
                ref={educationRef}
                type="tel"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="linkedin" className="label">
                <span className="label-text">Linkedin</span>
              </label>
              <input
                required
                placeholder={
                  profile[0]
                    ? profile[0].linkedin
                    : "Enter Linkedin Profile Link"
                }
                id="linkedin"
                ref={linkedinRef}
                type="tel"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="facebook" className="label">
                <span className="label-text">Facebook</span>
              </label>
              <input
                required
                placeholder={
                  profile[0]
                    ? profile[0].facebook
                    : "Enter Facebook Profile Link"
                }
                id="facebook"
                ref={facebookRef}
                type="tel"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex justify-center items-center w-full mt-6">
              <label
                for="dropzone-file"
                className="flex flex-col justify-center items-center w-full h-28 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6 ">
                  <svg
                    className="mb-3 w-10 h-10 text-gray-400"
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
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  onChange={handleUrlChange}
                  multiple={false}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
            <small className="text-red-500 text-left">
              File size must not exceed 2000 KB
            </small>
            <div className="divider">OR</div>
            <button type="submit" className="btn btn-warning ">
              Add Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
