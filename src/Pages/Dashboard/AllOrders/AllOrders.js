import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import Order from "./Order/Order";

const AllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://polar-journey-11488.herokuapp.com/orders", {
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1 className="text-center lg:text-left font-bold text-3xl mb-3">
        Manage All Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Name</th>
              <th>Total Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Order
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
