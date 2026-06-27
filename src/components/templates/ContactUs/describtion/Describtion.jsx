import React from 'react'
import person from "../../../../assets/images/contactUs/person.png";
import { useTranslation } from 'react-i18next';
const Describtion = () => {
  const { t } = useTranslation("contactUs");
  return (
    <div className="flex items-center flex-col w-11/12 m-auto gap-8 justify-between xl:flex-row">
            <img src={person} alt="" />
            <div className=" flex flex-col text-right gap-8">
              <h2 className="text-textC font-bold text-3xl">
                {t("explanation.title")}
              </h2>
              <p className="font-normal text-neutral-300 text-xl">
                {t("explanation.describe")}
              </p>
            </div>
          </div>
  )
}

export default Describtion