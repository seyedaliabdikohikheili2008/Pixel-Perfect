import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { Form, Formik,  ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";
import phone from "../../../assets/images/icons/login-signup-form/phone.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const registerStepOneForm = () => {
const validationSchema=Yup.object({
  email: Yup.string().required("ایمیل الزامی است"),
})
const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="relative right-15 w-full rounded-xl bg-background md:w-1/3 mx-auto flex flex-col items-center gap-6 py-8 shadow-2xl">
        <Logo variant={"vertical"} className={"h-52.25"} />
        <h1 className="font-bold font-sans text-textC  text-3xl">
          ایجاد حساب کاربری
        </h1>
        <p className="font-normal text-xl text-textC">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>
        <Formik
          initialValues={{
            email: ""
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
              <div className={` focus:ring-indigo-500 w-full bg-neutral-50  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                errors.email && touched.email ? ' border border-red-500' : ''
              }`}>
                <Input
                  icon={phone}
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
              
              <Button
                children={"ارسال کد یکبار مصرف"}
                buttonClassName="w-8/10 font-[18px]"
                type="submit"
                onClick={() => navigate("verify")}
              />
            </Form>
          )}
        </Formik>

        <div className="flex items-center gap-1">
          <p className="text-textC">حساب کاربری دارید؟</p>
          <p className="text-textb " onClick={() => navigate("/login")}>وارد شوید</p>
        </div>
      </div>
    </div>
  );
};

export default registerStepOneForm;
