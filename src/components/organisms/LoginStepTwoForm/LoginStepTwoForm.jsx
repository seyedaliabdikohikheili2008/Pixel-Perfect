import React from "react";
import InputOtp from "../../atoms/InputOtp/InputOtp";

const LoginStepTwoForm = () => {
  return (
    <>

        <h1 className="font-bold font-sans text-textC text-3xl text-center">
          ورود به حساب کاربری
        </h1>

        <p className="font-normal text-xl text-textC text-center">
          رمز یکبار مصرف را وارد کنید
        </p>

        <div className="w-8/10">
          <InputOtp />
        </div>

      </>
    
  );
};

export default LoginStepTwoForm;