import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { InputOTP } from "@heroui/react";
import Button from "../../atoms/Butoon/Button";
import Timer from "../../atoms/Timer/Timer";
import { useNavigate,useLocation } from "react-router-dom";

const InputOtp = () => {
  const navigate = useNavigate();
const location=useLocation();
  const initialValues = { otpCode: "" };

  const validationSchema = Yup.object({
    otpCode: Yup.string()
      .length(6, "کد تایید باید ۶ رقم باشد")
      .required("وارد کردن کد تایید الزامی است"),
  });

 const sumbitHandeler=(values)=>{
  console.log(values);
  if(location.pathname==="/auth/login/verifying"){
    navigate("/")
  }else{
navigate("complete")
  }
  
}
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={sumbitHandeler}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="flex flex-col items-center gap-6 w-full">

          <div className="w-full flex justify-center overflow-hidden">
            <InputOTP
              maxLength={6}
              value={values.otpCode}
              onChange={(value) => setFieldValue("otpCode", value)}
              isInvalid={!!errors.otpCode && touched.otpCode}
              aria-label="کد تایید ۶ رقمی"
            >
              <InputOTP.Group dir="ltr" className="flex md:gap-0.5 gap-2 lg:gap-2 flex-wrap justify-center">

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
<ErrorMessage name="otpCode" className="text-danger-500 text-right" component={"span"} />
          
          <Button
            buttonClassName="w-8/10 font-lg font-bold"
            type="submit"
          >
            تایید رمز یکبار مصرف
          </Button>

          <Timer className="dark:text-white text-textC" />
        </Form>
      )}
    </Formik>
  );
};

export default InputOtp;