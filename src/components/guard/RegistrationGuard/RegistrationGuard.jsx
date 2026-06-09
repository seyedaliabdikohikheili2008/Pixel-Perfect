import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

const RegistrationGuard = ({ minStep }) => {
  const { regStep } = useContext(AuthContext);
  if (regStep < minStep) {
    return <Navigate to="/auth/register" replace />;
  }

  return <Outlet />;
};
export default RegistrationGuard;
