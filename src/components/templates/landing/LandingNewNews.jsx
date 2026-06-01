import React from "react";
import Button from "../../atoms/Butoon/Button";
import NewsCard from "../../organisms/news/news-card/NewsCard";
import TitleDesc from "../../molecules/title-desc/TitleDesc";

const LandingNewNews = () => {
  return (
    <>
      <div className="w-11/12 mx-auto flex flex-col items-center gap-10 mb-24">
        <TitleDesc
          title={"جدیترین اخبار"}
          desc={"محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید."}
        />
        <div className="flex gap-5 justify-center flex-wrap">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <Button
          children={"دوست داری ببیشتر ببینی"}
          buttonClassName="rounded-full"
        />
      </div>
    </>
  );
};

export default LandingNewNews;
