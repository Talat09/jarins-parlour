import React from "react";

const Reviews = ({ review }) => {
  const { icon, title, name, description } = review;
  return (
    <div className="mt-8">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="avatar justify-around">
          <div className="w-24 rounded-full">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="card-body ">
          <h2 className="text-3xl font-bold text-center">{name}</h2>
          <h3 className="font-bold text-center">{title}</h3>
          <p className="text-center">{description}</p>
          <div className="rating flex justify-center">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
