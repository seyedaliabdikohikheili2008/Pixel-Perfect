import React from "react";
import RegisterStepThreeForm from "../../components/organisms/RegisterStepThreeForm/RegisterStepThreeForm";
import Banner from "../../assets/images/login-background/Banner.png";
const LoginStepOne = () => {
  return (
    <>
      <div
        className=" bg-repeat-x bg-center h-screen"
        style={{
          backgroundImage: `url('${Banner}')`,
        }}
      >
        <div className="pt-11 ">
          <RegisterStepThreeForm />
        </div>
      </div>
    </>
  );
};

export default LoginStepOne;
