import React from "react";
import RegisterStepThreeForm from "../components/organisms/RegisterStepThreeForm/RegisterStepThreeForm";
import Footer from "../components/organisms/Footer/Footer";
import Banner from "../assets/images/login-background/Banner.png";
import Header from "../components/organisms/header/Header";
const LoginStepOne = () => {
  return (
    <>
      <Header variant={"linear"} />
      <div
        className=" mt-85 bg bg-repeat-x"
        style={{
          backgroundImage: `url('${Banner}')`,
        }}
      >
        <div className="relative bottom-50 ">
          <RegisterStepThreeForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginStepOne;
