import React from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const User = ({ user, index, refetch }) => {
  const { email, _id, role } = user;
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Delete This User",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log(data);
          });
        Swal.fire("Deleted!", "This User Delete SuccessFull", "success");
      }
    });
  };
  const handleMakeAdmin = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "btn border-0 text-white bg-green-500 hover:bg-green-600",
        cancelButton:
          "btn bg-red-500 hover:bg-red-600 text-white mr-4 border-0",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be make Admin This user",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Admin it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => {
              console.log(res);
              if (res.status === 403) {
                return toast.error("Failed To Make And Admin");
              }
              return res.json();
            })
            .then((data) => {
              console.log(data);
              refetch();
            });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "This User Make Admin SuccessFull",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Canceled Make Admin This User :)",
            "error"
          );
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <h2 className="font-bold text-red-400">Already Admin</h2>
        ) : (
          <button onClick={handleMakeAdmin} className="btn btn-sm">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleUserDelete(_id)}
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

export default User;
