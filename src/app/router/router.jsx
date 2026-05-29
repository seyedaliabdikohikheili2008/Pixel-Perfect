import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../page/LandingPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
  },
]);

export default router;
