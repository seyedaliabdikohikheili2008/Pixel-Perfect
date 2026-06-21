import { useMutation } from "@tanstack/react-query";
import deleteCourseReserve from "../../../../services/user-panel/course-reserve/deleteCourseReserve";

export const useDeleteCourseReserve = () => {
  return useMutation({
    mutationFn: (data) => deleteCourseReserve(data),
  });
};