import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url("https://i.ibb.co/x55gwHG/unnamed.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-10 "></div>
        <div className="hero-content  text-white">
          <div className="text-left">
            <h1 className="mb-5 text-5xl lg:text-8xl font-mono font-thin  ">
              Portfolio
            </h1>
            <h3 className="mb-5 text-3xl lg:text-6xl font-mono font-thin  ">
              Take A Service & Get Offer
            </h3>

            <Link to="/appointment">
              <button className="btn btn-primary ">Get Services</button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-8 font-bold text-6xl">OUR GALLARY</h1>
      <div className="carousel carousel-end rounded-box mt-16 grid lg:grid-cols-3 justify-items-center sm:grid-cols-1 gap-2">
        <div>
          <img
            className="h-[250px] border-2 border-primary p-3 rounded"
            src="https://i.ibb.co/zmzV5HS/kris-atomic-Xa8f-X8b-QCgs-unsplash.jpg"
            alt="Drink"
          />
        </div>
        <div>
          <img
            className="h-[350px] border-2 border-primary p-3 rounded"
            src="https://i.ibb.co/ZcHk5Y5/element5-digital-8-FXAJ1-Qzhho-unsplash.jpg"
            alt="Drink"
          />
        </div>

        <div>
          <img
            className="h-[350px] border-2 border-primary p-3 rounded"
            src="https://i.ibb.co/kG06FHM/toa-heftiba-a9p-FSC8d-Tlo-unsplash.jpg"
            alt="Drink"
          />
        </div>
        <div>
          <img
            className="h-[350px] w-[350px] border-2 border-primary p-3 rounded"
            src="https://i.ibb.co/6FCjhMJ/amy-shamblen-xw-M61-TPMl-Yk-unsplash.jpg"
            alt="Drink"
          />
        </div>
        <div>
          <img
            className="h-[350px] border-2 border-primary p-3 rounded"
            src="https://i.ibb.co/NrZm8TN/gabrielle-henderson-3hu-Gl-ayr-8-unsplash.jpg"
            alt="Drink"
          />
        </div>
        <div>
          <img
            className="h-[350px] border-2 border-primary p-3 rounded"
            src="https://i.ibb.co/Z27Fj7Z/antonika-chanel-RJCslxmv-Bcs-unsplash.jpg"
            alt="Drink"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
