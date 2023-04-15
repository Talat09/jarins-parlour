import React from "react";
import RelaxImage from "../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";
const Professonally = () => {
  return (
    <div className="hero banner mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={RelaxImage}
          className=" lg:w-1/2 rounded-lg shadow-2xl"
          alt="relaxImage"
        />
        <div>
          <h1 className="text-2xl font-bold lg:text-5xl">
            Let us handle your <br /> screen
            <span className="text-primary">Professionally.</span>
          </h1>
          <p className="py-6">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Professonally;
