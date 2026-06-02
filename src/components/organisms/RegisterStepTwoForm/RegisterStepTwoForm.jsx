import React from "react";
import InputOtp from "../../atoms/InputOtp/InputOtp";

const RegisterStepTwoForm = () => {
  return (
    <>
      <h1 className="font-bold font-sans text-textC  text-3xl">
        ایجاد حساب کاربری
      </h1>
      <p className="font-normal text-xl text-textC">
        رمز یکبار مصرف را وارد کنید
      </p>
      <InputOtp />
    </>
  );
};

export default RegisterStepTwoForm;
