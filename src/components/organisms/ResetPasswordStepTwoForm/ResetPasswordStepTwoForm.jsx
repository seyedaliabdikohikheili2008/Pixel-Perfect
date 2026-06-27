import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";

import password from "../../../assets/images/icons/login-signup-form/password.png";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import ResetPasswordStepTwo from "../../../core/api/auth/ResetPassword/StepTwo/StepTwo";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ResetPasswordStepTwoForm = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const savedEmail = localStorage.getItem("registration_email");
  const { t } = useTranslation("auth");

  const { mutate, isPending } = useMutation({
    mutationFn: ResetPasswordStepTwo,
    onSuccess: (data) => {
      toast.success("رمز عبور با موفقیت تغییر کرد");
      setTimeout(() => navigate("/auth/login", { replace: true }), 1500);
    },
    onError: (error) => {
      const status = error.response?.status;
      const serverMessage = error.response?.data?.message;

      if (status === 404 && serverMessage === "کاربر یافت نشد") {
        toast.error("کاربر با این ایمیل یافت نشد لطفا ثبت نام کنید");
      } else {
        toast.error("خطایی در اتصال به سرور رخ داد. لطفاً دوباره تلاش کنید.");
      }
    },
  });

  const postData = (values) => {
    mutate({
      gmail: savedEmail,
      email: savedEmail,
      newPassword: values.newPassword,
      resetValue: String(code),
    });
  };

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("رمز اجباری است")
      .min(6, "لطفا از 6 کاراکتر بیشتر وارد کنید!")
      .max(20, "رمز عبور نباید بیشتر از 20 کاراکتر باشد"),
    confirmPassword: Yup.string()
      .required("تکرار رمز اجباری است")
      .oneOf([Yup.ref("newPassword")], "رمزها یکسان نیستند"),
  });

  return (
    <>
      <h1 className="font-bold font-sans text-textC text-3xl">
        {t("forget2.title")}
      </h1>
      <p className="font-normal text-xl text-textC">
        {t("forget2.describe")}
      </p>
      <Formik
        initialValues={{
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={postData}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors = {}, touched }) => (
          <Form className="w-full flex flex-col items-center gap-6">
            {" "}
            <div className="w-8/10 flex flex-col justify-end">
              <div
                className={` focus:ring-indigo-500 w-full bg-neutral-50 rounded-xl flex flex-col justify-end focus:border-indigo-500 ${
                  errors.newPassword && touched.newPassword
                    ? " border border-red-500"
                    : ""
                }`}
              >
                <Input
                  icon={password}
                  placeholder={t("forget2.password")}
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
                className={` focus:ring-indigo-500 w-full bg-neutral-50 rounded-xl flex flex-col justify-end focus:border-indigo-500 ${
                  errors.confirmPassword && touched.confirmPassword
                    ? " border border-red-500"
                    : ""
                }`}
              >
                <Input
                  icon={password}
                  placeholder={t("forget2.repeat")}
                  iconClassname={"mx-3.5"}
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <ErrorMessage
                className="text-danger-500 text-right"
                name="confirmPassword"
                component={"span"}
              />
            </div>
            <Button
              children={isPending ? "در حال پردازش..." : `${t("forget2.button")}`} 
              buttonClassName="w-8/10 font-lg font-bold"
              type="submit"
              disabled={isPending}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetPasswordStepTwoForm;
