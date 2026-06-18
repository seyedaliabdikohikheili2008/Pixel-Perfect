import { useQuery } from "@tanstack/react-query";
import { getMyCourse } from "../../../../services/user-panel/dashboard/getMyCourse";

export const useMyCourse = (params) => {
  return useQuery({
    queryKey: ["MyCourse",params],
    queryFn: () => getMyCourse(params),
    retry:false,
  });
};