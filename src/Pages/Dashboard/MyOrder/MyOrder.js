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
      fetch(`https://aronic-hardware.onrender.com/order?email=${user?.email}`, {
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
  }, [myOrder, navigate, user]);
  return (
    <div>
      {myOrder.length === 0 ? (
        <h2 className="text-3xl font-bold text-yellow-400">
          No Order Available
        </h2>
      ) : (
        <div className="overflow-x-auto">
          <h2 className="text-left text-3xl font-bold mb-3 screen-full">
            My Order
          </h2>
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Order Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
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
      )}
    </div>
  );
};

export default MyOrder;
