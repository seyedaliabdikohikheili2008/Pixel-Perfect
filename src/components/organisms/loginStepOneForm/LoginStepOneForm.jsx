import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { Form,Formik,Field,ErrorMessage } from 'formik'
import Button from "../../atoms/Butoon/Button";
const LoginStepOneForm = () => {
  return (
    <div className="w-full border border-solid border-red-900">
      <div className="w-1/3 mx-auto flex flex-col items-center gap-6 py-8 bg-dark-bg-2 border border-solid border-red-900">
        <Logo variant={"vertical"} />
<h1 className="font-bold font-sans  dark:text-white text-3xl">ورود به حساب کاربری</h1>
<p className="font-normal text-xl">لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
<Formik>
   <Form className="w-full">
    <div className="w-full">
        <Field id="email" name="email"
        className="w-8/10 border-gray-50 px-5 py-2 bg-dark-bg-3 rounded-[10px]"
        >
        </Field>
    </div>
   </Form>
</Formik>
      <div className="w-8/10 flex justify-between items-center">
      <div className="flex items-center w-2/5 text-nowrap gap-2 dark:text-white">
        <div className="w-5 h-5 bg-primary-50 rounded-md"></div>
        <p className="font-normal text-[16px]">مرا به خاطر بسپار</p>
      </div>
<div>
    <p className="font-normal text-[16px]">فراموشی رمز عبور</p>
</div>
      </div>
      <Button children={"ارسال کد یکبار مصرف"} buttonClassName="w-8/10 font-[18px]" />
      <div className="flex items-center gap-1">
        <p className="">حساب کاربری ندارید؟</p>
        <p className="text-[#0CBDE2] ">ثبت نام</p>
      </div>
      </div>
    </div>
  );
};

export default LoginStepOneForm;
