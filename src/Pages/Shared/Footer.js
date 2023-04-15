import React from "react";
// import location from "../../assets/icons/map-pin-2-fill.png";
import facebook from "../../assets/icons/Vector.png";
import instagram from "../../assets/icons/Vector-1.png";
import linkdin from "../../assets/icons/Vector-2.png";
import youtube from "../../assets/icons/Vector-3.png";
const Footer = () => {
  return (
    <div className="bg-primary mt-16 py-4  text-white  ">
      <section className="grid grid-cols-1 md:justify-items-center lg:justify-items-center lg:grid-cols-3 md:grid-cols-2 mt-4 sm:justify-items-start gap-3 ">
        <div className="mx-2">
          <h2 className="text-xl font-bold">Company</h2>
          <p>About</p>
          <p>Project</p>
          <p>Our Team</p>
          <p>Terms Conditions</p>
          <p>Submit Listing</p>
        </div>
        <div className="mx-2">
          <h2 className="text-xl font-bold  ">Quick Links</h2>
          <p>Quick Links</p>
          <p>Rentals</p>
          <p>Sales</p>
          <p>Contact</p>
          <p>Our blog</p>
        </div>
        <div className="w-1/2 mx-2">
          <h2 className="text-xl font-bold ">About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas.
          </p>
          <div className="flex mt-6  sm:justify-start ">
            <img
              className="w-10 h-10 mr-2 rounded-lg"
              src={facebook}
              alt="facebook icon"
            />
            <img
              className="w-10 h-10 mr-3 rounded-lg"
              src={instagram}
              alt="instagram icon"
            />
            <img
              className="w-10 h-10 mr-3 rounded-lg"
              src={linkdin}
              alt="linkdin icon"
            />
            <img
              className="w-10 h-10 mr-3 rounded-lg"
              src={youtube}
              alt=" youtube icon"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
