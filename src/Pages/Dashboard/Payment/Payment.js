import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(
  "pk_test_51L3D4UHeJjZEDFcjrIrMcM7pky2NrbL9cHSmOC9EnBpTOwQvCbP4VfuGstYI0o9e8mH7638JPzFURtQWBoAdhC7v00aHq7TOU7"
);
const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["Order", id], () =>
    fetch(`https://polar-journey-11488.herokuapp.com/order/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  console.log(order);
  const { image, name, price, orderProduct } = order;
  return (
    <div className="lg:px-12">
      <div className="card lg:card-side bg-base-100 my-16 shadow-2xl">
        <figure className="lg:w-2/4">
          <img src={image} alt={name} />
        </figure>
        <div className="card-body  lg:w-2/4 bg-base-200 justify-center">
          <h2 className="text-center text-2xl lg:text-3xl font-bold mb-4">
            {name}
          </h2>
          <h3 className="font-bold text-xl text-red-500">
            Total Price: ${price}
          </h3>

          <h3 className="text-1xl text-yellow-400 font-bold mt-3">
            {" "}
            Order Quantity: {orderProduct}
          </h3>
          <div className="mt-10 bg-white lg:p-8 rounded">
            <Elements stripe={stripePromise}>
              <CheckOut order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
