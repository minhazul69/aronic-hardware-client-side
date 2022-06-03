import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Products/Product/Product";
import Spinner from "../Shared/Spinner/Spinner";

const AllProduct = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("https://polar-journey-11488.herokuapp.com/products").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-3 lg:mx-0 lg:px-12  mt-10">
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};

export default AllProduct;
