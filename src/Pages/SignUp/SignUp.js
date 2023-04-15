import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

import Loading from "../../Loading/Loading";
const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updatedInfo, googleLogin, loading } =
    useContext(AuthContext);
  const [createUserEmail, setCreatedUserEmail] = useState("");

  const navigate = useNavigate();
  const [token] = useToken(createUserEmail);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const updatedUser = {
          displayName: data?.name,
          photoURL: data?.photoURL,
        };
        updatedInfo(updatedUser)
          .then(() => {
            console.log(data.email, data.name);
            saveUser(data?.email, data?.name);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user?.email, user?.displayName);
      })
      .catch((error) => console.log(error));
  };
  if (loading) {
    return <Loading></Loading>;
  }

  const saveUser = (email, name) => {
    const user = { email, name };
    fetch(`https://jarin-portals-server.vercel.app/user/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
        // getUserToken(user?.email);
      });
  };

  if (token) {
    navigate("/");
  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="border-dotted border-2 border-primary p-8 rounded">
        <h1 className="font-bold text-center text-4xl text-primary">Sign Up</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered w-full max-w-xs"
              {...register("photoURL")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary w-full max-w-xs mt-6"
          />
        </form>
        <p>
          Already Have an account?{" "}
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>

          <button className="btn btn-primary" onClick={handleGoogleLogin}>
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
