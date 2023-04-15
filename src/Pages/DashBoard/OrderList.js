import React, { useContext } from "react";
import { useQuery } from "react-query";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
const OrderList = () => {
  const { user } = useContext(AuthContext);

  const { data: appointments = [], isLoading } = useQuery({
    queryKey: ["appointment", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://jarin-portals-server.vercel.app/booking?patient=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const data = res.json();

      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">My Service List</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment, index) => (
              <tr className="hover" key={appointment._id}>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
                <td>
                  {appointment.price && !appointment.paid && (
                    <Link to={`/payment/${appointment._id}`}>
                      <button
                        className="btn btn-xs
                btn-primary text-white"
                      >
                        pay
                      </button>
                    </Link>
                  )}
                  {appointment.price && appointment.paid && (
                    <>
                      <span className="text-success">Paid</span>
                      <p>
                        Your transactionId:
                        <span className="text-success">
                          {appointment.transactionId}
                        </span>
                      </p>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
