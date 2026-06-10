import React, { useContext } from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";
import phone from "../../../assets/images/icons/login-signup-form/phone.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import RegisterStepOne from "../../../core/api/auth/Register/stepOne/StepOne";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { stepIncrement } from "../../../core/feature/auth/RegisterStepSlice";
const RegisterStepOneForm = () => {
  const dispatch = useDispatch();
  const { mutate, isPending } = useMutation({
    mutationFn: RegisterStepOne,
    onSuccess: (data) => {
      dispatch(stepIncrement());
      navigate("/auth/register/step-2");
    },
    onError: (error) => {
      const status = error.response?.status;

      const serverMessage = error.response?.data?.message;

      if (status === 400 && serverMessage === "شما از قبل ثبت نام کرده اید") {
        toast.error("شما قبلا ثبت نام کرده اید");
      } else {
        toast.error("خطایی در اتصال به سرور رخ داد. لطفاً دوباره تلاش کنید.");
      }
    },
  });

  const postData = (formData) => {
    localStorage.setItem("registration_email", formData.gmail);
    mutate({ gmail: formData.gmail });
  };

  const validationSchema = Yup.object({
    gmail: Yup.string()
      .required("ایمیل الزامی است")
      .email("فرمت ایمیل صحیح نیست"),
  });
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-bold font-sans text-textC  text-3xl">
        ایجاد حساب کاربری
      </h1>
      <p className="font-normal text-xl text-textC">
        لطفا ایمیل خود را وارد کنید
      </p>
      <Formik
        initialValues={{
          gmail: "",
        }}
        validationSchema={validationSchema}
        onSubmit={postData}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="w-full flex flex-col items-center gap-6">
            <div className="w-8/10 flex flex-col justify-end">
              <div
                className={` focus:ring-indigo-500 w-full bg-neutral-50  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                  errors.gmail && touched.gmail ? " border border-red-500" : ""
                }`}
              >
                <Input
                  icon={phone}
                  placeholder={"لطفا ایمیل خود را وارد کنید"}
                  iconClassname={"mx-3.5"}
                  name="gmail"
                  value={values.gmail}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <ErrorMessage
                className="text-danger-500 text-right"
                name="gmail"
                component={"span"}
              />
            </div>

            <Button
              disabled={isPending}
              children={"ارسال کد یکبار مصرف"}
              buttonClassName="w-8/10 font-[18px]"
              type="submit"
            />
          </Form>
        )}
      </Formik>
      <Toaster />
      <div className="flex items-center gap-1">
        <p className="text-textC cursor-pointer">حساب کاربری دارید؟</p>
        <p
          className="text-textb cursor-pointer "
          onClick={() => navigate("/auth/login")}
        >
          وارد شوید
        </p>
      </div>
    </>
  );
};

export default RegisterStepOneForm;
