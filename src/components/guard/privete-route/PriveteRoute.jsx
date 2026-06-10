import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../../core/utils/auth/IsAuthenticated";

const PriveteRoute = () => {
  if (isAuthenticated()) {
    return <Outlet />;
  }
  return <Navigate to={"/"} />;
};

export default PriveteRoute;
