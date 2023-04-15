import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-primary font-bold">
            {name}
          </h2>
          <p className="text-center">
            {slots.length > 0 ? (
              <>
                <span>{slots[0]}</span>
              </>
            ) : (
              <span>No space available</span>
            )}
          </p>
          <p className="text-center">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <p className="text-center">
            <small>Price: ${price}</small>
          </p>
          <div className="card-actions justify-center">
            <label
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
            >
              Booking
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
