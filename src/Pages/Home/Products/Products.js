import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import Product from "./Product/Product";

const Products = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("product.json").then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="lg:px-12 mt-20">
      <h1 className="text-3xl font-bold text-yellow-400">NEW PRODUCTS</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 place-items-center mt-10">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
