import React from "react";
import Button from "../../atoms/Butoon/Button";
import NewsCard from "../../organisms/news/news-card/NewsCard";

const LandingNewNews = () => {
  return (
    <>
      <div className="w-11/12 mx-auto flex flex-col items-center gap-10 mb-24">
        <h2 className="w-90 py-3.5 text-3xl font-bold bg-[url('/text-line/line-6.png')] text-textC bg-no-repeat bg-bottom-right bg-auto">
          جدیترین اخبار
        </h2>
        <h5 className="text-neutral-400 text-base font-medium">
          محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید.{" "}
        </h5>
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
