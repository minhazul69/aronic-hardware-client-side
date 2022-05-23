import React from "react";
import Swal from "sweetalert2";

const Order = ({ order, index }) => {
  const { name, email, price, orderProduct, phone, address, _id } = order;
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
        fetch(`http://localhost:5000/order/${id}`, {
          method: "DELETE",
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
      <td>{phone}</td>
      <td>{address}</td>
      <td>
        <button class="btn btn-success btn-sm">Pay Now</button>
      </td>
      <td>
        <button
          class="btn btn-circle btn-outline btn-error"
          onClick={() => handleOrderDelete(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Order;
