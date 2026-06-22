import React from "react";
import Logo from "../../atoms/Logo/Logo";
import samandehi from "../../../assets/images/icons/samandehi-logo/samandehi.png";
import Copyright from "../../molecules/footer/CopyrightFooter";
import ScrollToTopButton from "../../atoms/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <>
      <div className="after:content-[''] after:w-29 after:h-27 after:bg-rootBg after:absolute after:-top-4 after:rounded-2xl after:left-21.5 relative flex flex-col w-full bg-neutral-50  rounded-tl-[40px] rounded-tr-[40px]">
        <ScrollToTopButton />
        <div className="w-11/12  mt-20 mb-10 m-auto flex-col flex items-center gap-10 md:justify-between md:flex-row">
          <div className="flex w-70 flex-col items-center gap-6.25 h-53.75">
            <Logo variant={"linear"} className={""} responsive="true" />
            <p className="font-sans font-normal text-neutral-600 text-xs leading-normal">
              {t("describe")}
            </p>
          </div>

          <div className="hidden min-w-2/4 lg:flex gap-8">
            <div className=" hidden md:h-71.25 text-neutral-600 md:flex flex-col gap-2 ">
              <h1 className="font-sans font-semibold text-textC flex justify-start leading-5">
                {t("sectionOneTitle")}
              </h1>
              <div className="w-7.5 h-1 bg-primary-500"></div>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionOneLi1")}
              </p>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionOneLi2")}
              </p>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionOneLi3")}
              </p>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionOneLi4")}
              </p>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionOneLi5")}
              </p>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionOneLi6")}
              </p>
            </div>

            <div className=" hidden md:h-71.25 text-neutral-600 md:flex flex-col gap-2 ">
              <h1 className="font-sans font-semibold text-textC flex justify-start leading-5 dark:text-white">
                {t("sectionTwoTitle")}
              </h1>
              <div className="w-7.5 h-1 bg-primary-500"></div>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionTwoLi1")}
              </p>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionTwoLi2")}
              </p>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionTwoLi3")}
              </p>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionTwoLi4")}
              </p>
              <p className="font-medium text-[16px] flex justify-start leading-7">
                {t("sectionTwoLi5")}
              </p>
            </div>
            <div className="h-31.75 text-neutral-600 flex flex-col gap-2 ">
              <h1 className="font-sans font-semibold text-textC flex justify-start leading-5 dark:text-white">
                {t("sectionThreeTitle")}
              </h1>
              <div className="w-7.5 h-1 bg-primary-500"></div>
              <p className="font-normal text-[16px] flex justify-start leading-7">
                {t("sectionThreeLi1")}
              </p>
            </div>
          </div>
          <div className="min-w-27.75 h-27.75">
            <img
              className="w-full mb-10 md:mb-0"
              src={samandehi}
              alt="logo samandehi.ir"
            />
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
