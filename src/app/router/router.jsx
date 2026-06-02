import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../page/LandingPage";
import NotFoundPage from "../../page/NotFoundPage";
import CourseListPage from "../../page/CourseListPage";
import RegisterStepOne from "../../page/RegisterPage/RegisterStepOne";
import LoginStepOne from "../../page/LoginPage/LoginStepOne";
import LoginStepTwo from "../../page/LoginPage/LoginStepTwo";
import LoginLayout from "../../app/layout/loginLayout/LoginLayout";
import RegisterLayout from "../../app/layout/RegisterLayout/RegisterLayout";
import RegisterStepTwo from "../../page/RegisterPage/RegisterStepTwo";
import RegisterStepThree from "../../page/RegisterPage/RegisterStepThree";
import RegisterVerifyLayout from "../../app/layout/RegisterVerifyLayout/RegisterVerifyLayout";
import MainLyout from "../layout/mainLayout/MainLyout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "courses", element: <CourseListPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <LoginStepOne />,
      },
      {
        path: "verifying",
        element: <LoginStepTwo />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterLayout />,
    children: [
      {
        index: true,
        element: <RegisterStepOne />,
      },
      {
        path: "verify",
        element: <RegisterVerifyLayout />,
        children: [
          {
            index: true,
            element: <RegisterStepTwo />,
          },
          {
            path: "complete",
            element: <RegisterStepThree />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
