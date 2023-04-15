import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { googleLogin, LogIn } = useContext(AuthContext);
  const [LoginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(LoginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = (data) => {
    LogIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(user.email);
      })
      .catch((error) => console.log(error));
  };
  // const saveUser = (email, name) => {
  //   const user = { email, name };
  //   fetch(`https://jarin-portals-server.vercel.app/user/${user?.email}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCreatedUserEmail(user?.email);
  //       // getUserToken(user?.email);
  //     });
  // };
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="border-dotted border-2 border-primary p-8 rounded">
        <h1 className="font-bold text-center text-4xl text-primary">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
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
          Don't Have an account?{" "}
          <Link className="text-primary font-bold" to="/signup">
            Sign Up
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

export default Login;
