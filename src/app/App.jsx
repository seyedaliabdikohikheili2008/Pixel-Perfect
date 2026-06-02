
import "../assets/styles/App.css";
import Footer from "../components/organisms/Footer/Footer";
import Header from "../components/organisms/header/Header";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";


function App() {
  return <RouterProvider router={router} />;

}

export default App;
