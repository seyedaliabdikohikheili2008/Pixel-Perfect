import React from "react";
import PopularCategoryTag from "../../organisms/landing/popular-category/PopularCategoryTag";
import SectionTitle from "../../molecules/section-title/SectionTitle";

const PopularCtegory = () => {
  return (
    <>
      <div className="w-full overflow-hidden pb-5 flex flex-col gap-5 mb-24 items-center">
        <SectionTitle
          width="w-90"
          desc={" محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید"}
          title={"محبوب ترین دسته بندی ها"}
        />
        <PopularCategoryTag />
      </div>
    </>
  );
};

export default PopularCtegory;
