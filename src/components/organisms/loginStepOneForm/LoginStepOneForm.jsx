import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { Form, Formik, Field, ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";
import user from "../../../assets/images/icons/login-signup-form/user.png";
import password from "../../../assets/images/icons/login-signup-form/password.png";
const LoginStepOneForm = () => {
  return (
    <div className="w-full border border-solid border-red-900">
      <div className=" w-full bg-white md:w-1/3 mx-auto flex flex-col items-center gap-6 py-8 dark:bg-dark-bg-2 border border-solid border-red-900">
        <Logo variant={"vertical"} className={"h-52.25"} />
        <h1 className="font-bold font-sans text-textC dark:text-white text-3xl">
          ورود به حساب کاربری
        </h1>
        <p className="font-normal text-xl">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log("Submit:", values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form
              className="w-full flex flex-col items-center gap-6"
              onSubmit={handleSubmit}
            >
              <div className="w-8/10 bg-neutral-50 dark:bg-dark-bg-3 rounded-xl">
                <Input
                  icon={user}
                  placeholder={"ایمیل یا شماره تماس"}
                  iconClassname={"mx-3.5"}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                
              </div>
              <div className="w-8/10 bg-neutral-50 dark:bg-dark-bg-3 rounded-xl">
                <Input
                  icon={password}
                  placeholder={"ایمیل یا شماره تماس"}
                  iconClassname={"mx-3.5"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <div className="w-8/10 flex justify-between items-center">
                <div className="flex items-center w-2/5 text-nowrap gap-2 text-textC dark:text-white">
                  <div className="w-5 h-5 bg-primary-50 rounded-md"></div>
                  <p className="font-normal text-[16px]">مرا به خاطر بسپار</p>
                </div>
                <div>
                  <p className="font-normal text-[16px]">فراموشی رمز عبور</p>
                </div>
              </div>
              <Button
                children={"ارسال کد یکبار مصرف"}
                buttonClassName="w-8/10 font-[18px]"
                type="submit"
              />
            </Form>
          )}
        </Formik>

        <div className="flex items-center gap-1">
          <p className="">حساب کاربری ندارید؟</p>
          <p className="text-[#0CBDE2] ">ثبت نام</p>
        </div>
      </div>
    </div>
  );
};

export default LoginStepOneForm;
