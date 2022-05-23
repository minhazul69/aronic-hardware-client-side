import React from "react";

const Product = ({ product }) => {
  const { name, image, description, quantity, price } = product;
  return (
    <div class="card w-96 bg-base-100 shadow-xl mb-10 hover:shadow-2xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="text-center text-2xl font-bold">{name}</h2>
        <p className="font-bold text-xl text-red-500">Price: ${price}</p>
        <p>{description.slice(0, 150) + "...Read More"}</p>
        <p className="text-1xl text-yellow-400 font-bold">
          {" "}
          Available Quantity: {quantity}
        </p>
        <p className="text-1xl text-red-400">Minimum Order Quantity: 100</p>
        <div class="card-actions justify-center mt-10">
          <button class="btn bg-yellow-400 border-0 hover:bg-yellow-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
