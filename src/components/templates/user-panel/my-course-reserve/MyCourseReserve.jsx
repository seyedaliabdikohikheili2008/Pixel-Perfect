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
import FallbackImage from "../../../atoms/image/FallbackImage";
import { useTranslation } from "react-i18next";

const MyCourseReserve = () => {
  const { t } = useTranslation("userPanel");

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
          toast.success(t("myReserve.delete"));
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
        <h2 className="text-textC text-3xl font-bold">
          {t("myReserve.myReservations")}
        </h2>
        <div className="w-full min-h-137 p-5 flex flex-col gap-4 shadow-[0px_50px_100px_0px_#48484829] rounded-3xl bg-background">
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <h5 className="text-base text-textC flex gap-2 items-center">
                <LiaSearchSolid size={22} />
                {t("myReserve.searchCourses")}
              </h5>
              <Input
                onChange={handleChange}
                boxClassname={"w-62"}
                placeholder={t("myReserve.searchCourses")}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="hidden md:grid grid-cols-12 w-full px-4 py-3 text-xs font-semibold text-neutral-500 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="col-span-2 flex justify-start px-4">{t("myCourses.image")}</div>
              <div className="col-span-3">{t("myCourses.courseName")}</div>
              <div className="col-span-3">{t("myReserve.dates")}</div>
              <div className="col-span-4 flex justify-end px-10">
                {t("myCourses.actions")}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {MyCourseReserve &&
                data.map((item, index) => {
                  const start = new Date(item?.startDate).toLocaleString(
                    "fa-IR",
                  );
                  const end = new Date(item?.endDate).toLocaleString("fa-IR");

                  return (
                    <div
                      key={index}
                      className=" w-full border border-neutral-200 rounded-2xl  p-4  bg-background  hover:shadow-md  transition "
                    >
                      <div className="hidden md:grid grid-cols-12 items-center gap-4">
                        <div className="col-span-2">
                          <FallbackImage
                            src={item?.image}
                            alt="course-image"
                            className="w-20 h-14 rounded-xl object-cover"
                          />
                        </div>
                        <div className="col-span-3">
                          <p className="text-sm font-medium text-textC line-clamp-1">
                            {item?.courseName}
                          </p>
                        </div>
                        <div className="col-span-3 text-xs text-neutral-600 flex flex-col gap-1">
                          <span>
                            <span className="text-neutral-400">{t("myReserve.start")}:</span>{" "}
                            {start}
                          </span>
                          <span>
                            <span className="text-neutral-400">{t("myReserve.end")}:</span>{" "}
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
                            onClick={() => handleRemoveReserve(item.id)}
                            className="p-2 border border-neutral-300 rounded-full hover:bg-red-50 cursor-pointer transition"
                          >
                            <RxCross1 color="#FF5454" size={18} />
                          </div>
                        </div>
                      </div>
                      <div className="md:hidden flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <FallbackImage
                            src={item?.image}
                            alt="course-image"
                            className="w-20 h-16 rounded-xl object-cover"
                          />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-textC line-clamp-1">
                              {item?.courseName}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                          <div className="flex flex-col">
                            <span className="text-neutral-400">{t("myReserve.start")}</span>
                            <span className="text-textC">{start}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-neutral-400">{t("myReserve.end")}</span>
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
                            onClick={() => handleRemoveReserve(item.id)}
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
            {MyCourseReserveLoading && (
              <div className="py-6 flex justify-center">
                <Loading size={"text-3xl"} circleSize={"8"} />
              </div>
            )}
            {!MyCourseReserveLoading && searchCourse.length === 0 && (
              <div className="py-6 flex justify-center">
                <NotFound size={"text-xl"} />
              </div>
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
