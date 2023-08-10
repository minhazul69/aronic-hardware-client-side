import { useState, useRef } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Spinner from "../../Shared/Spinner/Spinner";

const AddProduct = () => {
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const nameRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");
  const descriptionRef = useRef("");
  // ADD PRODUCT
  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const description = descriptionRef.current.value;
    if (isNaN(price)) {
      return toast.error("Price Must Be A Number");
    }
    if (isNaN(quantity)) {
      return toast.error("Quantity Must Be A Number");
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
            image,
            name,
            price,
            description,
            quantity,
          };
          fetch("https://aronic-hardware.onrender.com/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(addProduct),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.insertedId) {
                setLoading(false);
                toast.success("Product Added SuccessFull");
                e.target.reset();
              } else {
                setLoading(false);
                toast.error("Product Add Fail Please Try Again");
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
  // SPINNER USES
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl mx-auto my-10">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-yellow-400">
            Add Product
          </h2>
          <form onSubmit={handleAddProduct}>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                id="name"
                type="text"
                placeholder="Enter Product Name"
                ref={nameRef}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="price" className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                required
                placeholder="Enter Product Price"
                id="price"
                ref={priceRef}
                type="tel"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="quantity" className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                required
                placeholder="Enter Product Quantity"
                id="quantity"
                ref={quantityRef}
                type="tel"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="description" className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                required
                ref={descriptionRef}
                id="description"
                className="textarea textarea-primary h-40"
                placeholder="Enter Product Description"
              ></textarea>
            </div>
            <div className="flex justify-center items-center w-full mt-6">
              <label
                htmlFor="dropzone-file"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
