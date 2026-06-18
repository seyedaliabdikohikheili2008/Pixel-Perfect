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
import NewsListPage from "../../page/news-list/NewsListPage";
import TeacherListPage from "../../page/teacher-list/TeacherListPage";
import NewsDetail from "../../page/news-detail/NewsDetail";
import ContactUsPage from "../../page/ContactUs/ContactUsPage";

import PriveteRoute from "../../components/guard/privete-route/PriveteRoute";
import UserPanelLayout from "../layout/user-panel-layout/UserPanelLayout";
import RegistrationGuard from "../../components/guard/RegistrationGuard/RegistrationGuard";
import ResetPasswordGuard from "../../components/guard/reset-password/ResetPasswordGuard";
import Dashboard from "../../components/templates/user-panel/dashboard/Dashboard";
import MyCourse from "../../components/templates/user-panel/my-course/MyCourse";
import MyCourseReserve from "../../components/templates/user-panel/my-course-reserve/MyCourseReserve";
import MyFavoriteCourses from "../../components/templates/user-panel/my-favorite-courses/MyFavoriteCourses";
import MyFavoriteNews from "../../components/templates/user-panel/my-favorite-news/MyFavoriteNews";
import ProfileLayout from "../layout/user-panel-layout/profile/ProfileLayout";
import PersonalInformation from "../../components/templates/user-panel/profile/personal-information/PersonalInformation";
import ProfileImage from "../../components/templates/user-panel/profile/profile-image/ProfileImage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "courses", element: <CourseListPage /> },
      { path: "course-detail/:id", element: <CourseDetail /> },
      { path: "news-list", element: <NewsListPage /> },
      { path: "Instructors", element: <TeacherListPage /> },

      { path: "news-detail/:newsId", element: <NewsDetail /> },
      { path: "contactUs", element: <ContactUsPage /> },
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
          // { path: "verifying", element: <LoginStepTwo /> },
        ],
      },
      {
        path: "register/step-1",
        element: <RegisterStepOne />,
      },

      {
        element: <RegistrationGuard requiredStep={2} />,
        children: [
          {
            path: "register/step-2",
            element: <RegisterStepTwo />,
          },
        ],
      },

      {
        element: <RegistrationGuard requiredStep={3} />,
        children: [
          {
            path: "register/step-3",
            element: <RegisterStepThree />,
          },
        ],
      },
      {
        path: "reset/step-1",
        element: <ResetPasswordStepOnePage />,
      },

      {
        element: <ResetPasswordGuard requiredStep={2} />,
        children: [
          {
            path: "reset/step-2",
            element: <ResetPasswordStepTwoPage />,
          },
        ],
      },
    ],
  },
  {
    element: <PriveteRoute />,
    children: [
      {
        path: "user-panel",
        element: <UserPanelLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "my-course", element: <MyCourse /> },
          { path: "my-reservation", element: <MyCourseReserve /> },
          { path: "my-favorite-course", element: <MyFavoriteCourses /> },
          { path: "my-favorite-news", element: <MyFavoriteNews /> },
          {
            path: "profile",
            element: <ProfileLayout />,
            children: [
              { index: true, element: <PersonalInformation /> },
              { path: "image", element: <ProfileImage /> },
            ],
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
