import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Order from "./Order/Order";

const MyOrder = () => {
  const navigate = useNavigate();
  const [myOrder, setMyOrder] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setMyOrder(data);
        });
    }
  }, [navigate, user]);
  console.log(myOrder.length);
  return (
    <div>
      <h2 className="bg-red-400">My Order</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Order Quantity</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.map((order, index) => (
              <Order order={order} key={order._id} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
