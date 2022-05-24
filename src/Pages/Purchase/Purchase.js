import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Shared/Spinner/Spinner";

const Purchase = () => {
  const quantityRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  const addQuantityRef = useRef("");
  const { productId } = useParams();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const {
    data: productDetails,
    isLoading,
    refetch,
  } = useQuery("productId", () =>
    fetch(`http://localhost:5000/product/${productId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  const { name, image, description, price, quantity } = productDetails;
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
    if (orderProduct > quantity) {
      return toast.error(
        "Your Order Quantity Must Be Less Then Available Quantity"
      );
    }
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
    fetch("http://localhost:5000/order", {
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
          const url = `http://localhost:5000/product/${productId}`;
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
    const newQuantity = parseInt(quantity) + parseInt(updateQuantity);
    const updateUser = { quantity: newQuantity };
    const url = `http://localhost:5000/product/${productId}`;
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
              <h3 className="text-1xl text-red-400 mb-8">
                Minimum Order Quantity: 100
              </h3>
            </>
          )}
          <form onSubmit={handleOrderQuantity}>
            {quantity === 0 ? (
              ""
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-5">
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Phone Number</span>
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      class="input input-bordered w-full max-w-xs border-0"
                    />
                  </div>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Address</span>
                    </label>
                    <input
                      ref={addressRef}
                      type="text"
                      placeholder="Enter Your Address"
                      class="input input-bordered w-full max-w-xs border-0"
                    />
                  </div>
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                  <label htmlFor="quantity" class="label">
                    <span class="label-text">Quantity</span>
                  </label>
                  <input
                    id="quantity"
                    ref={quantityRef}
                    type="text"
                    placeholder="Type Quantity"
                    className="input input-bordered w-full max-w-xs border-0"
                  />
                </div>
              </>
            )}
            <div className="card-actions justify-center mt-10">
              {quantity === 0 ? (
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
        <div class="card w-96 bg-base-100 shadow-2xl mx-auto">
          <div class="card-body">
            <h2 class="text-center text-yellow-400 text-3xl font-bold">
              Add Product Quantity
            </h2>
            <h2 className="text-red-400 font-bold">Quantity: {quantity}</h2>
            <form onSubmit={handleQuantityAdd}>
              <input
                ref={addQuantityRef}
                type="text"
                placeholder="Add Product Quantity"
                class="input input-bordered w-full max-w-xs"
              />
              <div class="card-actions justify-center">
                <button class="btn bg-yellow-400 mt-8 border-0 hover:bg-yellow-400">
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
