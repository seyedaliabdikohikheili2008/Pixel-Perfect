import React from "react";

const TitleDesc = ({
  title,
  desc,
  width = "w-90",
  titleclassName = "",
  descClassName = "",
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h2
          className={`${width} py-3.5 text-3xl font-bold bg-[url('/text-line/line-6.png')] text-textC bg-no-repeat bg-bottom-right bg-auto ${titleclassName}`}
        >
          {title}
        </h2>
        <h5
          className={`text-neutral-400 text-base font-medium ${descClassName}`}
        >
          {desc}
        </h5>
      </div>
    </>
  );
};

export default TitleDesc;
