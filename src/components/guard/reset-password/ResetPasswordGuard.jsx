import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ResetPasswordGuard = () => {
  useEffect(() => {
    return () => {
      localStorage.removeItem("registration_email");
    };
  }, []);

  const email = localStorage.getItem("registration_email");
  if (!email) {
    return <Navigate to={`/auth/reset/step-1`} replace />;
  }

  return <Outlet />;
};

export default ResetPasswordGuard;
