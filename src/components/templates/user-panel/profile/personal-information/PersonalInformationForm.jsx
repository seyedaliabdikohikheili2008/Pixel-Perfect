import { Form, Formik } from "formik";
import React from "react";
import Input from "../../../../atoms/Input/Input";
import Button from "../../../../atoms/Butoon/Button";

const PersonalInformationForm = () => {
  return (
    <>
      <Formik className="w-full">
        <Form className="w-full flex flex-wrap gap-y-7">
          <div className="w-1/2 flex flex-col items-start gap-3 px-4">
            <h3 className="text-textC text-base">نام</h3>
            <Input
              boxClassname={"w-full"}
              placeholder={"نام خود را وارد کنید"}
            />
          </div>
          <div className="w-1/2 flex flex-col items-start gap-3 px-4">
            <h3 className="text-textC text-base">نام خانوادگی</h3>
            <Input
              boxClassname={"w-full"}
              placeholder={"نام خانوادگی خود را وارد کنید"}
            />
          </div>
          <div className="w-full flex flex-col items-start gap-3 px-4">
            <h3 className="text-textC text-base">درباره من</h3>
            <textarea
              className="w-full bg-neutral-50 rounded-xl resize-none p-2"
              placeholder="یک متن درباره خود را وارد کنید"
            />
          </div>
          <div className="w-1/2 flex flex-col items-start gap-3 px-4">
            <h3 className="text-textC text-base">شماره همراه</h3>
            <Input
              boxClassname={"w-full"}
              placeholder={"شماره همراه خود را وارد کنید"}
              type="tel"
            />
          </div>
          <div className="w-1/2 flex flex-col items-start gap-3 px-4">
            <h3 className="text-textC text-base">کد ملی</h3>
            <Input
              boxClassname={"w-full"}
              placeholder={"کد ملی خود را وارد کنید"}
            />
          </div>
          <div className="w-1/2 flex flex-col items-start gap-3 px-4">
            <h3 className="text-textC text-base">تاریخ تولد</h3>
            <Input
              boxClassname={"w-full"}
              placeholder={"تاریخ تولد خود را وارد کنید"}
              type="date"
            />
          </div>
          <div className="w-1/2 flex flex-col items-start gap-3 px-4">
            <h3 className="text-textC text-base">ایمیل</h3>
            <Input
              boxClassname={"w-full"}
              placeholder={"ایمیل خود را وارد کنید"}
              type="email"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-3 px-4">
            <h3 className="text-textC text-base">آدرس سکونت</h3>
            <textarea
              className="w-full bg-neutral-50 rounded-xl resize-none p-2"
              placeholder="آدرس سکونت خود را وارد کنید"
            />
          </div>
          <div className="flex gap-5 w-full px-4">
            <h3 className="text-textC text-base">جنسیت</h3>
            <div className="flex items-center gap-2">
              <input
                className="w-5 h-5"
                type="radio"
                id="woman"
                value="false"
                name="gender"
              />
              <label className="text-textC text-base" htmlFor="woman">
                زن
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-5 h-5"
                type="radio"
                id="man"
                value="true"
                name="gender"
              />
              <label className="text-textC text-base" htmlFor="man">
                مرد
              </label>
            </div>
          </div>
          <Button buttonClassName="mx-4" children={"اعمال تغییرات"}/>
        </Form>
      </Formik>
    </>
  );
};

export default PersonalInformationForm;
