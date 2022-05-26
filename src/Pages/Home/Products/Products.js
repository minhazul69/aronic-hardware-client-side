import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import Product from "./Product/Product";

const Products = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("https://polar-journey-11488.herokuapp.com/products").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="lg:px-12 mt-20">
      <h1
        className="text-3xl font-bold text-yellow-400"
        data-aos="fade-down-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        NEW PRODUCTS
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-3 lg:mx-0 mt-10 gap-5">
        {products.slice(0, 6).map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
