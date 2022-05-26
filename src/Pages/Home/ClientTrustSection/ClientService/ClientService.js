import React from "react";

const ClientService = ({ name, img, number }) => {
  return (
    <div
      className="shadow-lg text-center py-8"
      data-aos="zoom-in-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <img className="w-20 mx-auto text-red-400" src={img} alt="" />
      <h2 className="font-bold text-4xl mt-5 text-yellow-400">{number}</h2>
      <h1 className="text-xl mt-2 text-primary ">{name}</h1>
    </div>
  );
};

export default ClientService;
