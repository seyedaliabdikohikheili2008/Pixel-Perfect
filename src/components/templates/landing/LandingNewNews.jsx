import React, { useMemo } from "react";
import Button from "../../atoms/Butoon/Button";
import NewsCard from "../../organisms/news/news-card/NewsCard";
import TitleDesc from "../../molecules/section-title/SectionTitle";
import { useAllNews } from "../../../core/hooks/queries/news/useAllNews";

const LandingNewNews = () => {
  const {
    data: NewsList = undefined,
    isError: NewsListErr,
    isLoading: NewsListLoading,
  } = useAllNews();

  const NewNews = useMemo(() => {
    if (NewsList) {
      return [...NewsList.data.news]
        .sort((a, b) => new Date(b.insertDate) - new Date(a.insertDate))
        .slice(0, 3);
    }
  }, [NewsList]);

  return (
    <>
      <div className="w-11/12 mx-auto flex flex-col items-center gap-10 mb-24">
        {console.log("News ", NewNews)}
        <TitleDesc
          title={"جدیترین اخبار"}
          desc={"محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید."}
        />
        <div className="flex gap-5 justify-center flex-wrap">
          {NewNews?.map((news, index) => {
            return <NewsCard key={news.title + index} detail={news} />;
          })}

          {/* <NewsCard />
          <NewsCard />
          <NewsCard /> */}
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
