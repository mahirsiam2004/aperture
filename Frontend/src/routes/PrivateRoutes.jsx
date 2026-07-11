import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {

  const location =useLocation();

  const { user, loading } = use(AuthContext);
  if (loading) {
    <div>Loading .......</div>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
