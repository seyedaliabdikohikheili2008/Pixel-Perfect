import React, { useEffect, useMemo, useState } from "react";
import icon from "../../../../assets/images/icons/landing/elements.png";
import motion from "../../../../assets/styles/popular-category-motion/PopularCategoryMotion.module.css";
import { useAllTechnologies } from "../../../../core/hooks/queries/technologies/useAllTechnologies";
const PopularCategoryTag = () => {
  const {
    data: TechnologyList = undefined,
    isError: TechnologyListErr,
    isLoading: TechnologyListLoading,
  } = useAllTechnologies();

  const repeatedItems = useMemo(() => {
    if (!TechnologyList?.data.length) return [];

    return Array.from(
      { length: 50 },
      (_, index) => TechnologyList.data[index % TechnologyList.data.length],
    );
  }, [TechnologyList]);

  return (
    <div className="w-full my-5 flex flex-col gap-5">
      <div className={`${motion.move} flex justify-center gap-3 -rotate-3`}>
        {repeatedItems?.map((tag, index) => (
          <div
            key={tag.id + index}
            className="shrink-0 w-44 h-14 rounded-full bg-neutral-50 text-textC border border-neutral-100 text-base font-bold flex gap-3 items-center justify-center"
          >
            {tag.techName}
            <img className="w-5 h-5" src={icon} alt="" />
          </div>
        ))}
      </div>
      <div className={`${motion.move} flex justify-center gap-3 -rotate-3`}>
        {repeatedItems?.map((tag, index) => (
          <div
            key={tag.id + index}
            className="shrink-0 w-44 h-14 rounded-full bg-neutral-50 text-textC border border-neutral-100 text-base font-bold flex gap-3 items-center justify-center"
          >
            {tag.techName}
            <img className="w-5 h-5" src={icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategoryTag;
