import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Form from "../Form";

const stripePromise = loadStripe(
  "pk_test_51MijiRJNxVPgVSwFCmB4sQnzSXw51Rhza5d7J5zDenN5EoXcEATUAMZwD3thnfO0W7kcBNGYWiNACbMcz50SDlVT009o2HG3Oz"
);
console.log(stripePromise);
const Payment = () => {
  const { id } = useParams();
  const url = `https://jarin-portals-server.vercel.app/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="lg:flex justify-center sm:flex-wrap">
      <div className="card w-50 h-1/2 max-w-md bg-base-100  shadow-xl my-12 ">
        <div className="card-body w-1/2">
          <p className="font-bold text-primary text-xl">
            Hello, {appointment.patientName}
          </p>
          <h2 className="card-title">Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment
            <span className="text-success"> {appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p className="font-bold">Please Pay: $ {appointment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-1/2 h-48 mt-12 ml-8 max-w-md  shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control mt-6">
            <Elements stripe={stripePromise}>
              <Form appointment={appointment}></Form>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
