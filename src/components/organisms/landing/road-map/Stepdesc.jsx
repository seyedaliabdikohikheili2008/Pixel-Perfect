import React from "react";

const Stepdesc = () => {
  return (
    <>
      <div className="w-full [@media(max-width:900px)]:hidden flex">
        <div className="w-1/4 flex flex-col items-center">
          <h3 className="text-3xl font-bold">
            <span className="text-[#FF5D26]">F</span>
            <span className="text-[#FF8776]">I</span>
            <span className="text-[#BD6AFF]">G</span>
            <span className="text-[#21DCFF]">M</span>
            <span className="text-[#0FF29C]">A</span>
          </h3>
          <p className="text-neutral-500 text-xs w-35">
            برای شروع باید از زبان های مارکاپ استفاده کرد و بعد وارده استایل دهی
            شد
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center">
          <h3 className="text-3xl font-bold text-[#70F3F6]">
            REACT JS
          </h3>
          <p className="text-neutral-500 text-xs w-35">
            برای شروع باید از زبان های مارکاپ استفاده کرد و بعد وارده استایل دهی
            شد
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center">
          <h3 className="text-3xl font-bold">
            <span className="text-[#FFFF00]">JAVA</span>
            <span className="text-[#51534F]">SCRIPT</span>
          </h3>
          <p className="text-neutral-500 text-xs w-35">
            برای شروع باید از زبان های مارکاپ استفاده کرد و بعد وارده استایل دهی
            شد
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center">
          <h3 className="text-3xl font-bold">
            <span className="text-[#FF733A]">HTML</span>
            <span className="text-[#000000]">&</span>
            <span className="text-[#2289DD]">CSS</span>
          </h3>
          <p className="text-neutral-500 text-xs w-35">
            برای شروع باید از زبان های مارکاپ استفاده کرد و بعد وارده استایل دهی
            شد
          </p>
        </div>
      </div>
    </>
  );
};

export default Stepdesc;
