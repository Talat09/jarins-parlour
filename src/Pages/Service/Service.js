import React from "react";

const Service = ({ service }) => {
  const { icon, price, name, description } = service;
  return (
    <div className="card  bg-base-100 shadow-xl mt-4">
      <div className="avatar">
        <div className="w-[72px] mx-auto">
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div className="card-body items-center text-center ">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-xl text-primary font-bold">
          <span className="text-neutral">Price:</span> ${price}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
