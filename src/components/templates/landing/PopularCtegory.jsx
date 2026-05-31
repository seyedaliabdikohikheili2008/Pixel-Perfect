import React from "react";
import PopularCategoryTag from "../../organisms/landing/popular-category/PopularCategoryTag";

const PopularCtegory = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-5 mb-24 items-center">
        <h2 className="w-90 py-3.5 text-3xl font-bold bg-[url('/text-line/line-6.png')] text-textC bg-no-repeat bg-bottom-right bg-auto">
          محبوب ترین دسته بندی ها
        </h2>
        <h5 className="text-neutral-400 text-base font-medium">
          محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید.{" "}
        </h5>
        <PopularCategoryTag />
      </div>
    </>
  );
};

export default PopularCtegory;
