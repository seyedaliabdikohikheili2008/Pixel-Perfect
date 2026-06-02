import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../atoms/Butoon/Button";
import Input from "../../atoms/Input/Input";
import email from "../../../assets/images/icons/login-signup-form/email.png";
import password from "../../../assets/images/icons/login-signup-form/password.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const ResetPasswordStepTwoForm = () => {
const validationSchema=Yup.object({
  password: Yup.string().required("رمز اجباری است"),
  password2: Yup.string().required("تکرار رمز اجباری است").oneOf([Yup.ref("password")],"رمز عبور و تکرار آن یکسان نیستند")
})
const sumbitHandeler=(values)=>{
  console.log(values);
  navigate("/")
}
const navigate = useNavigate();
  return (
    <>
        <h1 className="font-bold font-sans text-textC  text-3xl">
          فراموشی رمز عبور
        </h1>
        <p className="font-normal text-xl text-textC">
          رمز عبور جدید برای خود تعیین کنید
        </p>
        <Formik
          initialValues={{
            password: "",
            password2:""
          }}
          onSubmit={sumbitHandeler}
          validationSchema={validationSchema}
        >
          {({ values, handleChange,errors={}, touched }) => (
            <Form
              className="w-full flex flex-col items-center gap-6"
            >
              <div className="w-8/10 flex flex-col justify-end">
              <div className={` focus:ring-indigo-500 w-full bg-neutral-50  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                errors.password && touched.password ? ' border border-red-500' : ''
              }`} >
                <Input
                  icon={password}
                  placeholder={"رمز عبور خود را وارد کنید"}
                  iconClassname={"mx-3.5"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <ErrorMessage className="text-danger-500 text-right" name="password" component={"span"}/>
              </div>
               <div className="w-8/10 flex flex-col justify-end">
              <div className={` focus:ring-indigo-500 w-full bg-neutral-50  rounded-xl flex flex-col justify-end focus:border-indigo-500  ${
                errors.password2 && touched.password2 ? ' border border-red-500' : ''
              }`} >
                <Input
                  icon={password}
                  placeholder={"تکرار رمز عبور"}
                  iconClassname={"mx-3.5"}
                  name="password2"
                  value={values.password2}
                  onChange={handleChange}
                />
              </div>
              <ErrorMessage className="text-danger-500 text-right" name="password2" component={"span"}/>
              </div>
              <Button
                children={"ثبت رمز عبور جدید"}
                buttonClassName="w-8/10 font-lg font-bold"
                type="submit"
              />
            </Form>
          )}
        </Formik>

        
      </>
  );
};

export default ResetPasswordStepTwoForm;
