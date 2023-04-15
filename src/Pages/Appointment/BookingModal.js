import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, slots, name, price } = treatment;
  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const bookings = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user?.email,
      patientName: user?.displayName,
      phone,
    };
    fetch("https://jarin-portals-server.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("Booking Confirm at");
        } else {
          toast.error(
            `Already booking at ${data.booking?.slot} on : ${data.booking?.date}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  const { user } = useContext(AuthContext);
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-primary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              readOnly
              disabled
              className="input input-bordered input-primary w-full max-w-xs mb-3 mt-6"
            />
            <select
              name="slot"
              className="select select-bordered select-primary w-full max-w-xs mb-3"
            >
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              readOnly
              disabled
              placeholder="Your Name"
              className="input input-bordered input-primary w-full max-w-xs mb-3"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              placeholder="Your Email"
              className="input input-bordered input-primary w-full max-w-xs mb-6"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full max-w-xs mb-6"
            />

            <input
              type="submit"
              value="submit"
              className="input  w-full max-w-xs  btn btn-primary text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
