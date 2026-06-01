import React from "react";
import Logo from "../../atoms/Logo/Logo";
import InputOtp from "../../atoms/InputOtp/InputOtp";

const RegisterStepTwoForm = () => {
  return (
    <div className="w-full ">
      <div className="relative w-full md:w-1/2 lg:w-[44%] xl:w-1/3 mx-auto bg-background flex flex-col items-center gap-6 py-8 rounded-xl shadow-2xl">
        <Logo variant="vertical" className="h-52.25" />
        <h1 className="font-bold font-sans text-textC  text-3xl">
          ایجاد حساب کاربری
        </h1>
        <p className="font-normal text-xl text-textC">رمز یکبار مصرف را وارد کنید</p>
        <InputOtp />
      </div>
    </div>
  );
};

export default RegisterStepTwoForm;
