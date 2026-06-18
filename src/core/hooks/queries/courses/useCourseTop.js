import { useQuery } from "@tanstack/react-query";
import { getCourseTop } from "../../../services/course/getCourseTop";

export const useCourseTop = (params) => {
  return useQuery({
    queryKey: ["CourseTop",params],
    queryFn: () => getCourseTop(params),
    retry:false,
  });
};