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

  const getItemsByPage = (array = [], page, itemsPerPage = 4) => {
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
          <div className="flex justify-between gap-5 ">
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
              <RadioGroup
                value={radioValue}
                name="course-or-news"
                className={"flex w-full gap-3 justify-between flex-wrap"}
              >
                <Radio
                  value="course"
                  id="course"
                  onClick={() => {
                    handleRadio("course");
                  }}
                  className={"flex gap-1 text-base text-textC"}
                >
                  <Radio.Control className="w-5 h-5 bg-primary-50 flex items-center justify-center border border-neutral-400 rounded-md">
                    <Radio.Indicator className="w-2 h-2 flex items-center justify-center">
                      {({ isSelected }) =>
                        isSelected ? (
                          <span className="text-sm font-bold text-center leading-none text-primary-400">
                            ✓
                          </span>
                        ) : null
                      }
                    </Radio.Indicator>
                  </Radio.Control>
                  <Radio.Content>
                    <Label>دوره ها</Label>
                  </Radio.Content>
                </Radio>
                <Radio
                  value="news"
                  id="news"
                  onClick={() => {
                    handleRadio("news");
                  }}
                  className={"flex gap-1 text-base text-textC"}
                >
                  <Radio.Control className="w-5 h-5 bg-primary-50 flex items-center justify-center border border-neutral-400 rounded-md">
                    <Radio.Indicator className="w-2 h-2 flex items-center justify-center">
                      {({ isSelected }) =>
                        isSelected ? (
                          <span className="text-sm font-bold text-center leading-none text-primary-400">
                            ✓
                          </span>
                        ) : null
                      }
                    </Radio.Indicator>
                  </Radio.Control>
                  <Radio.Content>
                    <Label>مقالات</Label>
                  </Radio.Content>
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="w-full flex-1 flex flex-col md:divide-none divide-dashed divide-neutral-400 divide-y-1 gap-7">
            {commentFlag == "course"
              ? MyCourseComments
                ? data?.map((item, index) => {
                    let insert = new Date(item?.insertDate);
                    insert = insert.toLocaleString("fa-IR");
                    return (
                      <div
                        key={index}
                        className="w-full flex flex-wrap pb-3 justify-between gap-7 md:gap-3 items-center"
                      >
                        <h3 className="text-text text-base w-40 line-clamp-1 text-textC">
                          {item?.courseTitle}
                        </h3>
                        <h3
                          className={`${item?.accept ? "bg-saccess-50 border-saccess-700 text-saccess-700" : "bg-danger-50 border-danger-500 text-danger-500"} py-2 rounded-2xl border text-text text-base w-40 line-clamp-1`}
                        >
                          {item?.accept ? "تایید شد" : "تایید نشده"}
                        </h3>
                        <div className="w-40 relative group">
                          <div className="w-40 text-textC line-clamp-1">
                            {item?.describe}
                          </div>
                          <div className="absolute w-40 right-1/2 translate-x-1/2 bottom-4 mb-2 px-2 py-1 text-sm text-textC bg-neutral-50 rounded opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-50">
                            {item?.describe}
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-5">
                          <p className="text-textC w-30 sm:w-auto text-sm">
                            {insert}
                          </p>
                        </div>
                        <div className="flex gap-5">
                          <Button
                            onClick={() => {
                              navigate(`/course-detail/${item.courseId}`);
                            }}
                            children={"مشاهده دوره"}
                            buttonClassName="h-10 text-sm text-nowrap"
                          />
                          <div
                            onClick={() => {
                              handleDeleteComment(item.commentId);
                            }}
                            className="flex cursor-pointer p-2 border border-neutral-300 rounded-full"
                          >
                            <RxCross1 color="#FF5454" size={20} />
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""
              : MyNewsComments
                ? data.map((item, index) => {
                    let insert = new Date(item?.inserDate);
                    insert = insert.toLocaleString("fa-IR");
                    return (
                      <div
                        key={index}
                        className="w-full flex flex-wrap pb-3 md:flex-nowrap justify-between gap-7 md:gap-3 items-center"
                      >
                        <h3 className="text-text text-base w-40 line-clamp-1 text-textC">
                          {item?.title}
                        </h3>
                        <div className="w-40 relative group">
                          <div className="w-40 text-textC line-clamp-1">
                            {item?.describe}
                          </div>
                          <div className="absolute w-40 right-1/2 translate-x-1/2 bottom-4 mb-2 px-2 py-1 text-sm text-textC bg-neutral-50 rounded opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-50">
                            {item?.describe}
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-5">
                          <p className="text-textC w-30 sm:w-auto text-sm">
                            {insert}
                          </p>
                        </div>
                        <div className="flex gap-5">
                          <Button
                            onClick={() => {
                              navigate(`/news-detail/${item.newsId}`);
                            }}
                            children={"مشاهده مقاله"}
                            buttonClassName="h-10 text-sm text-nowrap"
                          />
                          {/* <div
                            onClick={() => {
                              handleRemoveFavorite(item.id);
                            }}
                            className="flex cursor-pointer p-2 border border-neutral-300 rounded-full"
                          >
                            <RxCross1 color="#FF5454" size={20} />
                          </div> */}
                        </div>
                      </div>
                    );
                  })
                : ""}

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
          <TeacherListPagination
            totalCount={searchComment?.length}
            setPage={setpage}
            render={commentFlag}
            rows={4}
          />
        </div>
      </div>
    </>
  );
};

export default MyComments;
