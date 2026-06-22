import { useMutation } from "@tanstack/react-query";
import deleteCourseComment from "../../../../../services/user-panel/comments/course/deleteCourseComment";

export const useDeleteCourseComment = () => {
  return useMutation({
    mutationFn: (data) => deleteCourseComment(data),
  });
};