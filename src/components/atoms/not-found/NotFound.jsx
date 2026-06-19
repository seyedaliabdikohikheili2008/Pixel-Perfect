import React from "react";
import { CiFaceFrown } from "react-icons/ci";

const NotFound = ({ size }) => {
  return (
    <>
      <h1
        className={`mx-auto my-5 gap-1 flex items-center text-textC ${size ? size : "text-3xl lg:text-5xl"} font-bold`}
      >
        نتیجه‌ای یافت نشد
        <CiFaceFrown />
      </h1>
    </>
  );
};

export default NotFound;
