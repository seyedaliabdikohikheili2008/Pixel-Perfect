import React from "react";
import CircularProgress from "../../../../molecules/circular-progress/CircularProgress";
import PersonalInformationForm from "./PersonalInformationForm";
import { useProfileInfo } from "../../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import { useTranslation } from "react-i18next";

const PersonalInformation = () => {
  const {
    data: ProfileInfo = undefined,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
    error: ProfileInfoError,
  } = useProfileInfo();

  const { t } = useTranslation("userPanel");
  return (
    <div className="text-textC flex [@media(max-width:1200px)]:flex-col-reverse gap-7">
      <div className="flex-1 py-5 bg-background rounded-4xl">
        <PersonalInformationForm />
      </div>
      <div>
        <div className="[@media(max-width:1200px)]:w-full w-63 min-h-63 flex [@media(max-width:1200px)]:flex-row flex-col items-center justify-center gap-3 bg-background rounded-3xl">
          <h5 className="text-xl text-textC">
            {t("dashboard.profileCompleted")}
          </h5>
          <CircularProgress
            percentage={
              Number(ProfileInfo?.data?.profileCompletionPercentage) || 0
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
