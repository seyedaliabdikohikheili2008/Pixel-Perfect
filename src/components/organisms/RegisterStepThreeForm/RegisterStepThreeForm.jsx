import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";
import email from "../../../assets/images/icons/login-signup-form/email.png";
import password from "../../../assets/images/icons/login-signup-form/password.png";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import RegisterStepThree from "../../../core/api/auth/Register/StepThree/StepThree";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
const RegisterStepThreeForm = () => {
    const navigate = useNavigate();
const location=useLocation();
const validationSchema=Yup.object({
  email: Yup.string().required("ایمیل الزامی است").email("فرمت ایمیل صحیح نیست"),
  password: Yup.string().required("رمز اجباری است"),
  password2: Yup.string().required("تکرار رمز اجباری است").oneOf([Yup.ref("password")],"رمز عبور و تکرار آن یکسان نیستند")
})
  const savedEmail = localStorage.getItem("registration_email");
  const { mutate, isPending } = useMutation({
  mutationFn: RegisterStepThree, 
  onSuccess: (data) => {
    console.log(" موفقیت:", data);
    navigate("/auth/login")
    toast.success("ثبت نام شما با موفقیت انجام شد");
  },
  onError: (error) => {
    console.error(" خطا:", error);
    const status = error.response?.status;
    
    const serverMessage = error.response?.data?.message;

     if (status === 401 && serverMessage==="کد اشتباه است") {
      toast.error("رمز شما اشتباه است");
    } 
    else{
      toast.error("خطایی در اتصال به سرور رخ داد. لطفاً دوباره تلاش کنید.");
    }
  }
});

const postData = (formData) => {
  mutate({ password:formData.password ,gmail:savedEmail,phoneNumber:savedEmail}); 
};
  return (
    <>
        <h1 className="font-bold font-sans text-textC  text-3xl">
          ایجاد حساب کاربری
        </h1>
        <p className="font-normal text-xl text-textC">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>
        <Formik
          initialValues={{
            gmail: "",
            password: "",
            password2:""
          }}
          onSubmit={postData}
          validationSchema={validationSchema}
        >
          {({ values, handleChange,handleBlur,errors={}, touched }) => (
            <Form
              className="w-full flex flex-col items-center gap-6"
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
              <div className={` focus:ring-indigo-500 w-full bg-neutral-50  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
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
              <div className={` focus:ring-indigo-500 w-full bg-neutral-50  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
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
          <p className="text-textC">حساب کاربری دارید؟</p>
          <p className="text-textb " onClick={() => navigate("/auth/login")} >وارد شوید</p>
        </div>
      </>
  );
};

export default RegisterStepThreeForm;
