import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { InputOTP } from "@heroui/react";
import Button from "../../atoms/Butoon/Button";
import Timer from "../../atoms/Timer/Timer";
import { useNavigate,useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import RegisterStepTwo from "../../../core/api/auth/Register/StepTwo/StepTwo";
import toast, { Toaster } from "react-hot-toast";
const InputOtp = () => {
  const savedEmail = localStorage.getItem("registration_email");
  const { mutate, isPending } = useMutation({
  mutationFn: RegisterStepTwo, 
  onSuccess: (data) => {
      if (data.message === "کد اشتباه است") {
    toast.error("رمز شما اشتباه است");
    return; // از ادامه اجرای منطق موفقیت جلوگیری کن
  }
    console.log(" موفقیت:", data);
     if(location.pathname==="/auth/login/verifying" ){
    navigate("/")
  }else{
navigate("complete")
  }
  },
  onError: (error) => {
    console.error(" خطا:", error);
    const status = error.response?.status;
    
    const serverMessage = error.response?.data?.message;

     if (status === 200 && serverMessage==="کد اشتباه است") {
      toast.error("رمز شما اشتباه است");
    } else{
      toast.error("خطایی در اتصال به سرور رخ داد. لطفاً دوباره تلاش کنید.");
    }
  }
});
  const navigate = useNavigate();
const location=useLocation();
const postData = (formData) => {
  mutate({ verifyCode: formData.verifyCode ,gmail:savedEmail}); 
 
};


  const initialValues = { verifyCode: "" ,gmail:savedEmail};
  const validationSchema = Yup.object({
    verifyCode: Yup.string()
      .length(6, "کد تایید باید ۶ رقم باشد")
      .required("وارد کردن کد تایید الزامی است"),
  });

  return (
    
    <Formik
      initialValues={initialValues}
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
<ErrorMessage name="verifyCode" className="text-danger-500 text-right" component={"span"} />
          
          <Button
          disabled={isPending}
            buttonClassName="w-8/10 font-lg font-bold"
            type="submit"
          >
            تایید رمز یکبار مصرف
          </Button>
<Toaster/>
          <Timer className="dark:text-white text-textC" />
        </Form>
      )}
    </Formik>
  );
};

export default InputOtp;