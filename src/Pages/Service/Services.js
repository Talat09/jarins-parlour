import React from "react";
import service1 from "../../assets/icons/Group 1373.png";
import service2 from "../../assets/icons/Group 1372.png";
import service3 from "../../assets/icons/Group 1374.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      id: 1,
      name: "Anti Age Face Treatment",
      price: 199,
      description:
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      icon: service1,
    },
    {
      id: 2,
      price: 99,
      name: "Hair Color & Styleing",
      description:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
      icon: service2,
    },
    {
      id: 3,
      price: 299,
      name: "Skin Care Treatment",
      description:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      icon: service3,
    },
  ];
  return (
    <div className="mt-16 text-center">
      <h1 className="text-center text-3xl font-bold">
        Our Awesome <span className="text-primary">Services</span>{" "}
      </h1>
      <div className="grid gap-8  mt-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <button className="btn btn-primary w-44 mt-8 text-white ">
        Explore more
      </button>
    </div>
  );
};

export default Services;
