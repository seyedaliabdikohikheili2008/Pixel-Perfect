import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { InputOTP } from "@heroui/react";
import Button from "../../atoms/Butoon/Button";
import Timer from "../../atoms/Timer/Timer";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import RegisterStepTwo from "../../../core/api/auth/Register/StepTwo/StepTwo";
import LoginStepTwo from "../../../core/api/auth/login/stepTwo/stepTwp";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { stepIncrement } from "../../../core/feature/auth/RegisterStepSlice";
import { login } from "../../../core/feature/auth/IsAuthSlice";
import { useTranslation } from "react-i18next";

const OtpVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("auth");

  const isLogin = location.pathname.includes("/auth/login");
  const state = location.state || {};

  const { mutate, isPending } = useMutation({
    mutationFn: isLogin ? LoginStepTwo : RegisterStepTwo,
    onSuccess: (data) => {
      if (data.message === "کد اشتباه است" || !data.success) {
        toast.error("کد اشتباه است");
        return;
      }

      if (isLogin) {
        if (data.token) {
          localStorage.setItem("token", data.token);
          dispatch(login());
          toast.success("خوش اومدی💛");
          setTimeout(() => navigate("/"), 1500);
        }
      } else {
        dispatch(stepIncrement());
        navigate("/auth/register/step-3");
      }
    },
    onError: (error) => {
      toast.error("خطایی رخ داد. دوباره تلاش کن.");
    },
  });

  const postData = (formData) => {
    if (isLogin) {
      mutate({
        verifyCode: formData.verifyCode,
        tempToken: state.tempToken,
        phoneOrGmail: state.phoneOrGmail,
      });
    } else {
      mutate({
        verifyCode: formData.verifyCode,
        gmail: state.gmail || localStorage.getItem("registration_email"),
      });
    }
  };

  const validationSchema = Yup.object({
    verifyCode: Yup.string()
      .length(6, "کد تایید باید ۶ رقم باشد")
      .required("وارد کردن کد تایید الزامی است"),
  });

  return (
    <Formik
      initialValues={{ verifyCode: "" }}
      validationSchema={validationSchema}
      onSubmit={postData}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="flex flex-col items-center gap-6 w-full">
          <div className="w-full flex justify-center overflow-hidden">
            <InputOTP
              maxLength={6}
              value={values.verifyCode}
              onChange={(value) => setFieldValue("verifyCode", value)}
              isInvalid={!!errors.verifyCode && touched.verifyCode}
              aria-label="کد تایید ۶ رقمی"
            >
              <InputOTP.Group
                dir="ltr"
                className="flex md:gap-0.5 gap-2 lg:gap-2 flex-wrap justify-center"
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTP.Slot
                    key={index}
                    index={index}
                    className="
                      w-10 sm:w-11 md:w-10
                      h-10 sm:h-11 md:h-10
                      lg:w-12 lg:h-12
                      bg-background
                      rounded-xl
                      border
                      shrink-0
                      md:pt-2 lg:pt-3
                      pt-2.5
                      text-textC
                    "
                  />
                ))}
              </InputOTP.Group>
            </InputOTP>
          </div>
          <ErrorMessage
            name="verifyCode"
            className="text-danger-500 text-right"
            component={"span"}
          />

          <Button
            disabled={isPending}
            buttonClassName="w-8/10 font-lg font-bold"
            type="submit"
          >
            {isPending ? "در حال تایید..." : `${t("login2.button")}`}
          </Button>
          <Toaster />
          <Timer className="dark:text-white text-textC" />
        </Form>
      )}
    </Formik>
  );
};

export default OtpVerification;
