import { useQuery } from "@tanstack/react-query";
import { getMyCourseComments } from "../../../../../services/user-panel/comments/course/getMyCourseComments";

export const useMyCourseComments = () => {
  return useQuery({
    queryKey: ["MyCourseComments"],
    queryFn: () => getMyCourseComments(),
    retry:false,
  });
};