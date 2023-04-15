import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import { toast } from "react-hot-toast";

const ManageServices = () => {
  const {
    data: beautycians = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["beautycians"],
    queryFn: async () => {
      const res = await fetch(
        "https://jarin-portals-server.vercel.app/beautycians"
      );
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleRemove = (beautycian) => {
    fetch(
      `https://jarin-portals-server.vercel.app/beautycians/${beautycian?.email}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`${beautycian.name} Deleted  Successfully`);
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold my-8 text-center ">
        Manage Specialist
      </h1>
      <div className="grid grid-cols-1 justify-items-center  md:grid-cols-2 lg:grid-cols-3  gap-3">
        {beautycians.map((beautycian) => (
          <div
            key={beautycian._id}
            className=" w-68 bg-base-100 shadow-xl border rounded-lg border-primary"
          >
            <div className="avatar flex justify-center items-center">
              <div className="w-32 rounded-full">
                <img src={beautycian.image} alt="" />
              </div>
            </div>
            <div className=" text-center px-10">
              <h2 className="text-xl font-bold">{beautycian.name}</h2>
              <h2 className="">{beautycian.specialty}</h2>
              <p>Contact: {beautycian.email}</p>
              <div className="p-3 w-full">
                <button
                  className="btn btn-primary text-white w-full"
                  onClick={() => handleRemove(beautycian)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
