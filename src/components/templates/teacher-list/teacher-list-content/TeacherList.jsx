import React, { useMemo, useState } from "react";
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

  const getItemsByPage = (array = [], page, itemsPerPage = 4) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return array.slice(start, end);
  };

  const data = useMemo(() => {
    return getItemsByPage(TeacherList?.data, page);
  }, [TeacherList, page]);

  return (
    <>
      <div className="w-full flex flex-wrap gap-5 justify-center md:justify-evenly lg:justify-between mb-12">
        {TeacherListLoading ? <Loading /> : ""}
        {data?.length == 0 && !TeacherListLoading ? <NotFound /> : ""}
        {TeacherListErr ? <Error /> : ""}
        {data?.map((item, index) => {
          return <BestTeacherCard detail={item} key={index} />;
        })}
      </div>
      {!TeacherList || TeacherListLoading ? (
        ""
      ) : (
        <TeacherListPagination
          totalCount={TeacherList?.data.length}
          setPage={setpage}
          rows={4}
        />
      )}
    </>
  );
};

export default TeacherList;
