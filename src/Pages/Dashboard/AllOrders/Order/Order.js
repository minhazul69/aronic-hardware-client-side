import React from "react";
import Swal from "sweetalert2";

const Order = ({ order, index, refetch }) => {
  const { name, email, _id, status } = order;
  const handleUpdateProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Shipped This Order",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/updateOrder/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
          });
        Swal.fire("Deleted!", "Order Shipped SuccessFully.", "success");
      }
    });
  };
  const handleDeleteOrder = (id) => {
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
        fetch(`http://localhost:5000/order/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
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
      <td>{email}</td>
      <td>{name}</td>
      <td>
        {status === "shipped" ? (
          <button className="btn btn-success btn-active btn-sm text-white">
            Shipped
          </button>
        ) : (
          <>
            {status === "pending" ? (
              <>
                <button className="btn btn-sm btn-primary mr-7 btn-active">
                  PENDING..
                </button>
                <button
                  onClick={() => handleUpdateProduct(_id)}
                  className="btn btn-sm btn-warning text-white"
                >
                  SHIPPED
                </button>
              </>
            ) : (
              <button className="btn btn-error btn-active text-white btn-sm">
                UNPAID
              </button>
            )}
          </>
        )}
      </td>
      <td>
        <button
          disabled={status}
          onClick={() => handleDeleteOrder(_id)}
          className="btn btn-circle btn-outline btn-error"
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
