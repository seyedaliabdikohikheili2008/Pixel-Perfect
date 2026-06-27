import React from "react";
import Input from "../../../../atoms/Input/Input";
import { TbBrandTelegram } from "react-icons/tb";
import { Form, Formik } from "formik";
import Button from "../../../../atoms/Butoon/Button";
import { useProfileInfo } from "../../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import { useUpdateProfileInfo } from "../../../../../core/hooks/queries/user-panel/profile/useUpdateProfileInfo";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const EditLink = () => {
  const { t } = useTranslation("userPanel");
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
                toast.success(t("personal.success"));
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
                <h3 className="text-textC text-base">{t("link.telegram")}</h3>
                <Input
                  boxClassname={"w-50 sm:w-100"}
                  placeholder={t("link.enterTelegram")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.TelegramLink}
                  name="TelegramLink"
                  type="url"
                />
              </div>
              <div className="w-1/2 flex flex-col items-start gap-3 px-4">
                <h3 className="text-textC text-base">{t("link.linkedIn")}</h3>
                <Input
                  boxClassname={"w-50 sm:w-100"}
                  placeholder={t("link.enterLinkedIn")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.LinkdinProfile}
                  name="LinkdinProfile"
                  type="url"
                />
              </div>
              <Button
                children={`${isPending ? t("changePassword.submiting") : t("changePassword.save")}`}
                buttonClassName="w-fit mx-4"
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditLink;
