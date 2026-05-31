import React from "react";
import icon from "../../../../assets/images/icons/landing/elements.png";
const PopularCategoryTag = () => {
  const tags = ["برنامه نویسی"];

  const repeatedItems = Array.from(
    { length: 50 },
    (item, index) => tags[index % tags.length],
  );

  return (
    <div className="w-full my-5 flex flex-col gap-5">
      <div className="flex gap-3 -rotate-3">
        {repeatedItems.map((tag, index) => (
          <div
            key={index}
            className="shrink-0 w-44 h-14 rounded-full bg-neutral-50 text-textC border border-neutral-100 text-base font-bold flex gap-3 items-center justify-center"
          >
            {tag}
            <img className="w-5 h-5" src={icon} alt="" />
          </div>
        ))}
      </div>
      <div className="flex gap-3 -rotate-3">
        {repeatedItems.map((tag, index) => (
          <div
            key={index}
            className="shrink-0 w-44 h-14 rounded-full bg-neutral-50 text-textC border border-neutral-100 text-base font-bold flex gap-3 items-center justify-center"
          >
            {tag}
            <img className="w-5 h-5" src={icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategoryTag;
