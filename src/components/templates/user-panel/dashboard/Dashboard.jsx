import React from "react";
import CircularProgress from "../../../molecules/circular-progress/CircularProgress";
import { useAllNews } from "../../../../core/hooks/queries/news/useAllNews";
import Loading from "../../../atoms/loading/Loading";
import { useProfileInfo } from "../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";

const Dashboard = () => {
  const params = {
    PageNumber: 1,
    RowsOfPage: 5,
    SortingCol: "insertDate",
    SortType: "desc",
  };
  const {
    data: latestNewsList = undefined,
    isError: latestNewsListErr,
    isLoading: latestNewsListLoading,
  } = useAllNews(params);

  const {
    data: ProfileInfo = undefined,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
  } = useProfileInfo();

  return (
    <>
      <div className="w-full flex flex-col items-center sm:flex-row gap-4">
        <div className="w-full flex-1 flex flex-col gap-4 items-center py-5 bg-background rounded-3xl">
          <h5 className="w-11/12 flex justify-start text-xl text-textC font-bold">
            جدید ترین اخبار و مقالات
          </h5>
          <div className="w-11/12 flex flex-col flex-1 gap-2 justify-between divide-dashed divide-y-2 divide-neutral-300">
            {latestNewsListLoading ? <Loading /> : ""}
            {latestNewsList
              ? latestNewsList?.data.news.map((item, index) => {
                  return (
                    <div
                      className="w-full flex justify-between gap-2 pb-2"
                      key={index}
                    >
                      <h5 className="text-neutral-800 text-sm line-clamp-1">
                        {item?.title}
                      </h5>
                      <h5 className="text-sm text-neutral-600">
                        {item.insertDate
                          ? new Date(item.insertDate).toLocaleDateString(
                              "fa-IR",
                            )
                          : ""}
                      </h5>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="w-63 min-h-63 flex flex-col items-center justify-center gap-3 bg-background rounded-3xl">
          <h5 className="text-xl text-textC">پروفایل تکمیل شده</h5>
          <CircularProgress
            percentage={
              Number(ProfileInfo?.data?.profileCompletionPercentage) || 0
            }
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
