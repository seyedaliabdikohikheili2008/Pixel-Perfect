import React from "react";
import Input from "../../../../atoms/Input/Input";
import * as Yup from "yup";
import Button from "../../../../atoms/Butoon/Button";
import { ErrorMessage, Form, Formik } from "formik";
import { postChangePassword } from "../../../../../core/services/user-panel/dashboard/postChangePassword";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
const ChangePassword = () => {
  const { t } = useTranslation("userPanel");
  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .required(t("changePassword.passwordRequired"))
      .min(6, t("changePassword.leastCharacters"))
      .max(20, t("changePassword.mustCharacters")),
    newPassword: Yup.string()
      .required(t("changePassword.passwordRequired"))
      .min(6, t("changePassword.leastCharacters"))
      .max(20, t("changePassword.mustCharacters")),
    reNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], t("changePassword.doNotMatch"))
      .required(t("changePassword.confirmationRequired")),
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

            toast.success(t("changePassword.success"));
            resetForm();
          } catch (error) {
            if (error.response && error.response.status === 400) {
              const serverMessage =
                error.response.data?.message || "رمز عبور اشتباه است";

              setFieldError("oldPassword", serverMessage);
              setFieldTouched("oldPassword", true);

              toast.error(serverMessage);
            } else {
              toast.error(t("changePassword.errorOne"));
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
                  className="text-neutral-400 text-sm flex justify-start px-3"
                >
                  {t("changePassword.currentPassword")}
                </label>
                <Input
                  name="oldPassword"
                  id="oldPassword"
                  placeholder={t("changePassword.currentPass")}
                  boxClassname={`border-t-2 border-solid border-gray-500 text-sm transition-all duration-200 ${
                    errors.oldPassword && touched.oldPassword
                      ? "border-2 border-red-500 bg-red-50"
                      : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  className="text-danger-500 flex justify-start text-sm"
                  name="oldPassword"
                  component={"span"}
                />
              </div>
              <div className="w-full md:w-3/10  flex flex-col justify-start gap-1">
                <label
                  htmlFor="newPassword"
                  className="text-neutral-400 text-sm flex justify-start px-3"
                >
                  {t("changePassword.newPassword")}
                </label>
                <Input
                  name="newPassword"
                  id="newPassword"
                  placeholder={t("changePassword.newPass")}
                  boxClassname={` border-t-2 border-solid border-gray-500 text-sm ${
                    errors.newPassword && touched.newPassword
                      ? " border border-red-500"
                      : ""
                  }`}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
                <ErrorMessage
                  className="text-danger-500 flex justify-start text-sm"
                  name="newPassword"
                  component={"span"}
                />
              </div>
              <div className="w-full md:w-3/10 flex flex-col justify-start gap-1">
                <label
                  htmlFor="reNewPassword"
                  className="text-neutral-400 text-sm flex justify-start px-3"
                >
                  {t("changePassword.confirmPassword")}
                </label>
                <Input
                  name="reNewPassword"
                  id="reNewPassword"
                  placeholder={t("changePassword.confirm")}
                  boxClassname={` border-t-2 border-solid border-gray-500 text-sm ${
                    errors.reNewPassword && touched.reNewPassword
                      ? " border border-red-500"
                      : ""
                  }`}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
                <ErrorMessage
                  className="text-danger-500 flex justify-start text-sm"
                  name="reNewPassword"
                  component={"span"}
                />
              </div>
            </div>
            <Button
              children={` ${isSubmitting ? t("changePassword.submiting") : t("changePassword.save")}`}
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
