import { useQuery } from "@tanstack/react-query";
import { getMyCoursesReserve } from "../../../../services/user-panel/dashboard/getMyCoursesReserve";

export const useMyCourseReserve = () => {
  return useQuery({
    queryKey: ["MyCourseReserve"],
    queryFn: () => getMyCoursesReserve(),
    retry:false,
  });
};