import React from "react";
import Input from "../../../../atoms/Input/Input";
import * as Yup from "yup";
import Button from "../../../../atoms/Butoon/Button";
import { ErrorMessage, Form, Formik } from "formik";
import { postChangePassword } from "../../../../../core/services/user-panel/dashboard/postChangePassword";
import toast, { Toaster } from "react-hot-toast";
const ChangePassword = () => {
  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .required("رمز اجباری است")
      .min(6, "لطفا از 6 کاراکتر بیشتر وارد کنید!")
      .max(20, "رمز عبور نباید بیشتر از 20 کاراکتر باشد"),
    newPassword: Yup.string()
      .required("رمز اجباری است")
      .min(6, "لطفا از 6 کاراکتر بیشتر وارد کنید!")
      .max(20, "رمز عبور نباید بیشتر از 20 کاراکتر باشد"),
    reNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "رمز عبور و تکرار آن یکسان نیستند")
      .required("تکرار رمز الزامی است"),
  });
  return (
    <>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          reNewPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (
          values,
          { setSubmitting, resetForm, setFieldError, setFieldTouched },
        ) => {
          try {
            const response = await postChangePassword({
              oldPassword: values.oldPassword,
              newPassword: values.newPassword,
            });

            toast.success("رمز عبور با موفقیت تغییر یافت");
            resetForm();
          } catch (error) {
            if (error.response && error.response.status === 400) {
              const serverMessage =
                error.response.data?.message || "رمز عبور اشتباه است";

              setFieldError("oldPassword", serverMessage);
              setFieldTouched("oldPassword", true);

              toast.error(serverMessage);
            } else {
              toast.error("خطایی رخ داد، لطفاً دوباره تلاش کنید.");
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched, handleChange, handleBlur, isSubmitting }) => (
          <Form className="flex flex-col items-center gap-8">
            <Toaster />
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 ">
              <div className=" w-full md:w-3/10 flex flex-col justify-start gap-1 ">
                <label
                  htmlFor="oldPassword"
                  className="text-neutral-400 text-sm text-right px-3"
                >
                  رمز عبور فعلی
                </label>
                <Input
                  name="oldPassword"
                  id="oldPassword"
                  placeholder={"رمز عبور فعلی خود را وارد کنید"}
                  boxClassname={`border-t-2 border-solid border-gray-500 text-sm transition-all duration-200 ${
                    errors.oldPassword && touched.oldPassword
                      ? "border-2 border-red-500 bg-red-50" 
                      : "" 
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  className="text-danger-500 text-right text-sm"
                  name="oldPassword"
                  component={"span"}
                />
              </div>
              <div className="w-full md:w-3/10  flex flex-col justify-start gap-1">
                <label
                  htmlFor="newPassword"
                  className="text-neutral-400 text-sm text-right px-3"
                >
                  رمز عبور جدید
                </label>
                <Input
                  name="newPassword"
                  id="newPassword"
                  placeholder={"رمز عبور جدید خود را وارد کنید"}
                  boxClassname={` border-t-2 border-solid border-gray-500 text-sm ${
                    errors.newPassword && touched.newPassword
                      ? " border border-red-500"
                      : ""
                  }`}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
                <ErrorMessage
                  className="text-danger-500 text-right text-sm"
                  name="newPassword"
                  component={"span"}
                />
              </div>
              <div className="w-full md:w-3/10 flex flex-col justify-start gap-1">
                <label
                  htmlFor="reNewPassword"
                  className="text-neutral-400 text-sm text-right px-3"
                >
                  تکرار رمز عبور
                </label>
                <Input
                  name="reNewPassword"
                  id="reNewPassword"
                  placeholder={"تکرار مجدد"}
                  boxClassname={` border-t-2 border-solid border-gray-500 text-sm ${
                    errors.reNewPassword && touched.reNewPassword
                      ? " border border-red-500"
                      : ""
                  }`}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
                <ErrorMessage
                  className="text-danger-500 text-right text-sm"
                  name="reNewPassword"
                  component={"span"}
                />
              </div>
            </div>
            <Button
              children={` ${isSubmitting ? "در حال ارسال..." : "ذخیره تغییرات"}`}
              type={"submit"}
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangePassword;
