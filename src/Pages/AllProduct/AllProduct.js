import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Products/Product/Product";
import Spinner from "../Shared/Spinner/Spinner";

const AllProduct = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 ">
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};

export default AllProduct;
