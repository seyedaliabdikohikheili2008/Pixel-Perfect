import React from "react";
import InputOtp from "../../atoms/InputOtp/InputOtp";
import { useTranslation } from "react-i18next";

const LoginStepTwoForm = () => {
  const { t } = useTranslation("auth");
  return (
    <>

        <h1 className="font-bold font-sans text-textC text-3xl text-center">
          {t("login2.title")}
        </h1>

        <p className="font-normal text-xl text-textC text-center">
          {t("login2.describe")}
        </p>

        <div className="w-8/10">
          <InputOtp />
        </div>

      </>
    
  );
};

export default LoginStepTwoForm;