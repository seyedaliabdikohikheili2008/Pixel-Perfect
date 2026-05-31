import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../page/LandingPage";
import NotFoundPage from "../../page/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
