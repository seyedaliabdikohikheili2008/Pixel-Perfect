import React from "react";
import { Form, Formik,  ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";
import phone from "../../../assets/images/icons/login-signup-form/phone.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const ResetPAsswordStepOneForm = () => {
const validationSchema=Yup.object({
  email: Yup.string().required("ایمیل الزامی است").email("فرمت ایمیل صحیح نیست"),
})
const navigate = useNavigate();
const sumbitHandeler=(values)=>{
  console.log(values);
  navigate("new-password")
}
  return (
    <>
        <h1 className="font-bold font-sans text-textC  text-3xl">
          فراموشی رمز عبور
        </h1>
        <p className="font-normal text-xl text-textC">
          ایمیل خود را برای تغییر رمز درخواست وارد کنید
        </p>
        <Formik
          initialValues={{
            email: ""
          }}
          validationSchema={validationSchema}
          onSubmit={sumbitHandeler}
        >
          {({ values, handleChange,handleBlur,errors, touched }) => (
            <Form
              className="w-full flex flex-col items-center gap-6"
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
              />
            </Form>
          )}
        </Formik>

        <div className="flex items-center gap-1">
          <p className="text-textC">حساب کاربری دارید؟</p>
          <p className="text-textb " onClick={() => navigate("/auth/login")}>وارد شوید</p>
        </div>
     </>
  );
};

export default ResetPAsswordStepOneForm;
