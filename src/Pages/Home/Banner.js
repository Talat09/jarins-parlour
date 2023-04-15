import React from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
const Banner = () => {
  return (
    <div className="hero banner bg-secondary">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerimage}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt="bannerimg"
        />
        <div>
          <h1 className="text-2xl font-bold lg:text-5xl">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h1>
          <p className="py-6">
            Jarin's Parlour,CTG is one of the popular Hair Salon located in
            ,Chittagong listed under Local business in Chittagong , Beauty Salon
            in Chittagong ,
          </p>
          <Link to="/appointment">
            <button className="btn btn-primary text-white">
              Get an Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
