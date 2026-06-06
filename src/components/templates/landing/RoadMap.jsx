import React from "react";
import RoadMapSvg from "../../organisms/landing/road-map/RoadMapSvg";
import Stepdesc from "../../organisms/landing/road-map/Stepdesc";
import TitleDesc from "../../molecules/section-title/SectionTitle";
import { useTranslation } from "react-i18next";

const RoadMap = () => {
  const { t } = useTranslation("landing");
  return (
    <>
      <div className="w-11/12 flex flex-col gap-5 items-center mb-24 mx-auto">
        <TitleDesc
          width="w-75"
          desc={t("RoadMap.describe")}
          title={t("RoadMap.title")}
        />
        <RoadMapSvg />
        <Stepdesc />
      </div>
    </>
  );
};

export default RoadMap;
