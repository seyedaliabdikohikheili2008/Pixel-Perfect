import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";

import password from "../../../assets/images/icons/login-signup-form/password.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ResetPasswordStepTwo from "../../../core/api/auth/ResetPassword/StepTwo/StepTwo";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
const ResetPasswordStepTwoForm = () => {
  const navigate = useNavigate();
  const savedEmail = localStorage.getItem("registration_email");
  const { mutate, isPending } = useMutation({
    mutationFn: ResetPasswordStepTwo,
    onSuccess: (data) => {
      console.log(" موفقیت:", data);
      navigate("/auth/login");
    },
    onError: (error) => {
      console.error(" خطا:", error);
      const status = error.response?.status;

      const serverMessage = error.response?.data?.message;

      if (status === 404 && serverMessage === "کاربر یافت نشد") {
        toast.error("کاربر با این ایمیل یافت نشد لطفا ثبت نام کنید");
      } else {
        toast.error("خطایی در اتصال به سرور رخ داد. لطفاً دوباره تلاش کنید.");
      }

      console.error("جزئیات خطا:", error.response?.data);
    },
  });

  const postData = (values) => {
    mutate({
      gmail: savedEmail,
      email: savedEmail,
      newPassword: values.newPassword,
      resetValue: "000000",
      baseUrl: "/",
    });
  };
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("رمز اجباری است")
      .min(6, "لطفا از 6 کاراکتر بیشتر وارد کنید!")
      .max(20, "رمز عبور نباید بیشتر از 20 کاراکتر باشد"),
    confrimPassword: Yup.string()
      .required("تکرار رمز اجباری است")
      .oneOf([Yup.ref("newPassword")], "رمزها یکسان نیستند"),
  });

  return (
    <>
      <h1 className="font-bold font-sans text-textC  text-3xl">
        فراموشی رمز عبور
      </h1>
      <p className="font-normal text-xl text-textC">
        رمز عبور جدید برای خود تعیین کنید
      </p>
      <Formik
        initialValues={{
          newPassword: "",
          resetValue: "",
          confrimPassword: "",
        }}
        onSubmit={postData}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors = {}, touched }) => (
          <Form className="w-full flex flex-col items-center gap-6">
            <div className="w-8/10 flex flex-col justify-end">
              <div
                className={` focus:ring-indigo-500 w-full bg-neutral-50  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                  errors.newPassword && touched.newPassword
                    ? " border border-red-500"
                    : ""
                }`}
              >
                <Input
                  icon={password}
                  placeholder={"رمز عبور خود را وارد کنید"}
                  iconClassname={"mx-3.5"}
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                />
              </div>
              <ErrorMessage
                className="text-danger-500 text-right"
                name="newPassword"
                component={"span"}
              />
            </div>
            <div className="w-8/10 flex flex-col justify-end">
              <div
                className={` focus:ring-indigo-500 w-full bg-neutral-50  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                  errors.confrimPassword && touched.confrimPassword
                    ? " border border-red-500"
                    : ""
                }`}
              >
                <Input
                  icon={password}
                  placeholder={"تکرار رمز عبور"}
                  iconClassname={"mx-3.5"}
                  name="confrimPassword"
                  value={values.confrimPassword}
                  onChange={handleChange}
                />
              </div>
              <ErrorMessage
                className="text-danger-500 text-right"
                name="confrimPassword"
                component={"span"}
              />
            </div>
            <Button
              children={"ثبت رمز عبور جدید"}
              buttonClassName="w-8/10 font-lg font-bold"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetPasswordStepTwoForm;
