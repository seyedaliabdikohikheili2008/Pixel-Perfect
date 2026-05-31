import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../page/LandingPage";
import NotFoundPage from "../../page/NotFoundPage";
import CourseListPage from "../../page/CourseListPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
  },
  {path:"/courses",element:<CourseListPage />},
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
