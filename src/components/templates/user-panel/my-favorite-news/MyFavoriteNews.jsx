import React, { useMemo, useRef, useState } from "react";
import { useMyFavoriteCourse } from "../../../../core/hooks/queries/user-panel/dashboard/useMyFavoriteCourse";
import { LiaSearchSolid } from "react-icons/lia";
import Input from "../../../atoms/Input/Input";
import Loading from "../../../atoms/loading/Loading";
import NotFound from "../../../atoms/not-found/NotFound";
import TeacherListPagination from "../../teacher-list/teacher-list-content/TeacherListPagination";
import Search from "../../../../core/utils/search/Search";
import Button from "../../../atoms/Butoon/Button";
import { RxCross1 } from "react-icons/rx";
import { useMyFavoriteNews } from "../../../../core/hooks/queries/user-panel/dashboard/useMyFavoriteNews";

const MyFavoriteNews = () => {
  const {
    data: MyFavoriteNews = undefined,
    isError: MyFavoriteNewsErr,
    isLoading: MyFavoriteNewsLoading,
  } = useMyFavoriteNews();

  const [NewsName, setNewsName] = useState("");

  const techTimeOutRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(techTimeOutRef.current);

    techTimeOutRef.current = setTimeout(() => {
      setNewsName(value);
    }, 1500);
  };

  const searchNews = MyFavoriteNews?.data
    ? Search(MyFavoriteNews.data.myFavoriteNews, NewsName, "news.title")
    : [];

  const [page, setpage] = useState(1);

  const getItemsByPage = (array = [], page, itemsPerPage = 4) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return array.slice(start, end);
  };
  const data = useMemo(() => {
    return getItemsByPage(searchNews, page);
  }, [searchNews, page]);

  return (
    <>
      <div className="w-full max-h-full flex-1 flex flex-col items-start gap-5">
        <h2 className="text-textC text-3xl font-bold">علاقه مندی مقالات</h2>
        <div className="w-full h-130.25 p-5 flex flex-col gap-4 shadow-[0px_50px_100px_0px_#48484829] rounded-3xl bg-background">
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <h5 className="text-base text-textC flex gap-2 items-center">
                <LiaSearchSolid size={22} />
                جستوجو مقاله
              </h5>
              <Input
                onChange={handleChange}
                boxClassname={"w-62"}
                placeholder={"جستوجو مقاله"}
              />
            </div>
          </div>
          <div className="w-full flex-1 overflow-y-auto flex flex-col md:divide-none divide-dashed divide-neutral-400 divide-y-1 gap-7">
            {MyFavoriteNews
              ? searchNews.map((item, index) => {
                  let start = new Date(item?.news.insertDate);
                  start = start.toLocaleString("fa-IR");
                  return (
                    <div
                      key={index}
                      className="w-full flex flex-wrap pb-3 md:flex-nowrap justify-between gap-7 md:gap-3 items-center"
                    >
                      <img
                        className="sm:w-25 w-40 h-30 sm:h-15 rounded-2xl overflow-hidden object-cover"
                        src={item?.news.currentImageAddress || img}
                        alt=""
                      />
                      <h3 className="text-text text-base w-50 text-textC line-clamp-1">
                        {item?.news.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-5">
                        <p className="text-textC w-30 sm:w-auto text-sm">
                          {start}
                        </p>
                      </div>
                      <div className="flex gap-5">
                        <Button
                          children={"مشاهده مقاله"}
                          buttonClassName="h-10 text-sm text-nowrap"
                        />
                        <div className="flex p-2 border border-neutral-300 rounded-full">
                          <RxCross1 color="#FF5454" size={20} />
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}

            {MyFavoriteNewsLoading ? (
              <Loading size={"text-3xl"} circleSize={"8"} />
            ) : (
              ""
            )}
            {searchNews.length == 0 && !MyFavoriteNewsLoading ? (
              <NotFound size={"text-xl"} />
            ) : (
              ""
            )}
          </div>
          <TeacherListPagination
            totalCount={searchNews?.length}
            setPage={setpage}
          />
        </div>
      </div>
    </>
  );
};

export default MyFavoriteNews;
