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

const MyFavoriteCourses = () => {
  const {
    data: MyFavoriteCourse = undefined,
    isError: MyFavoriteCourseErr,
    isLoading: MyFavoriteCourseLoading,
  } = useMyFavoriteCourse();
  console.log(MyFavoriteCourse);

  const [courseName, setcourseName] = useState("");

  const techTimeOutRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(techTimeOutRef.current);

    techTimeOutRef.current = setTimeout(() => {
      setcourseName(value);
    }, 1500);
  };

  const searchCourse = MyFavoriteCourse?.data
    ? Search(
        MyFavoriteCourse.data.favoriteCourseDto,
        courseName,
        "course.title",
      )
    : [];

  const [page, setpage] = useState(1);

  const getItemsByPage = (array = [], page, itemsPerPage = 4) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return array.slice(start, end);
  };
  const data = useMemo(() => {
    return getItemsByPage(searchCourse, page);
  }, [searchCourse, page]);

  return (
    <>
      <div className="w-full max-h-full flex-1 flex flex-col items-start gap-5">
        <h2 className="text-textC text-3xl font-bold">علاقه مندی دوره</h2>
        <div className="w-full h-130.25 p-5 flex flex-col gap-4 shadow-[0px_50px_100px_0px_#48484829] rounded-3xl bg-background">
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <h5 className="text-base text-textC flex gap-2 items-center">
                <LiaSearchSolid size={22} />
                جستوجو دوره
              </h5>
              <Input
                onChange={handleChange}
                boxClassname={"w-62"}
                placeholder={"جستوجو دوره"}
              />
            </div>
          </div>
          <div className="w-full flex-1 overflow-y-auto flex flex-col md:divide-none divide-dashed divide-neutral-400 divide-y-1 gap-7">
            {MyFavoriteCourse
              ? searchCourse.map((item, index) => {
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
                      <h3 className="text-text text-base w-40 line-clamp-1">
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
                          children={"شروع یاد گیری"}
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

            {MyFavoriteCourseLoading ? (
              <Loading size={"text-3xl"} circleSize={"8"} />
            ) : (
              ""
            )}
            {searchCourse.length == 0 && !MyFavoriteCourseLoading ? (
              <NotFound size={"text-xl"} />
            ) : (
              ""
            )}
          </div>
          <TeacherListPagination
            totalCount={searchCourse?.length}
            setPage={setpage}
          />
        </div>
      </div>
    </>
  );
};

export default MyFavoriteCourses;
