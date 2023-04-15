import React from "react";
import banner from "../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div>
      <div className="hero  bg-secondary">
        <div className="hero-content flex-col gap-28 lg:flex-row sm:items-start">
          <img
            src={banner}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="appointment banner"
          />
          <div className="bg-white">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
