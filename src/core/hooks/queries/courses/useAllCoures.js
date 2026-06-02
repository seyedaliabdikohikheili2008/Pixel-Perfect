import { useQuery } from "@tanstack/react-query";
import { getAllCourse } from "../../../services/landing/getAllCourse";

export const useAllCourses = (params) => {
  return useQuery({
    queryKey: ["AllCourses",params],
    queryFn: () => getAllCourse(params),
  });
};