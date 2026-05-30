import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";
import email from "../../../assets/images/icons/login-signup-form/email.png";
import password from "../../../assets/images/icons/login-signup-form/password.png";
import * as Yup from "yup";
const RegisterStepOneForm = () => {
const validationSchema=Yup.object({
  email: Yup.string().required("ایمیل الزامی است"),
  password: Yup.string().required("رمز اجباری است"),
  password2: Yup.string().required("تکرار رمز اجباری است")
})
  return (
    <div className="w-full ">
      <div className=" w-full bg-white md:w-1/3 mx-auto flex flex-col items-center gap-6 py-8 dark:bg-dark-bg-2 rounded-xl">
        <Logo variant={"vertical"} className={"h-52.25"} />
        <h1 className="font-bold font-sans text-textC dark:text-white text-3xl">
          ایجاد حساب کاربری
        </h1>
        <p className="font-normal text-xl">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
            password2:""
          }}
          onSubmit={(values) => {
            console.log("Submit:", values);
          }}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleSubmit,handleBlur,errors={}, touched }) => (
            <Form
              className="w-full flex flex-col items-center gap-6"
              onSubmit={handleSubmit}
            >
                <div className="w-8/10 flex flex-col justify-end">
              <div className={` focus:ring-indigo-500 w-full bg-neutral-50 dark:bg-dark-bg-3 rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                errors.email && touched.email ? ' border border-red-500' : ''
              }`}>
                <Input
                  icon={email}
                  placeholder={"ایمیل یا شماره تماس"}
                  iconClassname={"mx-3.5"}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <ErrorMessage className="text-danger-500 text-right" name="email" component={"span"}/>
              </div>
              <div className="w-8/10 flex flex-col justify-end">
              <div className={` focus:ring-indigo-500 w-full bg-neutral-50 dark:bg-dark-bg-3 rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                errors.password && touched.password ? ' border border-red-500' : ''
              }`} >
                <Input
                  icon={password}
                  placeholder={"رمز عبور خود را وارد کنید"}
                  iconClassname={"mx-3.5"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <ErrorMessage className="text-danger-500 text-right" name="password" component={"span"}/>
              </div>
               <div className="w-8/10 flex flex-col justify-end">
              <div className={` focus:ring-indigo-500 w-full bg-neutral-50 dark:bg-dark-bg-3 rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                errors.password2 && touched.password2 ? ' border border-red-500' : ''
              }`} >
                <Input
                  icon={password}
                  placeholder={"تکرار رمز عبور"}
                  iconClassname={"mx-3.5"}
                  name="password2"
                  value={values.password2}
                  onChange={handleChange}
                />
              </div>
              <ErrorMessage className="text-danger-500 text-right" name="password2" component={"span"}/>
              </div>
              <Button
                children={"ثبت نام"}
                buttonClassName="w-8/10 font-lg font-bold"
                type="submit"
              />
            </Form>
          )}
        </Formik>

        <div className="flex items-center gap-1">
          <p className="">حساب کاربری دارید؟</p>
          <p className="text-[#0CBDE2] ">وارد شوید</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterStepOneForm;
