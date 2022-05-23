import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";

const Purchase = () => {
  const quantityRef = useRef("");
  const { productId } = useParams();
  const { data: productDetails, isLoading } = useQuery("productId", () =>
    fetch(`http://localhost:5000/product/${productId}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner />;
  }
  const { name, image, description, price, quantity } = productDetails;
  const handleOrderQuantity = (e) => {
    e.preventDefault();
    const inputQuantity = quantityRef.current.value;
    console.log(quantity);
    if (!inputQuantity) {
      return toast.error("Please Type A Quantity");
    }
    if (isNaN(inputQuantity)) {
      return toast.error("Is Not A Number Please Type A Quantity");
    }
    if (inputQuantity < 100) {
      return toast.error("Please Order Over 100");
    }
    if (inputQuantity > quantity) {
      return toast.error(
        "Your Order Quantity Must Be Less Then Available Quantity"
      );
    }
    console.log(inputQuantity);
  };
  return (
    <div className="lg:px-12">
      <div className="card lg:card-side bg-base-100 my-16 shadow-2xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body  lg:w-2/4 bg-base-200 justify-center">
          <h2 className="text-center text-2xl lg:text-5xl font-bold mb-4">
            {name}
          </h2>
          <h3 className="font-bold text-xl text-red-500">Price: ${price}</h3>
          <h3>{description}</h3>
          <h3 className="text-1xl text-yellow-400 font-bold mt-3">
            {" "}
            Available Quantity: {quantity}
          </h3>
          <h3 className="text-1xl text-red-400 mb-8">
            Minimum Order Quantity: 100
          </h3>
          <form onSubmit={handleOrderQuantity}>
            <input
              ref={quantityRef}
              type="text"
              placeholder="Type Quantity"
              className="input input-bordered w-full max-w-xs border-0"
            />
            <div className="card-actions justify-center mt-10">
              <button type="submit" className="btn btn-primary">
                Purchase Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
