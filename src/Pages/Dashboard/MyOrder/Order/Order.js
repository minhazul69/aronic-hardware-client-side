import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Order = ({ order, index }) => {
  const { name, email, price, orderProduct, _id, status, transactionId } =
    order;
  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Delete This Order",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://polar-journey-11488.herokuapp.com/order/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire(
          "Deleted!",
          "Your Order has been deleted SuccessFull.",
          "success"
        );
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{orderProduct}</td>
      <td>{price}</td>

      <td>
        {status ? (
          <>
            <p className="font-bold">PAID</p>
            <p>
              <small>
                {" "}
                <span className="font-bold text-yellow-400">XID: </span>
                {transactionId}
              </small>
            </p>
          </>
        ) : (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-success btn-sm"
          >
            Pay Now
          </Link>
        )}
      </td>
      <td>
        <button
          className="btn btn-circle btn-outline btn-error"
          onClick={() => handleOrderDelete(_id)}
          disabled={status}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Order;
