import React from "react";
import InputOtp from "../../atoms/InputOtp/InputOtp";
import { useTranslation } from "react-i18next";

const RegisterStepTwoForm = () => {
  const { t } = useTranslation("auth");
  return (
    <>
      <h1 className="font-bold font-sans text-textC  text-3xl">
        {t("register2.title")}
      </h1>
      <p className="font-normal text-xl text-textC">
        {t("register2.describe")}
      </p>
      <InputOtp />
    </>
  );
};

export default RegisterStepTwoForm;
