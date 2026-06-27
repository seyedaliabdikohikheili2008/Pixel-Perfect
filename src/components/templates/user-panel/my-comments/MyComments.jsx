import { Label, Radio, RadioGroup } from "@heroui/react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import Input from "../../../atoms/Input/Input";
import { useMyCourseComments } from "../../../../core/hooks/queries/user-panel/comments/course/useMyCourseComments";
import { useMyNewsComments } from "../../../../core/hooks/queries/user-panel/comments/news/useMyNewsComments";
import Search from "../../../../core/utils/search/Search";
import Button from "../../../atoms/Butoon/Button";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useDeleteCourseComment } from "../../../../core/hooks/queries/user-panel/comments/course/useDeleteCourseComment";
import toast from "react-hot-toast";
import Loading from "../../../atoms/loading/Loading";
import NotFound from "../../../atoms/not-found/NotFound";
import TeacherListPagination from "../../teacher-list/teacher-list-content/TeacherListPagination";

const MyComments = () => {
  const navigate = useNavigate();
  const {
    data: MyCourseComments = undefined,
    isError: MyCourseCommentsErr,
    isLoading: MyCourseCommentsLoading,
    refetch: MyCourseCommentsRefetch,
  } = useMyCourseComments();

  const {
    data: MyNewsComments = undefined,
    isError: MyNewsCommentsErr,
    isLoading: MyNewsCommentsLoading,
    refetch: MyNewsCommentsRefetch,
  } = useMyNewsComments();

  const [commentFlag, setcommentFlag] = useState("course");
  const handleRadio = (value) => {
    if (value == "course") {
      setcommentFlag("course");
    } else {
      setcommentFlag("news");
    }
  };

  const radioValue = useMemo(() => {
    if (commentFlag == "course") {
      return "course";
    } else {
      return "news";
    }
  }, [commentFlag]);

  const [search, setsearch] = useState("");

  const techTimeOutRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(techTimeOutRef.current);

    techTimeOutRef.current = setTimeout(() => {
      setsearch(value);
    }, 1500);
  };

  const searchComment =
    commentFlag == "course"
      ? MyCourseComments?.data
        ? Search(MyCourseComments.data.myCommentsDtos, search, "describe")
        : []
      : MyNewsComments?.data
        ? Search(MyNewsComments.data.myNewsCommetDtos, search, "describe")
        : [];
  const [page, setpage] = useState(1);

  useEffect(() => {
    setpage(1);
  }, [commentFlag]);

  const getItemsByPage = (array = [], page, itemsPerPage = 3) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return array.slice(start, end);
  };

  const data = useMemo(() => {
    return getItemsByPage(searchComment, page);
  }, [searchComment, page]);

  const { mutate: deleteCourseComment, isPending: deleteCourseCommentPending } =
    useDeleteCourseComment();
  const handleDeleteComment = (id) => {
    deleteCourseComment(
      { CourseCommandId: String(id) },
      {
        onSuccess: (res) => {
          toast.success("کامنت مورد نظر با موفقیت حذف شد");
          MyCourseCommentsRefetch();
        },
        onError: (err) => {
          console.log(err?.response?.data);
        },
      },
    );
  };
  return (
    <>
      <div className="w-full max-h-full flex-1 flex flex-col items-start gap-5">
        <h2 className="text-textC text-3xl font-bold">دیدگاه های من</h2>
        <div className="w-full min-h-137 p-5 flex flex-col gap-4 shadow-[0px_50px_100px_0px_#48484829] rounded-3xl bg-background">
          <div className="flex flex-col sm:flex-row justify-between gap-5 ">
            <div className="flex flex-col gap-2">
              <h5 className="text-base text-textC flex gap-2 items-center">
                <LiaSearchSolid size={22} />
                جستوجو دیدگاه ها
              </h5>
              <Input
                onChange={handleChange}
                boxClassname={"w-62"}
                placeholder={"جستوجو کنید"}
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
                  🎓 دوره‌ها
                </button>

                <button
                  onClick={() => handleRadio("news")}
                  className={`flex-1 md:flex-none px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    radioValue === "news"
                      ? "bg-white text-primary-500 shadow"
                      : "text-neutral-500 hover:text-textC"
                  }`}
                >
                  📰 مقالات
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            {commentFlag === "course" && (
              <div className="hidden md:grid grid-cols-12 px-4 py-3 text-xs font-semibold text-neutral-500 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="col-span-3">عنوان</div>
                <div className="col-span-2">وضعیت</div>
                <div className="col-span-3">توضیحات</div>
                <div className="col-span-2">تاریخ</div>
                <div className="col-span-2 text-left pl-10">عملیات</div>
              </div>
            )}
            {commentFlag !== "course" && (
              <div className="hidden md:grid grid-cols-12 px-4 py-3 text-xs font-semibold text-neutral-500 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="col-span-3">عنوان</div>
                <div className="col-span-5">توضیحات</div>
                <div className="col-span-3">تاریخ</div>
                <div className="col-span-1 text-left">عملیات</div>
              </div>
            )}
            <div className="flex flex-col gap-3">
              {commentFlag === "course" &&
                data?.map((item, index) => {
                  const insert = new Date(item?.insertDate).toLocaleString(
                    "fa-IR",
                  );
                  return (
                    <div
                      key={index}
                      className="border border-neutral-200 rounded-2xl p-4 bg-background hover:shadow-md transition"
                    >
                      <div className="hidden md:grid grid-cols-12 items-center gap-4">
                        <div className="col-span-3">
                          <p className="text-sm font-medium text-textC line-clamp-1">
                            {item?.courseTitle}
                          </p>
                        </div>
                        <div className="col-span-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs border ${
                              item?.accept
                                ? "bg-saccess-50 border-saccess-700 text-saccess-700"
                                : "bg-danger-50 border-danger-500 text-danger-500"
                            }`}
                          >
                            {item?.accept ? "تایید شد" : "تایید نشده"}
                          </span>
                        </div>
                        <div className="col-span-3 relative group">
                          <p className="text-sm text-textC line-clamp-1 cursor-help">
                            {item?.describe}
                          </p>
                          <div className="absolute z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition bg-white border border-neutral-200 shadow-lg rounded-lg p-2 text-xs w-64 right-1/2 translate-x-1/2 bottom-8">
                            {item?.describe}
                          </div>
                        </div>
                        <div className="col-span-2 text-xs text-neutral-600">
                          {insert}
                        </div>
                        <div className="col-span-2 flex justify-end gap-3">
                          <Button
                            onClick={() =>
                              navigate(`/course-detail/${item.courseId}`)
                            }
                            children={"دوره"}
                            buttonClassName="h-9 text-sm"
                          />
                          <div
                            onClick={() => handleDeleteComment(item.commentId)}
                            className="p-2 border border-neutral-300 rounded-full hover:bg-red-50 cursor-pointer transition"
                          >
                            <RxCross1 color="#FF5454" size={18} />
                          </div>
                        </div>
                      </div>
                      <div className="md:hidden flex flex-col gap-3">
                        <p className="text-sm font-medium text-textC">
                          {item?.courseTitle}
                        </p>
                        <span
                          className={`inline-flex w-full justify-center px-3 py-1 rounded-full text-xs border ${item?.accept ? "bg-saccess-50 border-saccess-700 text-saccess-700" : "bg-danger-50 border-danger-500 text-danger-500"}`}
                        >
                          {item?.accept ? "تایید شد" : "تایید نشده"}
                        </span>
                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl text-textC p-3 text-xs">
                          {item?.describe}
                        </div>
                        <div className="text-xs text-neutral-500">{insert}</div>
                        <div className="flex gap-3">
                          <Button
                            onClick={() =>
                              navigate(`/course-detail/${item.courseId}`)
                            }
                            children={"مشاهده دوره"}
                            buttonClassName="h-9 text-sm flex-1"
                          />
                          <div
                            onClick={() => handleDeleteComment(item.commentId)}
                            className="p-3 border border-neutral-300 rounded-xl hover:bg-red-50 cursor-pointer transition"
                          >
                            <RxCross1 color="#FF5454" size={18} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {commentFlag !== "course" &&
                data?.map((item, index) => {
                  const insert = new Date(item?.inserDate).toLocaleString(
                    "fa-IR",
                  );
                  return (
                    <div
                      key={index}
                      className="border border-neutral-200 rounded-2xl p-4 bg-background hover:shadow-md transition"
                    >
                      <div className="hidden md:grid grid-cols-12 items-center gap-4">
                        <div className="col-span-3">
                          <p className="text-sm font-medium text-textC line-clamp-1">
                            {item?.title}
                          </p>
                        </div>
                        <div className="col-span-5 relative group">
                          <p className="text-sm text-textC line-clamp-1 cursor-help">
                            {item?.describe}
                          </p>
                          <div className="absolute z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition bg-white border border-neutral-200 shadow-lg rounded-lg p-2 text-xs w-64 right-1/2 translate-x-1/2 bottom-8">
                            {item?.describe}
                          </div>
                        </div>
                        <div className="col-span-3 text-xs text-neutral-600">
                          {insert}
                        </div>
                        <div className="col-span-1 flex justify-end">
                          <Button
                            onClick={() =>
                              navigate(`/news-detail/${item.newsId}`)
                            }
                            children={"مقاله"}
                            buttonClassName="h-9 text-sm whitespace-nowrap"
                          />
                        </div>
                      </div>
                      <div className="md:hidden flex flex-col gap-3">
                        <p className="text-sm font-medium text-textC">
                          {item?.title}
                        </p>
                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-xs text-textC">
                          {item?.describe}
                        </div>
                        <span className="text-xs text-neutral-500">
                          <span className="text-neutral-400">تاریخ:</span>{" "}
                          {insert}
                        </span>
                        <Button
                          onClick={() =>
                            navigate(`/news-detail/${item.newsId}`)
                          }
                          children={"مشاهده مقاله"}
                          buttonClassName="h-9 text-sm w-full"
                        />
                      </div>
                    </div>
                  );
                })}
              {commentFlag == "course" ? (
                MyCourseCommentsLoading ? (
                  <Loading size={"text-3xl"} circleSize={"8"} />
                ) : (
                  ""
                )
              ) : MyNewsCommentsLoading ? (
                <Loading size={"text-3xl"} circleSize={"8"} />
              ) : (
                ""
              )}
            </div>
            {commentFlag == "course" ? (
              searchComment.length == 0 && !MyCourseCommentsLoading ? (
                <NotFound size={"text-xl"} />
              ) : (
                ""
              )
            ) : searchComment.length == 0 && !MyNewsCommentsLoading ? (
              <NotFound size={"text-xl"} />
            ) : (
              ""
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            <TeacherListPagination
              totalCount={searchComment?.length}
              setPage={setpage}
              render={commentFlag}
              rows={3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComments;
