import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";
import user from "../../../assets/images/icons/login-signup-form/user.png";
import password from "../../../assets/images/icons/login-signup-form/password.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const LoginStepOneForm = () => {
const validationSchema=Yup.object({
  email: Yup.string().required("ایمیل الزامی است").email("فرمت ایمیل صحیح نیست"),
  password: Yup.string().required("رمز اجباری است")
})
const navigate = useNavigate();
const sumbitHandeler=(values)=>{
  console.log(values);
  navigate("verifying")
}
  return (
 <>
        <h1 className="font-bold font-sans text-textC  text-3xl rounded-xl">
          ورود به حساب کاربری
        </h1>
        <p className="font-normal text-xl text-textC  ">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe:false
          }}
          onSubmit={(values) => {
            console.log("Submit:", values);
          }}
          validationSchema={validationSchema}
          onSubmit={sumbitHandeler}
        >
          {({ values, handleChange,handleBlur,errors={}, touched }) => (
            <Form
              className="w-full flex flex-col items-center gap-6"

            >
                <div className="w-8/10 flex flex-col justify-end">
              <div className={` focus:ring-indigo-500 w-full rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                errors.email && touched.email ? ' border border-red-500' : ''
              }`}>
                <Input
                  icon={user}
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
              <div className={` focus:ring-indigo-500 w-full  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                errors.password && touched.password ? ' border border-red-500' : ''
              }`} >
                <Input
                  icon={password}
                  placeholder={"ایمیل یا شماره تماس"}
                  iconClassname={"mx-3.5"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <ErrorMessage className="text-danger-500 text-right" name="password" component={"span"}/>
              </div>
              <div className="w-8/10 flex justify-between items-center">
                <div className="flex items-center w-2/5 text-nowrap gap-2 text-textC ">
                  <input type="checkbox" name="rememberMe" checked={values.rememberMe} onChange={handleChange}/>
                  <label>مرا بخاطر بسپار</label>
                </div>
                <div>
                  <p className="font-normal text-[16px] text-textC " onClick={() => navigate("/auth/reset")}>فراموشی رمز عبور</p>
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
          <p className="text-textC ">حساب کاربری ندارید؟</p>
          <p className="text-textb " onClick={() => navigate("/auth/register")}>ثبت نام</p>
        </div>
</>
  );
};

export default LoginStepOneForm;
