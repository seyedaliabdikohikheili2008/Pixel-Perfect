import { createBrowserRouter } from "react-router-dom";
import RegisterStepOne from "../../page/RegisterPage/RegisterStepOne";
import LoginStepOne from "../../page/LoginPage/LoginStepOne";
import LoginStepTwo from "../../page/LoginPage/LoginStepTwo";
import RegisterStepTwo from "../../page/RegisterPage/RegisterStepTwo";
import RegisterStepThree from "../../page/RegisterPage/RegisterStepThree";
import MainLyout from "../layout/mainLayout/MainLyout";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import ResetPasswordStepOnePage from "../../page/ResetPasswordPage/ResetPasswordStepOnePage";
import ResetPasswordStepTwoPage from "../../page/ResetPasswordPage/ResetPasswordStepTwoPage";
import LandingPage from "../../page/Landing/LandingPage";
import CourseListPage from "../../page/course-list/CourseListPage";
import NotFoundPage from "../../page/not-found/NotFoundPage";
import CourseDetail from "../../page/course-detail/CourseDetail";
import  RegistrationGuard  from "../../components/RegistrationGuard/RegistrationGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "courses", element: <CourseListPage /> },
      { path: "course-detail/:id", element: <CourseDetail /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        children: [
          { index: true, element: <LoginStepOne /> },
          { path: "verifying", element: <LoginStepTwo /> },
        ],
      },
      {
        path: "register",
        children: [
          { index: true, element: <RegisterStepOne /> },
          {
            element: <RegistrationGuard minStep={2} />,
            children: [
              {
                path: "verify",
                children: [
                  { index: true, element: <RegisterStepTwo /> },
  
                  {
                    element: <RegistrationGuard minStep={3} />,
                    children: [
                      { path: "complete", element: <RegisterStepThree /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "reset",
        children: [
          { index: true, element: <ResetPasswordStepOnePage /> },
          { path: "new-password", element: <ResetPasswordStepTwoPage /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
