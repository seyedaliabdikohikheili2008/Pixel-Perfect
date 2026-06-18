import { useQuery } from "@tanstack/react-query";
import { getAllCourse } from "../../../services/course/getAllCourse";

export const useAllCourses = (params) => {
  return useQuery({
    queryKey: ["AllCourses",params],
    queryFn: () => getAllCourse(params),
    retry:false,
  });
};