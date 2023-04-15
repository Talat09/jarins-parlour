import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const Form = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { price, patientName, patient, _id } = appointment;
  console.log(price, patientName, patient);
  useEffect(() => {
    fetch("https://jarin-portals-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error?.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
    }
    if (paymentIntent.status === "succeeded") {
      setCardError("");
      console.log(paymentIntent);
      setSuccess("Congrats! Your Payment is Completed");
      setTransactionId(paymentIntent.id);
      //store payment into database
      const payment = {
        price,
        transactionId: paymentIntent.id,
        patient,
        bookingId: _id,
      };
      fetch("https://jarin-portals-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! Your Payment is Completed");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#FF5F9E",
                "::placeholder": {
                  color: "#FF5F9E",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          type="submit"
          className="btn btn-primary btn-xs text-white mt-6 w-20"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 mt-4">{cardError}</p>}
      {success && (
        <div>
          <p className="text-green-500 mt-4">{success}</p>
          <p className="text-green-500 mt-4">
            Your TransactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Form;
