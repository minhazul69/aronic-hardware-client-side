import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Product = ({ product, index, refetch }) => {
  const { name, price, quantity, _id, image } = product;
  const navigate = useNavigate();
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You this Product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${id}`, {
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
        Swal.fire("Deleted!", "Product deleted SuccessFull", "success");
      }
    });
  };
  // EDIT PRODUCT
  const handleEditProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        {" "}
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img className="object-top " src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button
          onClick={() => handleEditProduct(_id)}
          className="btn btn-outline hover:btn-success btn-sm btn-primary font-bold"
        >
          Edit
        </button>
      </td>

      <td>
        <button
          onClick={() => handleDeleteProduct(_id)}
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

export default Product;
