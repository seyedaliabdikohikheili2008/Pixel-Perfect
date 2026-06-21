import React, { useMemo, useRef, useState } from "react";
import Input from "../../../atoms/Input/Input";
import { LiaSearchSolid } from "react-icons/lia";
import Button from "../../../atoms/Butoon/Button";
import img from "../../../../assets/images/user-panel/38bdd9e8afe89a72aeaf82a4cb63301c8ca9bb7b.jpg";
import { RxCross1 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { useMyCourseReserve } from "../../../../core/hooks/queries/user-panel/dashboard/useMyCourseReserve";
import Search from "../../../../core/utils/search/Search";
import NotFound from "../../../atoms/not-found/NotFound";
import Loading from "../../../atoms/loading/Loading";
import TeacherListPagination from "../../teacher-list/teacher-list-content/TeacherListPagination";
import { useDeleteCourseReserve } from "../../../../core/hooks/queries/user-panel/course-reserve/useDeleteCourseReserve";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyCourseReserve = () => {
  const {
    data: MyCourseReserve = undefined,
    isError: MyCourseReserveErr,
    isLoading: MyCourseReserveLoading,
    refetch: MyCourseReserveRefetch,
  } = useMyCourseReserve();

  const [courseName, setcourseName] = useState("");

  const techTimeOutRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(techTimeOutRef.current);

    techTimeOutRef.current = setTimeout(() => {
      setcourseName(value);
    }, 1500);
  };

  const searchCourse = MyCourseReserve?.data
    ? Search(MyCourseReserve.data, courseName, "courseName")
    : [];

  const [page, setpage] = useState(1);
  console.log(page);

  const getItemsByPage = (array = [], page, itemsPerPage = 3) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return array.slice(start, end);
  };
  const data = useMemo(() => {
    return getItemsByPage(searchCourse, page);
  }, [searchCourse, page]);

  const { mutate: removeReserve, isPending: removeReservePending } =
    useDeleteCourseReserve();

  const handleRemoveReserve = (id) => {
    removeReserve(
      { id: String(id) },
      {
        onSuccess: (res) => {
          toast.success("رزرو مورد نظر با موفقیت حذف شد");
          MyCourseReserveRefetch();
        },
        onError: (err) => {
          console.log(err?.response?.data);
        },
      },
    );
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full max-h-full flex-1 flex flex-col items-start gap-5">
        <h2 className="text-textC text-3xl font-bold">رزرو من</h2>
        <div className="w-full min-h-137 p-5 flex flex-col gap-4 shadow-[0px_50px_100px_0px_#48484829] rounded-3xl bg-background">
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
          <div className="w-full flex-1 flex flex-col md:divide-none divide-dashed divide-neutral-400 divide-y-1 gap-7">
            {MyCourseReserve
              ? data.map((item, index) => {
                  let start = new Date(item?.startDate);
                  start = start.toLocaleString("fa-IR");
                  let end = new Date(item?.endDate);
                  end = end.toLocaleString("fa-IR");
                  return (
                    <div
                      key={index}
                      className="w-full flex flex-wrap pb-3 md:flex-nowrap justify-between gap-7 md:gap-3 items-center"
                    >
                      <img
                        className="sm:w-25 w-40 h-30 sm:h-15 rounded-2xl overflow-hidden object-cover"
                        src={item?.image || img}
                        alt=""
                      />
                      <h3 className="text-text text-base w-40 line-clamp-1 text-textC">
                        {item?.courseName}
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
                            handleRemoveReserve(item.id);
                          }}
                          className="flex cursor-pointer p-2 border border-neutral-300 rounded-full"
                        >
                          <RxCross1 color="#FF5454" size={20} />
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}

            {MyCourseReserveLoading ? (
              <Loading size={"text-3xl"} circleSize={"8"} />
            ) : (
              ""
            )}
            {searchCourse.length == 0 && !MyCourseReserveLoading ? (
              <NotFound size={"text-xl"} />
            ) : (
              ""
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            <TeacherListPagination
              totalCount={searchCourse?.length}
              setPage={setpage}
              rows={3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourseReserve;
