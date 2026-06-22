import { Label, Radio, RadioGroup } from "@heroui/react";
import React from "react";
import { LiaSearchSolid } from "react-icons/lia";
import Input from "../../../atoms/Input/Input";
import { useMyCourseComments } from "../../../../core/hooks/queries/user-panel/comments/course/useMyCourseComments";

const MyComments = () => {
  const {
    data: MyCourseComments = undefined,
    isError: MyCourseCommentsErr,
    isLoading: MyCourseCommentsLoading,
    refetch: MyCourseCommentsRefetch,
  } = useMyCourseComments();

  return (
    <>
      <div className="w-full max-h-full flex-1 flex flex-col items-start gap-5">
        <h2 className="text-textC text-3xl font-bold">دیدگاه های من</h2>
        <div className="w-full h-130.25 p-5 flex flex-col gap-4 shadow-[0px_50px_100px_0px_#48484829] rounded-3xl bg-background">
          <div className="flex justify-between gap-5 ">
            <div className="flex flex-col gap-2">
              <h5 className="text-base text-textC flex gap-2 items-center">
                <LiaSearchSolid size={22} />
                جستوجو دیدگاه ها
              </h5>
              <Input
                // onChange={handleChange}
                boxClassname={"w-62"}
                placeholder={"جستوجو کنید"}
              />
            </div>
            <div>
              <RadioGroup
                // value={radioValue}
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
          <div className="w-full flex-1 overflow-y-auto flex flex-col md:divide-none divide-dashed divide-neutral-400 divide-y-1 gap-7">
            {/* {favoriteFlag == "course"
              ? MyFavoriteCourse
                ? searchFavorites.map((item, index) => {
                    let start = new Date(item?.course.startTime);
                    start = start.toLocaleString("fa-IR");
                    let end = new Date(item?.course.endTime);
                    end = end.toLocaleString("fa-IR");
                    return (
                      <div
                        key={index}
                        className="w-full flex flex-wrap pb-3 md:flex-nowrap justify-between gap-7 md:gap-3 items-center"
                      >
                        <img
                          className="sm:w-25 w-40 h-30 sm:h-15 rounded-2xl overflow-hidden object-cover"
                          src={item?.course.imageAddress || img}
                          alt=""
                        />
                        <h3 className="text-text text-base w-40 line-clamp-1 text-textC">
                          {item?.course.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-5">
                          <p className="text-textC w-30 sm:w-auto text-sm">
                            {start}
                          </p>
                          <p className="text-textC w-30 sm:w-auto text-sm">
                            {end}
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
                              handleRemoveFavorite(item.id);
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
              : MyFavoriteNews
                ? searchFavorites.map((item, index) => {
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
                            onClick={() => {
                              navigate(`/news-detail/${item.newsId}`);
                            }}
                            children={"مشاهده مقاله"}
                            buttonClassName="h-10 text-sm text-nowrap"
                          />
                          <div
                            onClick={() => {
                              handleRemoveFavorite(item.id);
                            }}
                            className="flex cursor-pointer p-2 border border-neutral-300 rounded-full"
                          >
                            <RxCross1 color="#FF5454" size={20} />
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""} */}

            {/* {favoriteFlag == "course" ? (
              MyFavoriteCourseLoading ? (
                <Loading size={"text-3xl"} circleSize={"8"} />
              ) : (
                ""
              )
            ) : MyFavoriteNewsLoading ? (
              <Loading size={"text-3xl"} circleSize={"8"} />
            ) : (
              ""
            )} */}

            {/* {favoriteFlag == "course" ? (
              searchFavorites.length == 0 && !MyFavoriteCourseLoading ? (
                <NotFound size={"text-xl"} />
              ) : (
                ""
              )
            ) : searchFavorites.length == 0 && !MyFavoriteNewsLoading ? (
              <NotFound size={"text-xl"} />
            ) : (
              ""
            )} */}
          </div>
          {/* <TeacherListPagination
            totalCount={searchFavorites?.length}
            setPage={setpage}
          /> */}
        </div>
      </div>
    </>
  );
};

export default MyComments;
