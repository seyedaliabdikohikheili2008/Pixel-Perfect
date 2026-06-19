import React from "react";
import { MdErrorOutline } from "react-icons/md";
const Error = ({ size }) => {
  return (
    <>
      <h1
        className={`mx-auto my-10 gap-1 flex items-center text-danger-500 ${size ? size : "text-2xl lg:text-5xl"} font-bold`}
      >
       ⓘ مشکلی در ارتباط با سرور رخ داده است
        {/* <MdErrorOutline /> */}
      </h1>
    </>
  );
};

export default Error;
