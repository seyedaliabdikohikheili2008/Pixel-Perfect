import React from "react";
import Input from "../../../../atoms/Input/Input";
import { TbBrandTelegram } from "react-icons/tb";
import { Form, Formik } from "formik";
import Button from "../../../../atoms/Butoon/Button";
import { useProfileInfo } from "../../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import { useUpdateProfileInfo } from "../../../../../core/hooks/queries/user-panel/profile/useUpdateProfileInfo";
import toast from "react-hot-toast";

const EditLink = () => {
  const {
    data: ProfileInfo = undefined,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
    error: ProfileInfoError,
  } = useProfileInfo();

  const { mutate: updateProfile, isPending } = useUpdateProfileInfo();

  return (
    <>
      <div className="w-full bg-background rounded-3xl">
        <Formik
          enableReinitialize={true}
          initialValues={{
            LinkdinProfile: ProfileInfo?.data?.linkdinProfile || "",
            TelegramLink: ProfileInfo?.data?.telegramLink || "",
          }}
          onSubmit={(values) => {
            const formData = new FormData();

            formData.append("FName", ProfileInfo?.data?.fName);
            formData.append("LName", ProfileInfo?.data?.lName);
            formData.append("BirthDay", ProfileInfo?.data?.birthDay);

            formData.append("LinkdinProfile", String(values.LinkdinProfile));
            formData.append("TelegramLink", String(values.TelegramLink));

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
            <Form className="w-full flex flex-col p-4 gap-y-7">
              <div className="w-1/2 flex flex-col items-start gap-3 px-4">
                <h3 className="text-textC text-base">تلگرام</h3>
                <Input
                  boxClassname={"w-50 sm:w-100"}
                  placeholder={"لینک تلگرام خود را وارد کنید"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.TelegramLink}
                  name="TelegramLink"
                  type="url"
                />
              </div>
              <div className="w-1/2 flex flex-col items-start gap-3 px-4">
                <h3 className="text-textC text-base">لینکدین</h3>
                <Input
                  boxClassname={"w-50 sm:w-100"}
                  placeholder={"لینک لینکدین خود را وارد کنید"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.LinkdinProfile}
                  name="LinkdinProfile"
                  type="url"
                />
              </div>
              <Button
                children={`${isPending ? "درحال ارسال..." : "اعمال تغییرات"}`}
                buttonClassName="w-fit"
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditLink;
