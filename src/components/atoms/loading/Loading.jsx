import React from "react";

const Loading = ({ size, circleSize }) => {
  return (
    <div
      className={`mx-auto flex items-center gap-3 text-textC ${size ? size : "text-3xl lg:text-5xl"} font-bold`}
    >
      در حال بارگذاری...
      <div
        className={`${circleSize ? `w-${circleSize}` : "w-8 lg:w-10"} ${circleSize ? `h-${circleSize}` : "h-8 lg:h-10"} border-5 border-gray-300 border-t-blue-500 rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Loading;
