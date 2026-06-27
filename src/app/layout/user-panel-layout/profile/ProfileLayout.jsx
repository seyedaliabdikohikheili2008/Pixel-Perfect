import React from "react";
import profile from "../../../../assets/images/course-dtail/user.png";
import { MdOutlineEmail } from "react-icons/md";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useProfileInfo } from "../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import { useTranslation } from "react-i18next";

const ProfileLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("userPanel");

  const {
    data: ProfileInfo = undefined,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
    error: ProfileInfoError,
  } = useProfileInfo();
  return (
    <>
      <div className="bg-primary-400 rounded-3xl w-full h-75 relative">
        <div className="w-fit h-fit p-3 rounded-full absolute right-15 -bottom-15 flex justify-center items-center bg-dashboardBg">
          <img
            className="w-30 h-30 rounded-full overflow-hidden object-cover"
            src={ProfileInfo?.data?.currentPictureAddress || profile}
            alt=""
          />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-10 justify-between px-7">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <h2 className="text-textC text-nowrap text-3xl font-bold">
              {ProfileInfo?.data?.fName + " " + ProfileInfo?.data?.lName ||
                t("profileLayout.unnamed")}
            </h2>
            <p className="text-[#787878] text-base">( دانشجو )</p>
          </div>
          <div className="flex items-center gap-1 text-[#787878]">
            <MdOutlineEmail color="#787878" size={20} />
            <p>{ProfileInfo?.data?.gmail}</p>
          </div>
        </div>
        {ProfileInfo?.data?.userAbout ? (
          <div className="w-90 flex flex-col gap-3 items-start text-base text-textC">
            <h5 className="text-[#787878]">{t("profileLayout.aboutMe")}</h5>
            <p className="text-justify">{ProfileInfo?.data?.userAbout}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-neutral-50 py-5 px-8 rounded-3xl">
          <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-neutral-500 sm:flex sm:items-center sm:justify-start sm:gap-6 sm:text-sm">
            <li
              onClick={() => navigate("/user-panel/profile")}
              className={`cursor-pointer rounded-xl p-3 text-center transition ${
                location.pathname === "/user-panel/profile"
                  ? "bg-primary-300 text-white"
                  : "bg-neutral-50 hover:bg-neutral-100"
              }`}
            >
              {t("profileLayout.personal")}
            </li>

            <li
              onClick={() => navigate("/user-panel/profile/image")}
              className={`cursor-pointer rounded-xl p-3 text-center transition ${
                location.pathname === "/user-panel/profile/image"
                  ? "bg-primary-300 text-white"
                  : "bg-neutral-50 hover:bg-neutral-100"
              }`}
            >
              {t("profileLayout.profilePicture")}
            </li>

            <li
              onClick={() => navigate("/user-panel/profile/home-address")}
              className={`cursor-pointer rounded-xl p-3 text-center transition ${
                location.pathname === "/user-panel/profile/home-address"
                  ? "bg-primary-300 text-white"
                  : "bg-neutral-50 hover:bg-neutral-100"
              }`}
            >
              {t("profileLayout.address")}
            </li>

            <li
              onClick={() => navigate("/user-panel/profile/link")}
              className={`cursor-pointer rounded-xl p-3 text-center transition ${
                location.pathname === "/user-panel/profile/link"
                  ? "bg-primary-300 text-white"
                  : "bg-neutral-50 hover:bg-neutral-100"
              }`}
            >
              {t("profileLayout.links")}
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default ProfileLayout;
