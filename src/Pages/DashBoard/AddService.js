import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const AddService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ["specialists"],
    queryFn: async () => {
      const res = await fetch(
        "https://jarin-portals-server.vercel.app/specialist"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleAddServices = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const beautycian = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          //save specialist beauticians into the database
          fetch("https://jarin-portals-server.vercel.app/beautycians", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(beautycian),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added Successfully`);
              navigate("/dashboard/manageservice");
            });
        }
      });
  };
  return (
    <div className="w-96 p-7 border-2 border-primary rounded-lg shadow-2xl mx-auto mt-8">
      <h1 className="font-bold text-3xl mb-6">Add A New Specialist</h1>
      <form onSubmit={handleSubmit(handleAddServices)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-primary">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-primary">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-primary">Service Specialist</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {specialists.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-primary">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>
        <input
          className="btn btn-primary text-white w-full mt-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddService;
