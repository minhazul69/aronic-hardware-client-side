import React from "react";
import { useNavigate } from "react-router-dom";
const Product = ({ product }) => {
  const { name, image, description, quantity, price, _id } = product;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-10 hover:shadow-2xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">{name}</h2>
        <p className="font-bold text-xl text-red-500">Price: ${price}</p>
        <p>{description.slice(0, 150) + "...Read More"}</p>
        <p className="text-1xl text-yellow-400 font-bold">
          {" "}
          Available Quantity: {quantity}
        </p>
        <p className="text-1xl text-red-400">Minimum Order Quantity: 100</p>
        <div className="card-actions justify-center mt-10">
          <button
            onClick={() => navigateToProductDetail(_id)}
            className="btn bg-yellow-400 border-0 hover:bg-yellow-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
