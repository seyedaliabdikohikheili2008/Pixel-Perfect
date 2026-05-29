import { useEffect } from "react";
import "../assets/styles/App.css";
import Footer from "../components/organisms/Footer/Footer";
import Header from "../components/organisms/header/Header";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  const mode = useSelector((state) => state.DarkFlag.value);

  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.body.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return <RouterProvider router={router} />;
}

export default App;
