import { useQuery } from "@tanstack/react-query";
import { getAllCourseLevel } from "../../../services/course/getAllCourseLevel";

export const useAllCoursesLevel = () => {
  return useQuery({
    queryKey: ["AllCoursesLevel"],
    queryFn: () => getAllCourseLevel(),
  });
};