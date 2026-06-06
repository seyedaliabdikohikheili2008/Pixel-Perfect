import React from "react";
import PopularCategoryTag from "../../organisms/landing/popular-category/PopularCategoryTag";
import SectionTitle from "../../molecules/section-title/SectionTitle";
import { useTranslation } from "react-i18next";

const PopularCtegory = () => {
  const { t } = useTranslation("landing");
  return (
    <>
      <div className="w-full overflow-hidden pb-5 flex flex-col gap-5 mb-24 items-center">
        <SectionTitle
          width="w-90"
          desc={t("PopularCtegory.describe")}
          title={t("PopularCtegory.title")}
        />
        <PopularCategoryTag />
      </div>
    </>
  );
};

export default PopularCtegory;
