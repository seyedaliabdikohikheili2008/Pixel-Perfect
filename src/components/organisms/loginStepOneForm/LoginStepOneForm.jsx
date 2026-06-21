import React, { useRef } from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";
import user from "../../../assets/images/icons/login-signup-form/user.png";
import password from "../../../assets/images/icons/login-signup-form/password.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import LoginStepOne from "../../../core/api/auth/login/StepOne/StepOne";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../atoms/loading/Loading";
import { useDispatch } from "react-redux";
import { login } from "../../../core/feature/auth/IsAuthSlice";

const LoginStepOneForm = () => {
  const timeOutRef = useRef(null);

  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: LoginStepOne,
  });

  const postData = (values) => {
    mutate(
      {
        phoneOrGmail: values.phoneOrGmail,
        password: values.password,
        rememberMe: values.rememberMe,
      },
      {
        onSuccess: (data) => {
          if (data.success) {
            if (data.token) {
              localStorage.setItem("token", data.token);
              dispatch(login());
              toast.success("خوش اومدی💛");
              clearTimeout(timeOutRef.current);
              timeOutRef.current = setTimeout(() => {
                navigate("/");
              }, 1500);
            } else if (data.message === "کد ارسال شد") {
              navigate("verifying", {
                state: {
                  phoneOrGmail: values.phoneOrGmail,
                  gmail: values.phoneOrGmail,
                },
              });
            }
          }
        },
        onError: (error) => {
          const status = error.response?.status;
          const serverMessage = error.response?.data?.message;

          if (status === 401 && serverMessage === "رمز عبور اشتباه است") {
            toast.error("رمز عبور اشتباه است");
          } else if (status === 401 && serverMessage === "کاربر یافت نشد") {
            toast.error("کاربری با این مشخصات یافت نشد لطفا ثبت نام کنید");
          } else if (status === 400) {
            toast.error("درخواست نامعتبر است. لطفاً فیلدها را بررسی کنید.");
          } else {
            console.log(error);
            toast.error("خطایی در اتصال به سرور رخ داد. لطفاً دوباره تلاش کنید.");
          }
        },
      }
    );
  };

  const validationSchema = Yup.object({
    phoneOrGmail: Yup.string()
      .required("ایمیل الزامی است")
      .email("فرمت ایمیل صحیح نیست"),
    password: Yup.string().required("رمز اجباری است"),
  });
  const navigate = useNavigate();

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
          phoneOrGmail: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={validationSchema}
        onSubmit={postData}
      >
        {({ values, handleChange, handleBlur, errors = {}, touched }) => (
          <Form className="w-full flex flex-col items-center gap-6">
            <div className="w-8/10 flex flex-col justify-end">
              <div
                className={` focus:ring-indigo-500 w-full rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                  errors.phoneOrGmail && touched.phoneOrGmail
                    ? " border border-red-500"
                    : ""
                }`}
              >
                <Input
                  icon={user}
                  placeholder={"ایمیل خود را وارد کنید"}
                  iconClassname={"mx-3.5"}
                  name="phoneOrGmail"
                  value={values.phoneOrGmail}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <ErrorMessage
                className="text-danger-500 text-right"
                name="phoneOrGmail"
                component={"span"}
              />
            </div>
            <div className="w-8/10 flex flex-col justify-end">
              <div
                className={` focus:ring-indigo-500 w-full  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                  errors.password && touched.password
                    ? " border border-red-500"
                    : ""
                }`}
              >
                <Input
                  type="password"
                  icon={password}
                  placeholder={"رمز عبور را وارد کنید"}
                  iconClassname={"mx-3.5"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <ErrorMessage
                className="text-danger-500 text-right"
                name="password"
                component={"span"}
              />
            </div>
            <div className="w-8/10 flex justify-between items-center">
              <div className="flex items-center w-2/5 text-nowrap gap-2 text-textC ">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                />
                <label className="cursor-pointer">مرا بخاطر بسپار</label>
              </div>
              <div>
                <p
                  className="font-normal text-[16px] cursor-pointer text-textC "
                  onClick={() => navigate("/auth/reset/step-1")}
                >
                  فراموشی رمز عبور
                </p>
              </div>
            </div>
            <Button
              children={
                isPending ? (
                  <Loading size={"text-xl"} circleSize={8} />
                ) : (
                  "ارسال کد یکبار مصرف"
                )
              }
              buttonClassName="w-8/10 font-[18px]"
              type="submit"
              disabled={isPending}
            />
          </Form>
        )}
      </Formik>
      <Toaster />
      <div className="flex items-center gap-1">
        <p className="text-textC cursor-pointer ">حساب کاربری ندارید؟</p>
        <p
          className="text-textb cursor-pointer"
          onClick={() => navigate("/auth/register/step-1")}
        >
          ثبت نام
        </p>
      </div>
    </>
  );
};

export default LoginStepOneForm;
