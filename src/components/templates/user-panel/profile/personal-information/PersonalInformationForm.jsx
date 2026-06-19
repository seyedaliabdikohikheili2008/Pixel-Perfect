import { Form, Formik } from "formik";
import React from "react";
import Input from "../../../../atoms/Input/Input";
import Button from "../../../../atoms/Butoon/Button";
import { useProfileInfo } from "../../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import { useUpdateProfileInfo } from "../../../../../core/hooks/queries/user-panel/profile/useUpdateProfileInfo";
import toast from "react-hot-toast";

const PersonalInformationForm = () => {
  const {
    data: ProfileInfo = undefined,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
    error: ProfileInfoError,
  } = useProfileInfo();

  const { mutate: updateProfile, isPending } = useUpdateProfileInfo();

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          FName: ProfileInfo?.data?.fName || "",
          LName: ProfileInfo?.data?.lName || "",
          UserAbout: ProfileInfo?.data?.userAbout || "",
          HomeAdderess: ProfileInfo?.data?.homeAdderess || "",
          NationalCode: ProfileInfo?.data?.nationalCode || "",
          BirthDay: ProfileInfo?.data?.birthDay
            ? ProfileInfo.data.birthDay.split("T")[0]
            : "",
          Gender: String(ProfileInfo?.data?.gender ?? true),
        }}
        onSubmit={(values) => {
          const formData = new FormData();

          formData.append("FName", values.FName);
          formData.append("LName", values.LName);
          formData.append("UserAbout", values.UserAbout);
          formData.append("Gender", values.Gender === "true");
          formData.append(
            "BirthDay",
            values.BirthDay ? new Date(values.BirthDay).toISOString() : null,
          );
          formData.append("HomeAdderess", values.HomeAdderess);
          formData.append("NationalCode", values.NationalCode);

          updateProfile(formData, {
            onSuccess: () => {
              toast.success("مشخصات آپدیت شد");
            },
            onError: (err) => {
              console.log(err?.response?.data);
            },
          });
        }}
        className="w-full"
      >
        {({ values, handleChange, handleBlur }) => (
          <Form className="w-full flex flex-wrap gap-y-7">
            <div className="w-1/2 flex flex-col items-start gap-3 px-4">
              <h3 className="text-textC text-base">نام</h3>
              <Input
                boxClassname={"w-full"}
                placeholder={"نام خود را وارد کنید"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.FName}
                name="FName"
              />
            </div>
            <div className="w-1/2 flex flex-col items-start gap-3 px-4">
              <h3 className="text-textC text-base">نام خانوادگی</h3>
              <Input
                boxClassname={"w-full"}
                placeholder={"نام خانوادگی خود را وارد کنید"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.LName}
                name="LName"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-3 px-4">
              <h3 className="text-textC text-base">درباره من</h3>
              <textarea
                className="w-full bg-neutral-50 rounded-xl resize-none p-2"
                placeholder="یک متن درباره خود را وارد کنید"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.UserAbout}
                name="UserAbout"
              />
            </div>
            {/* <div className="w-1/2 flex flex-col items-start gap-3 px-4">
              <h3 className="text-textC text-base">شماره همراه</h3>
              <Input
                boxClassname={"w-full"}
                placeholder={"شماره همراه خود را وارد کنید"}
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
              />
            </div> */}
            <div className="w-1/2 flex flex-col items-start gap-3 px-4">
              <h3 className="text-textC text-base">کد ملی</h3>
              <Input
                boxClassname={"w-full"}
                placeholder={"کد ملی خود را وارد کنید"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.NationalCode}
                name="NationalCode"
              />
            </div>
            <div className="w-1/2 flex flex-col items-start gap-3 px-4">
              <h3 className="text-textC text-base">تاریخ تولد</h3>
              <Input
                boxClassname={"w-full"}
                placeholder={"تاریخ تولد خود را وارد کنید"}
                onChange={handleChange}
                onBlur={handleBlur}
                type="date"
                value={values.BirthDay}
                name="BirthDay"
              />
            </div>
            {/* <div className="w-1/2 flex flex-col items-start gap-3 px-4">
              <h3 className="text-textC text-base">ایمیل</h3>
              <Input
                boxClassname={"w-full"}
                placeholder={"ایمیل خود را وارد کنید"}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
              />
            </div> */}
            <div className="w-full flex flex-col items-start gap-3 px-4">
              <h3 className="text-textC text-base">آدرس سکونت</h3>
              <textarea
                className="w-full bg-neutral-50 rounded-xl resize-none p-2"
                placeholder="آدرس سکونت خود را وارد کنید"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.HomeAdderess}
                name="HomeAdderess"
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
                  name="Gender"
                  checked={values.Gender === "false"}
                  onChange={handleChange}
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
                  name="Gender"
                  checked={values.Gender === "true"}
                  onChange={handleChange}
                />
                <label className="text-textC text-base" htmlFor="man">
                  مرد
                </label>
              </div>
            </div>
            <Button
              buttonClassName="mx-4"
              type={"submit"}
              children={"اعمال تغییرات"}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PersonalInformationForm;
