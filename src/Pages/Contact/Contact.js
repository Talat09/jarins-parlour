import React from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const contact = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    fetch("https://jarin-portals-server.vercel.app/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          toast.success("Message send successfully");
          form.reset();
        }
      });
  };
  return (
    <div className="mt-16">
      <h1 className="text-3xl text-center font-bold">
        Let us handle your <br />
        project, professionally.
      </h1>
      <div className="bg-secondary mt-8 py-5">
        <form onSubmit={handleContact} className=" w-1/2 mx-auto">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="input input-bordered w-full mb-2 "
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="input input-bordered w-full mb-2"
          />
          <input
            type="text"
            name="phone"
            required
            placeholder="Phone Number"
            className="input input-bordered w-full mb-2"
          />

          <textarea
            className="textarea textarea-bordered  w-full mb-2"
            name="message"
            required
            placeholder="Your Message"
          ></textarea>
          <br />
          <button className="btn btn-primary mt-4 w-full text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
