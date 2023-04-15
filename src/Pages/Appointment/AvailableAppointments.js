import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../Loading/Loading";
import { useQuery } from "react-query";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  // const { loading } = useContext(AuthContext);
  const formattedDate = format(date, "PP");
  const {
    data: services = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["services", formattedDate],
    queryFn: async () => {
      const res = await fetch(
        `https://jarin-portals-server.vercel.app/available?date=${formattedDate}`
      );
      const data = await res.json();

      return data;
    },
  });
  // useEffect(() => {
  //   fetch("https://jarin-portals-server.vercel.app/option")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setServices(data);
  //     });
  // }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-16">
      <p className="text-primary text-2xl text-center">
        You Have Selected: {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
          ></AppointmentService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
