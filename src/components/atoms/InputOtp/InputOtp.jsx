import React from 'react'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { InputOTP } from "@heroui/react";
import Button from "../../atoms/Butoon/Button";
import Timer from "../../atoms/Timer/Timer";
import { useNavigate } from 'react-router-dom';
const InputOtp = () => {
    const initialValues = { otpCode: "" };

  const validationSchema = Yup.object({
    otpCode: Yup.string()
      .length(6, "کد تایید باید ۶ رقم باشد")
      .required("وارد کردن کد تایید الزامی است"),
  });

  const handleSubmit = (values) => {
    console.log("کد تایید شده:", values.otpCode);
  };
  const navigate = useNavigate();
  return (
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="flex flex-col items-center gap-6 w-full">
              <div className="rounded-2xl  shadow-sm border-0 flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={values.otpCode}
                  onChange={(value) => setFieldValue("otpCode", value)}
                  isInvalid={!!errors.otpCode && touched.otpCode}
                  aria-label="کد تایید ۶ رقمی"
                >
                  <InputOTP.Group dir="ltr" className="flex gap-2 ">
                    <InputOTP.Slot index={0} className="w-12 py-3 h-12 bg-background rounded-xl border" />
                    <InputOTP.Slot index={1} className="w-12 py-3 h-12 bg-background rounded-xl border" />
                    <InputOTP.Slot index={2} className="w-12 py-3 h-12 bg-background rounded-xl border" />
                    <InputOTP.Slot index={3} className="bg-background py-3 w-12 h-12 rounded-xl border" />
                    <InputOTP.Slot index={4} className="w-12 h-12 py-3 bg-background rounded-xl border" />
                    <InputOTP.Slot index={5} className="w-12 h-12 py-3 bg-background rounded-xl border" />
                  </InputOTP.Group>
                </InputOTP>
              </div>

              <Button buttonClassName="w-8/10 font-lg font-bold" type="submit" onClick={() => navigate("complete")} >
              تایید رمز یکبار مصرف
              </Button>
              <Timer className="dark:text-white text-textC"/>
            </Form>
          )}
        </Formik>
  )
}

export default InputOtp