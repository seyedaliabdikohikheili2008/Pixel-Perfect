import React from "react";
import Header from "../../../components/organisms/header/Header";
import Footer from "../../../components/organisms/Footer/Footer";
import { Outlet } from "react-router-dom";
import TranslateButton from "../../../components/molecules/translate-button/TranslateButton";

const MainLyout = () => {
  return (
    <>
      <Header variant={"linear"} />
      <TranslateButton />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLyout;
