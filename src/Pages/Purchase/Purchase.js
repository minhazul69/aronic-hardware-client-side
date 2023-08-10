import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Shared/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Purchase = () => {
  // PRODUCT PURCHASE VALUE
  const quantityRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  // PRODUCT EDIT VALUE
  const editNameRef = useRef("");
  const editQuantityRef = useRef("");
  const editPriceRef = useRef("");
  const editDescriptionRef = useRef("");
  const [fileImage, setFileImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const { productId } = useParams();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  const [process, setProcess] = useState(false);
  const {
    data: productDetails,
    isLoading,
    refetch,
  } = useQuery("productId", () =>
    fetch(`https://aronic-hardware.onrender.com/product/${productId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 403 || res.status === 401) {
        signOut(auth);
        navigate("/");
        toast.error("Your Status Is Forbidden Please Login Again");
        return;
      }
      return res.json();
    })
  );
  if (isLoading || process) {
    return <Spinner />;
  }
  const { name, image, description, price, quantity } = productDetails;
  const handleOrderQuantity = (e) => {
    e.preventDefault();
    const orderProduct = quantityRef.current.value;
    console.log(orderProduct);
    const phone = quantityRef.current.value;
    const address = quantityRef.current.value;
    if (!phone || !address || !orderProduct) {
      return toast.error("Please Type A Quantity");
    }
    if (isNaN(phone) || isNaN(orderProduct)) {
      return toast.error("Is Not A Number Please Type A Number");
    }
    if (orderProduct < 100) {
      return toast.error("Please Order Over 100");
    }
    console.log(orderProduct, quantity);
    if (orderProduct > quantity) {
      console.log(orderProduct, quantity);
      return toast.error(
        "Your Order Quantity Must Be Less Then Available Quantity"
      );
    }
    setProcess(true);
    const totalPrice = parseInt(price) * parseInt(orderProduct);
    const newQuantity = quantity - orderProduct;
    const email = user?.email;
    const order = {
      email,
      name,
      image,
      description,
      price: totalPrice,
      orderProduct,
      phone,
      address,
    };
    console.log(order);
    fetch("https://aronic-hardware.onrender.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          const updateUser = { quantity: newQuantity };
          const url = `https://aronic-hardware.onrender.com/product/${productId}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                toast.success("Your Order Added SuccessFull");
                e.target.reset();
                refetch();
                console.log(data);
                setProcess(false);
              }
            });
        }
      });
  };

  let updateImage = "";
  const handleQuantityAdd = async (e) => {
    e.preventDefault();
    const updatedName = editNameRef.current.value;
    const updatedPrice = editPriceRef.current.value;
    const updatedQuantity = editQuantityRef.current.value;
    const updatedDescription = editDescriptionRef.current.value;
    let updateName;
    let updatePrice;
    let updateQuantity;
    let updateDescription;
    if (fileImage?.size > 1000000) {
      console.log(fileImage.size);
      return toast.error("Image Must Be less Then 1000kb");
    }
    // CHECK UPDATE NAME
    if (updatedName.length === 0) {
      updateName = name;
    } else {
      updateName = updatedName;
    }
    // CHECK UPDATE PRICE
    if (updatedPrice.length === 0) {
      updatePrice = price;
    } else {
      updatePrice = updatedPrice;
    }
    // CHECK UPDATE QUANTITY
    if (updatedQuantity.length === 0) {
      updateQuantity = quantity;
    } else {
      updateQuantity = updatedQuantity;
    }
    // CHECK UPDATE DESCRIPTION
    if (updatedDescription.length === 0) {
      updateDescription = description;
    } else {
      updateDescription = updatedDescription;
    }
    // CHECK UPDATE IMAGE
    if (fileImage === undefined) {
      // updateImage = image;
      setImageUrl(image);
    } else {
      setProcess(true);
      const formData = new FormData();
      formData.append("image", fileImage);
      const imageStorageKey = "fda6ab6214274b735172bdbc386ccc58";
      const imgbbURL = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(imgbbURL, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            setImageUrl(result.data.url);
          }
          console.log(result);
        });
    }

    if (isNaN(updateQuantity)) {
      setProcess(false);
      return toast.error("Quantity Is Not A Number Please Type Number");
    }
    if (isNaN(updatePrice)) {
      setProcess(false);
      return toast.error("This Is Not A Number Please Type Number");
    }

    const updateProduct = {
      name: updateName,
      price: updatePrice,
      quantity: updateQuantity,
      description: updateDescription,
      image: imageUrl || image,
    };
    const url = `https://aronic-hardware.onrender.com/updateProduct/${productId}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setProcess(false);
          refetch();
          toast.success("Product Update SuccessFully");
          e.target.reset();
          console.log(data);
        }
      });
    console.log(updateProduct);
  };
  // GET IMAGE FILE VALUE
  const handleUrlChange = (e) => {
    const [f] = e.target.files;
    setFileImage(f);
  };
  return (
    <div className="lg:px-12">
      <div className="card lg:card-side bg-base-100 my-16 shadow-2xl">
        <figure className="lg:w-2/4">
          <img src={image} alt={name} />
        </figure>
        <div className="card-body  lg:w-2/4 bg-base-200 justify-center">
          <h2 className="text-center text-2xl lg:text-5xl font-bold mb-4">
            {name}
          </h2>
          <h3 className="font-bold text-xl text-red-500">Price: ${price}</h3>
          <h3>{description}</h3>
          {quantity === 0 ? (
            <h2 className="font-bold text-xl text-red-600">Product Sold</h2>
          ) : (
            <>
              <h3 className="text-1xl text-yellow-400 font-bold mt-3">
                {" "}
                Available Quantity: {quantity}
              </h3>
            </>
          )}
          <form onSubmit={handleOrderQuantity}>
            {quantity === 0 ? (
              ""
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-5">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      className="input input-bordered w-full max-w-xs border-0"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      ref={addressRef}
                      type="text"
                      placeholder="Enter Your Address"
                      className="input input-bordered w-full max-w-xs border-0"
                    />
                  </div>
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                  <label htmlFor="quantity" className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    id="quantity"
                    ref={quantityRef}
                    type="number"
                    placeholder="Type Quantity"
                    className="input input-bordered w-full max-w-xs border-0"
                  />
                  <p className="text-red-500 font-bold mt-1">
                    Minimum Order Quantity: 100
                  </p>
                </div>
              </>
            )}
            <div className="card-actions justify-center mt-10">
              {quantity === 0 ? (
                <button className="btn bg-red-400 btn-wide" disabled>
                  Sold
                </button>
              ) : (
                <button
                  disabled={admin}
                  type="submit"
                  className="btn btn-primary"
                >
                  Purchase Now
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {admin && (
        <div className="card w-96 bg-base-100 shadow-2xl mx-auto">
          <div className="card-body">
            <h2 className="text-center text-yellow-400 text-3xl font-bold">
              Edit Product
            </h2>
            <form onSubmit={handleQuantityAdd}>
              {/* EDIT NAME */}
              <div className="mb-4">
                <label htmlFor="name" className="label">
                  <span className="label-text">Edit Product Name</span>
                </label>
                <input
                  id="name"
                  ref={editNameRef}
                  type="text"
                  placeholder={name}
                  className="input input-bordered w-full max-w-xs border-primary"
                />
              </div>
              {/* EDIT PRICE */}
              <div className="mb-4">
                <label htmlFor="price" className="label">
                  <span className="label-text">Edit Product Price</span>
                </label>
                <input
                  id="price"
                  ref={editPriceRef}
                  type="number"
                  placeholder={price}
                  className="input input-bordered w-full max-w-xs border-primary"
                />
              </div>
              {/* EDIT QUANTITY */}
              <div className="mb-4">
                <label htmlFor="editQuantity" className="label">
                  <span className="label-text">Edit Product Quantity</span>
                </label>
                <input
                  id="editQuantity"
                  ref={editQuantityRef}
                  type="number"
                  placeholder={quantity}
                  className="input input-bordered w-full max-w-xs border-primary"
                />
              </div>
              {/* EDIT DESCRIPTION */}
              <div className="mb-4">
                <label htmlFor="description" className="label">
                  <span className="label-text">Edit Product Description</span>
                </label>
                <textarea
                  ref={editDescriptionRef}
                  id="description"
                  className="textarea textarea-primary h-40 w-full"
                  placeholder={description}
                ></textarea>
              </div>
              {/* EDIT IMAGE */}
              <label htmlFor="image" className="label">
                <span className="label-text">Edit Product Image</span>
              </label>
              <div className="flex justify-center items-center w-full">
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
              <p className="text-left text-red-500 font-bold mt-1 ml-2">
                <small>Image must me less then 1000kb</small>
              </p>
              <div className="card-actions justify-center">
                <button className="btn bg-yellow-400 mt-8 border-0 hover:bg-yellow-400">
                  Save Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchase;
