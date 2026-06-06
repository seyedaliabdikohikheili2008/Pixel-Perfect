import React, { useMemo } from "react";
import Button from "../../atoms/Butoon/Button";
import NewsCard from "../../organisms/news/news-card/NewsCard";
import TitleDesc from "../../molecules/section-title/SectionTitle";
import { useAllNews } from "../../../core/hooks/queries/news/useAllNews";
import { useTranslation } from "react-i18next";

const LandingNewNews = () => {
  const { t } = useTranslation("landing");

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
        <TitleDesc title={t("NewNews.title")} desc={t("NewNews.describe")} />
        <div className="flex gap-5 justify-center flex-wrap">
          {NewNews?.map((news, index) => {
            return <NewsCard key={news.title + index} detail={news} />;
          })}

          {/* <NewsCard />
          <NewsCard />
          <NewsCard /> */}
        </div>
        <Button
          children={t("NewNews.button")}
          buttonClassName="rounded-full"
        />
      </div>
    </>
  );
};

export default LandingNewNews;
