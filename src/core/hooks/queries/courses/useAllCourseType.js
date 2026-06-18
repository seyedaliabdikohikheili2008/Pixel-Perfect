import { useQuery } from "@tanstack/react-query";
import { getAllCourseType } from "../../../services/course/getAllCourseType";

export const useAllCoursesType = () => {
  return useQuery({
    queryKey: ["AllCoursesType"],
    queryFn: () => getAllCourseType(),
    retry:false,
  });
};