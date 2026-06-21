import React from "react";
import NewsSidebar from "../../components/templates/newsDetail//NewsSidebar/NewsSidebar";
import SectionTitle from "../../components/molecules/section-title/SectionTitle";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getNewsDetail } from "../../core/services/news-detail/news-detail";
import NewsDescription from "../../components/templates/newsDetail/news-describtion/NewsDescribtion";
import { getTopNews } from "../../core/services/news-detail/topnews/Topnews";
import NewsCard from "../../components/organisms/news/news-card/NewsCard";
import { useTranslation } from "react-i18next";
import Loading from "../../components/atoms/loading/Loading";
const NewsDetail = () => {
  const { newsId } = useParams();
  const { t } = useTranslation("newsDetail");
  console.log("Value of ID from URL:", newsId);

  const { data, isLoading, error } = useQuery({
    queryKey: ["news-detail", newsId],
    queryFn: () => getNewsDetail(newsId),
    enabled: !!newsId,
    staleTime: 0,
  });

  const { data: topnewsData, isLoading: isTopLoading } = useQuery({
    queryKey: ["news-top", 3],
    queryFn: () => getTopNews(newsId),
  });

  if (isLoading || isLoading)
    return <div className="h-300 m-auto flex justify-center items-center"><Loading/></div>;
  if (error) return <div className="text-danger-600">خطایی رخ داده است.</div>;

  const newsData = data?.data.detailsNewsDto;
  
  return (
    <>
      <div className="w-11/12 flex-col flex gap-10 xl:flex-row md:flex-col justify-between m-auto py-10">
        <NewsDescription news={newsData} />
        <NewsSidebar news={newsData} />
      </div>
      {topnewsData?.data?.length > 0 && (
  <div className="w-11/12 mx-auto py-10">
    <SectionTitle width="w-75" title={t("similar")} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between mt-8">
      {topnewsData.data.map((detail) => (
        <NewsCard key={detail.newsId} detail={detail} />
      ))}
    </div>
  </div>
)}
    </>
  );
};

export default NewsDetail;
