import React from "react";
import CircularProgress from "../../../../molecules/circular-progress/CircularProgress";
import PersonalInformationForm from "./PersonalInformationForm";
import { useProfileInfo } from "../../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";

const PersonalInformation = () => {
  const {
    data: ProfileInfo = undefined,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
    error: ProfileInfoError,
  } = useProfileInfo();
  return (
    <div className="text-textC flex gap-7">
      <div className="flex-1 py-5 bg-background rounded-4xl">
        <PersonalInformationForm />
      </div>
      <div>
        <div className="w-63 min-h-63 flex flex-col items-center justify-center gap-3 bg-background rounded-3xl">
          <h5 className="text-xl text-textC">پروفایل تکمیل شده</h5>
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
