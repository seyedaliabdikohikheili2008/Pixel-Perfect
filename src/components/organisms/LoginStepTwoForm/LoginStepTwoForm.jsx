import React from "react";

import Logo from "../../atoms/Logo/Logo";
import InputOtp from "../../atoms/InputOtp/InputOtp";


const LoginStepTwoForm = () => {
  

  return (
    <div className="w-full ">
      <div className="relative right-15 w-full bg-background md:w-1/3 mx-auto flex flex-col items-center gap-6 py-8 shadow-2xl rounded-xl">
        <Logo variant="vertical" className="h-52.25" />
        <h1 className="font-bold font-sans text-textC  text-3xl">
          ورود به حساب کاربری
        </h1>
        <p className="font-normal text-xl text-textC">رمز یکبار مصرف را وارد کنید</p>
        <InputOtp/>
      </div>
    </div>
  );
};

export default LoginStepTwoForm;