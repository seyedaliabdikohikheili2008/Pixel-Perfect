import React from "react";
import RoadMapSvg from "../../organisms/landing/road-map/RoadMapSvg";
import Stepdesc from "../../organisms/landing/road-map/Stepdesc";

const RoadMap = () => {
  return (
    <>
      <div className="w-11/12 flex flex-col gap-5 items-center mb-24 mx-auto">
        <h2 className="w-75 py-3.5 text-3xl font-bold bg-[url('/text-line/line-6.png')] text-textC bg-no-repeat bg-bottom-right bg-auto">
          نقشه راه شما
        </h2>
        <h5 className="text-neutral-400 text-base font-medium">
          ما اینجا هستیم تا بشما کمک کنیم راه خود را پیدا کنید{" "}
        </h5>
        <RoadMapSvg />
        <Stepdesc />
      </div>
    </>
  );
};

export default RoadMap;
