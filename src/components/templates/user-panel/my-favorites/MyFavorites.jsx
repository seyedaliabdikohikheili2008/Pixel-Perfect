import React, { useEffect, useMemo, useRef, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import Input from "../../../atoms/Input/Input";
import TeacherListPagination from "../../teacher-list/teacher-list-content/TeacherListPagination";
import { useMyFavoriteCourse } from "../../../../core/hooks/queries/user-panel/dashboard/useMyFavoriteCourse";
import { useMyFavoriteNews } from "../../../../core/hooks/queries/user-panel/dashboard/useMyFavoriteNews";
import Search from "../../../../core/utils/search/Search";
import Button from "../../../atoms/Butoon/Button";
import { RxCross1 } from "react-icons/rx";
import Loading from "../../../atoms/loading/Loading";
import NotFound from "../../../atoms/not-found/NotFound";
import { useRemoveCourseFavorite } from "../../../../core/hooks/queries/user-panel/favorites/course/useRemoveCourseFavorite";
import toast from "react-hot-toast";
import { useRemoveNewsFavorite } from "../../../../core/hooks/queries/user-panel/favorites/news/useRemoveNewsFavorite";
import { useNavigate } from "react-router-dom";
import FallbackImage from "../../../atoms/image/FallbackImage";
import { useTranslation } from "react-i18next";

const MyFavorites = () => {
  const { t } = useTranslation("userPanel");
  const navigate = useNavigate();
  const [favoriteFlag, setfavoriteFlag] = useState("course");

  const handleRadio = (value) => {
    if (value == "course") {
      setfavoriteFlag("course");
    } else {
      setfavoriteFlag("news");
    }
  };

  const radioValue = useMemo(() => {
    if (favoriteFlag == "course") {
      return "course";
    } else {
      return "news";
    }
  }, [favoriteFlag]);

  const {
    data: MyFavoriteCourse = undefined,
    isError: MyFavoriteCourseErr,
    isLoading: MyFavoriteCourseLoading,
    refetch: MyFavoriteCourseRefetch,
  } = useMyFavoriteCourse();

  const {
    data: MyFavoriteNews = undefined,
    isError: MyFavoriteNewsErr,
    isLoading: MyFavoriteNewsLoading,
    refetch: MyFavoriteNewsRefetch,
  } = useMyFavoriteNews();

  const [search, setsearch] = useState("");

  const techTimeOutRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(techTimeOutRef.current);

    techTimeOutRef.current = setTimeout(() => {
      setsearch(value);
    }, 1500);
  };

  const searchFavorites =
    favoriteFlag == "course"
      ? MyFavoriteCourse?.data
        ? Search(
            MyFavoriteCourse.data.favoriteCourseDto,
            search,
            "course.title",
          )
        : []
      : MyFavoriteNews?.data
        ? Search(MyFavoriteNews.data.myFavoriteNews, search, "news.title")
        : [];

  const [page, setpage] = useState(1);

  useEffect(() => {
    setpage(1);
  }, [favoriteFlag]);

  const getItemsByPage = (array = [], page, itemsPerPage = 3) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return array.slice(start, end);
  };

  const data = useMemo(() => {
    return getItemsByPage(searchFavorites, page);
  }, [searchFavorites, page]);

  const { mutate: removeCourse, isPending: removeCoursePending } =
    useRemoveCourseFavorite();
  const { mutate: removeNews, isPending: removeNewsPending } =
    useRemoveNewsFavorite();

  const handleRemoveFavorite = (id) => {
    if (favoriteFlag == "course") {
      const formData = new FormData();
      formData.append("CourseFavoriteId", id);
      removeCourse(formData, {
        onSuccess: (res) => {
          toast.success(t("myFavorite.remove"));
          MyFavoriteCourseRefetch();
        },
        onError: (err) => {
          console.log(err?.response?.data);
        },
      });
    } else {
      removeNews(
        {
          deleteEntityId: String(id),
        },
        {
          onSuccess: (res) => {
            toast.success(t("myFavorite.remove"));
            MyFavoriteNewsRefetch();
          },
          onError: (err) => {
            console.log(err?.response?.data);
          },
        },
      );
    }
  };

  return (
    <>
      <div className="w-full max-h-full flex-1 flex flex-col items-start gap-5">
        <h2 className="text-textC text-3xl font-bold">
          {t("layout.myFavorites")}
        </h2>
        <div className="w-full min-h-137 p-5 flex flex-col gap-4 shadow-[0px_50px_100px_0px_#48484829] rounded-3xl bg-background">
          <div className="flex flex-col sm:flex-row justify-between gap-5 ">
            <div className="flex flex-col gap-2">
              <h5 className="text-base text-textC flex gap-2 items-center">
                <LiaSearchSolid size={22} />
                {t("myFavorite.searchFavorites")}
              </h5>
              <Input
                onChange={handleChange}
                boxClassname={"w-62"}
                placeholder={t("myFavorite.search")}
              />
            </div>
            <div>
              <div className="flex flex-row w-full md:w-fit rounded-xl bg-neutral-100 p-1">
                <button
                  onClick={() => handleRadio("course")}
                  className={`flex-1 md:flex-none px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    radioValue === "course"
                      ? "bg-white text-primary-500 shadow"
                      : "text-neutral-500 hover:text-textC"
                  }`}
                >
                  🎓 {t("myFavorite.courses")}
                </button>

                <button
                  onClick={() => handleRadio("news")}
                  className={`flex-1 md:flex-none px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    radioValue === "news"
                      ? "bg-white text-primary-500 shadow"
                      : "text-neutral-500 hover:text-textC"
                  }`}
                >
                  📰 {t("myFavorite.articles")}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="hidden md:grid grid-cols-12 w-full px-4 py-3 text-xs font-semibold text-neutral-500 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="col-span-2 flex justify-start px-4">
                {t("myCourses.image")}
              </div>
              <div className="col-span-3">{t("myFavorite.title")}</div>
              <div className="col-span-3">{t("myReserve.dates")}</div>
              <div className="col-span-4 flex justify-end px-4">
                {t("myCourses.actions")}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {favoriteFlag === "course" &&
                data?.map((item, index) => {
                  const start = new Date(
                    item?.course?.startTime,
                  ).toLocaleString("fa-IR");
                  const end = new Date(item?.course?.endTime).toLocaleString(
                    "fa-IR",
                  );
                  return (
                    <div
                      key={index}
                      className="w-full border border-neutral-200 rounded-2xl p-4 bg-background hover:shadow-md transition"
                    >
                      <div className="hidden md:grid grid-cols-12 items-center gap-4">
                        <div className="col-span-2">
                          <FallbackImage
                            src={item?.course?.imageAddress}
                            alt="favorite-image"
                            className="w-20 h-14 rounded-xl object-cover"
                          />
                        </div>
                        <div className="col-span-3">
                          <p className="text-sm font-medium text-textC line-clamp-1">
                            {item?.course?.title}
                          </p>
                        </div>
                        <div className="col-span-3 text-xs text-neutral-600 flex flex-col gap-1">
                          <span>
                            <span className="text-neutral-400">
                              {t("myReserve.start")}:
                            </span>{" "}
                            {start}
                          </span>
                          <span>
                            <span className="text-neutral-400">
                              {t("myReserve.end")}:
                            </span>{" "}
                            {end}
                          </span>
                        </div>
                        <div className="col-span-4 flex justify-end items-center gap-3">
                          <Button
                            onClick={() =>
                              navigate(`/course-detail/${item.courseId}`)
                            }
                            children={t("myCourses.viewCourse")}
                            buttonClassName="h-10 text-sm"
                          />
                          <div
                            onClick={() => handleRemoveFavorite(item.id)}
                            className="p-2 border border-neutral-300 rounded-full hover:bg-red-50 cursor-pointer transition"
                          >
                            <RxCross1 color="#FF5454" size={18} />
                          </div>
                        </div>
                      </div>
                      <div className="md:hidden flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <FallbackImage
                            src={item?.course?.imageAddress}
                            alt="favorite-image"
                            className="w-20 h-16 rounded-xl object-cover"
                          />
                          <p className="text-sm font-medium text-textC line-clamp-1">
                            {item?.course?.title}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                          <div className="flex flex-col">
                            <span className="text-neutral-400">
                              {t("myReserve.start")}
                            </span>
                            <span className="text-textC">{start}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-neutral-400">
                              {t("myReserve.end")}
                            </span>
                            <span className="text-textC">{end}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            onClick={() =>
                              navigate(`/course-detail/${item.courseId}`)
                            }
                            children={t("myCourses.viewCourse")}
                            buttonClassName="h-10 text-sm flex-1"
                          />
                          <div
                            onClick={() => handleRemoveFavorite(item.id)}
                            className="p-3 border border-neutral-300 rounded-xl hover:bg-red-50 cursor-pointer transition"
                          >
                            <RxCross1 color="#FF5454" size={18} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {favoriteFlag !== "course" &&
                data?.map((item, index) => {
                  const start = new Date(item?.news?.insertDate).toLocaleString(
                    "fa-IR",
                  );
                  return (
                    <div
                      key={index}
                      className="w-full border border-neutral-200 rounded-2xl p-4 bg-background hover:shadow-md transition"
                    >
                      <div className="hidden md:grid grid-cols-12 items-center gap-4">
                        <div className="col-span-2">
                          <FallbackImage
                            src={item?.news?.currentImageAddress}
                            alt="favorite-image"
                            className="w-20 h-14 rounded-xl object-cover"
                          />
                        </div>
                        <div className="col-span-3">
                          <p className="text-sm font-medium text-textC line-clamp-1">
                            {item?.news?.title}
                          </p>
                        </div>
                        <div className="col-span-3 text-xs text-neutral-600">
                          {start}
                        </div>
                        <div className="col-span-4 flex justify-end items-center gap-3">
                          <Button
                            onClick={() =>
                              navigate(`/news-detail/${item.newsId}`)
                            }
                            children={t("myFavorite.viewArticle")}
                            buttonClassName="h-10 text-sm"
                          />
                          <div
                            onClick={() => handleRemoveFavorite(item.id)}
                            className="p-2 border border-neutral-300 rounded-full hover:bg-red-50 cursor-pointer transition"
                          >
                            <RxCross1 color="#FF5454" size={18} />
                          </div>
                        </div>
                      </div>
                      <div className="md:hidden flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <FallbackImage
                            src={item?.news?.currentImageAddress}
                            alt="favorite-image"
                            className="w-20 h-16 rounded-xl object-cover"
                          />
                          <p className="text-sm font-medium text-textC line-clamp-1">
                            {item?.news?.title}
                          </p>
                        </div>
                        <div className="text-xs bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                          {start}
                        </div>
                        <div className="flex gap-3">
                          <Button
                            onClick={() =>
                              navigate(`/news-detail/${item.newsId}`)
                            }
                            children={t("myFavorite.viewArticle")}
                            buttonClassName="h-10 text-sm flex-1"
                          />
                          <div
                            onClick={() => handleRemoveFavorite(item.id)}
                            className="p-3 border border-neutral-300 rounded-xl hover:bg-red-50 cursor-pointer transition"
                          >
                            <RxCross1 color="#FF5454" size={18} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {(favoriteFlag === "course"
              ? MyFavoriteCourseLoading
              : MyFavoriteNewsLoading) && (
              <div className="py-6 flex justify-center">
                <Loading size={"text-3xl"} circleSize={"8"} />
              </div>
            )}
            {!MyFavoriteCourseLoading &&
              !MyFavoriteNewsLoading &&
              searchFavorites.length === 0 && (
                <div className="py-6 flex justify-center">
                  <NotFound size={"text-xl"} />
                </div>
              )}
          </div>
          <div className="w-full flex items-center justify-center">
            <TeacherListPagination
              totalCount={searchFavorites?.length}
              setPage={setpage}
              rows={3}
              render={favoriteFlag}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFavorites;
