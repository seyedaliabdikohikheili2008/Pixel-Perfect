import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../page/LandingPage";
import NotFoundPage from "../../page/NotFoundPage";
import CourseListPage from "../../page/CourseListPage";
import RegisterStepOne from "../../page/RegisterStepOne";
import LoginStepOne from "../../page/LoginStepOne"
import LoginStepTwo from "../../page/LoginStepTwo"
import LoginLayout from "../../components/layout/loginLayout/LoginLayout"
import RegisterLayout from "../../components/layout/RegisterLayout/RegisterLayout"
import RegisterStepTwo from "../../page/RegisterStepTwo";
import RegisterStepThree from "../../page/RegisterStepThree";
import RegisterVerifyLayout from "../../components/layout/RegisterVerifyLayout/RegisterVerifyLayout";
const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
  },
  { path: "/courses", element: <CourseListPage /> },
  { path: "*", element: <NotFoundPage /> },
   
    {path: "/login",
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
      
    ]},
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
        children:[
          {
            index:true,
            element:<RegisterStepTwo/>
          },
          {
        path: "complete", 
        element: <RegisterStepThree />,
      },
        ]
      },
    ]}

]);

export default router;
