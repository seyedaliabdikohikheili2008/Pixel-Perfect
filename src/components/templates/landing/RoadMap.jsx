import React from "react";
import RoadMapSvg from "../../organisms/landing/road-map/RoadMapSvg";
import Stepdesc from "../../organisms/landing/road-map/Stepdesc";
import TitleDesc from "../../molecules/section-title/SectionTitle";

const RoadMap = () => {
  return (
    <>
      <div className="w-11/12 flex flex-col gap-5 items-center mb-24 mx-auto">
        <TitleDesc
          width="w-75"
          desc={" ما اینجا هستیم تا بشما کمک کنیم راه خود را پیدا کنید"}
          title={"نقشه راه شما"}
        />
        <RoadMapSvg />
        <Stepdesc />
      </div>
    </>
  );
};

export default RoadMap;
