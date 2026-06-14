import React from "react";
import { CiFaceFrown } from "react-icons/ci";

const NotFound = ({ size }) => {
  return (
    <>
      <h1
        className={`mx-auto gap-1 flex text-textC ${size ? size : "text-5xl"} font-bold`}
      >
        دوره مورد نظر یافت نشد
        <CiFaceFrown />
      </h1>
    </>
  );
};

export default NotFound;
