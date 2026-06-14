import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ResetPasswordGuard = ({ requiredStep }) => {
  const currentStep = useSelector((state) => state.ResetPasswordStep.step);

  if (currentStep < requiredStep) {
    return <Navigate to={`/auth/reset/step-${currentStep}`} replace />;
  }

  return <Outlet />;
};

export default ResetPasswordGuard;
