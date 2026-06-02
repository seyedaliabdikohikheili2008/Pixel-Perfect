import React from "react";
import Header from "../../../components/organisms/header/Header";
import Footer from "../../../components/organisms/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLyout = () => {
  return (
    <>
      <Header variant={"linear"} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLyout;
