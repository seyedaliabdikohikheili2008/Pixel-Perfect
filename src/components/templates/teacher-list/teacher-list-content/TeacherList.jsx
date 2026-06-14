import React, { useEffect, useState } from "react";
import BestTeacherCard from "../../../organisms/landing/best-teacher/BestTeacherCard";
import { useAllTeacher } from "../../../../core/hooks/queries/teacher/useAllTeacher";
import TeacherListPagination from "./TeacherListPagination";
import Loading from "../../../atoms/loading/Loading";
import NotFound from "../../../atoms/not-found/NotFound";

const TeacherList = () => {
  const {
    data: TeacherList = undefined,
    isError: TeacherListErr,
    isLoading: TeacherListLoading,
  } = useAllTeacher();

  const [page, setpage] = useState(1);
  const [data, setdata] = useState([]);

  const getItemsByPage = (array = [], page, itemsPerPage = 9) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return array.slice(start, end);
  };

  useEffect(() => {
    setdata(getItemsByPage(TeacherList?.data, page));
  }, [page, TeacherList]);

  return (
    <>
      <div className="w-full flex flex-wrap gap-5 justify-center md:justify-evenly lg:justify-between mb-12">
        {TeacherListLoading ? <Loading /> : ""}
        {data?.length == 0 && !TeacherListLoading ? <NotFound /> : ""}
        {data?.map((item, index) => {
          return <BestTeacherCard detail={item} key={index} />;
        })}
      </div>
      <TeacherListPagination
        totalCount={TeacherList?.data.length}
        setPage={setpage}
      />
    </>
  );
};

export default TeacherList;
