import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import Product from "./Product";

const ManageProduct = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://polar-journey-11488.herokuapp.com/products").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1 className="text-center lg:text-left font-bold text-3xl mb-3">
        Manage All Product
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Edit Product</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <Product
                product={product}
                index={index}
                key={product._id}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
