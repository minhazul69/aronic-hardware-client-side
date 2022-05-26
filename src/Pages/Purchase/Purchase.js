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
  const quantityRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  const addQuantityRef = useRef("");
  const { productId } = useParams();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  const [process, setProcess] = useState(false);
  const {
    data: productDetails,
    isLoading,
    refetch,
  } = useQuery(["productDetails", "productId"], () =>
    fetch(`https://polar-journey-11488.herokuapp.com/product/${productId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log(res);
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
  console.log(productDetails);

  const handleOrderQuantity = (e) => {
    e.preventDefault();
    const orderProduct = quantityRef.current.value;
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
    if (orderProduct > productDetails?.quantity) {
      return toast.error(
        "Your Order Quantity Must Be Less Then Available Quantity"
      );
    }
    setProcess(true);
    const totalPrice = parseInt(productDetails?.price) * parseInt(orderProduct);
    const newQuantity = productDetails?.quantity - orderProduct;
    const email = user?.email;
    const order = {
      email,
      name: productDetails?.name,
      image: productDetails?.email,
      description: productDetails.description,
      price: totalPrice,
      orderProduct,
      phone,
      address,
    };
    console.log(order);
    fetch("https://polar-journey-11488.herokuapp.com/order", {
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
          const url = `https://polar-journey-11488.herokuapp.com/product/${productId}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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
  const handleQuantityAdd = (e) => {
    e.preventDefault();
    const updateQuantity = addQuantityRef.current.value;
    if (!updateQuantity) {
      return toast.error("Please Type A Quantity");
    }
    if (isNaN(updateQuantity)) {
      return toast.error("Quantity Is Not A Number Please Type Number");
    }
    const newQuantity =
      parseInt(productDetails?.quantity) + parseInt(updateQuantity);
    const updateUser = { quantity: newQuantity };
    const url = `https://polar-journey-11488.herokuapp.com/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          refetch();
          toast.success("Your Order Added SuccessFull");
          e.target.reset();
          console.log(data);
        }
      });
    console.log(newQuantity);
  };

  return (
    <div className="lg:px-12">
      <div className="card lg:card-side bg-base-100 my-16 shadow-2xl">
        <figure className="lg:w-2/4">
          <img src={productDetails?.image} alt={productDetails?.name} />
        </figure>
        <div className="card-body  lg:w-2/4 bg-base-200 justify-center">
          <h2 className="text-center text-2xl lg:text-5xl font-bold mb-4">
            {productDetails?.name}
          </h2>
          <h3 className="font-bold text-xl text-red-500">
            Price: ${productDetails?.price}
          </h3>
          <h3>{productDetails?.description}</h3>
          {productDetails?.quantity === 0 ? (
            <h2 className="font-bold text-xl text-red-600">Product Sold</h2>
          ) : (
            <>
              <h3 className="text-1xl text-yellow-400 font-bold mt-3">
                {" "}
                Available Quantity: {productDetails?.quantity}
              </h3>
            </>
          )}
          <form onSubmit={handleOrderQuantity}>
            {productDetails?.quantity === 0 ? (
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
                    type="text"
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
              {productDetails?.quantity === 0 ? (
                <button className="btn bg-red-400 btn-wide" disabled>
                  Sold
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
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
              Add Product Quantity
            </h2>
            <h2 className="text-red-400 font-bold">
              Quantity: {productDetails?.quantity}
            </h2>
            <form onSubmit={handleQuantityAdd}>
              <input
                ref={addQuantityRef}
                type="text"
                placeholder="Add Product Quantity"
                className="input input-bordered w-full max-w-xs"
              />

              <div className="card-actions justify-center">
                <button className="btn bg-yellow-400 mt-8 border-0 hover:bg-yellow-400">
                  Add Quantity
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
