import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RegistrationGuard = ({ requiredStep }) => {
  const currentStep = useSelector((state) => state.RegisterStep.step);

  if (currentStep < requiredStep) {
    return <Navigate to={`/auth/register/step-${currentStep}`} replace />;
  }

  return <Outlet />;
};

export default RegistrationGuard;
