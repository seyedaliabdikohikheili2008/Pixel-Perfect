import React from "react";
import NewsListFilter from "./news-list-filter/NewsListFilter";
import NewsListContent from "./news-list-content/NewsListContent";

const NewsListMain = () => {
  return (
    <>
      <div className="w-11/12 relative mx-auto flex justify-evenly gap-9 mb-24">
        <NewsListFilter />
        <NewsListContent />
      </div>
    </>
  );
};

export default NewsListMain;
