import React from "react";

const Order = ({ order, index }) => {
  const { name, email, price, orderProduct, phone, address } = order;
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
        <button class="btn btn-circle btn-outline btn-error">
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
