import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loading from "../Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [admin, isAdminLoading] = useAdmin(user);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
