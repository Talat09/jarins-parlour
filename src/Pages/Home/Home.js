import React from "react";
import Contact from "../Contact/Contact";
import Services from "../Service/Services";

import Banner from "./Banner";
import Professonally from "./Professonally";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Professonally></Professonally>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
