import React from "react";
import elipes1 from "../../assets/images/Ellipse 90.png";
import elipes2 from "../../assets/images/Ellipse 91.png";
import elipes3 from "../../assets/images/Ellipse 92.png";
import Reviews from "./Reviews";
const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Nash Patrik",
      title: "CEO, Manpol",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugia",
      icon: elipes1,
    },
    {
      id: 2,
      title: "CEO, Manpol",

      name: "Miriam Barron",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      icon: elipes2,
    },
    {
      id: 3,
      title: "CEO, Manpol",
      name: "Bria Malone",
      description:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      icon: elipes3,
    },
  ];
  return (
    <div className="mt-16">
      <h1 className="text-3xl text-center font-bold">Testimonials</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
        {reviews.map((review) => (
          <Reviews key={review.id} review={review}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
