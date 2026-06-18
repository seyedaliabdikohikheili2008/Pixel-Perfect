import { useQuery } from "@tanstack/react-query";
import { getMyFavoriteCourse } from "../../../../services/user-panel/dashboard/getMyFavoriteCourse";

export const useMyFavoriteCourse = () => {
  return useQuery({
    queryKey: ["MyCFavoriteCourse"],
    queryFn: () => getMyFavoriteCourse(),
    retry:false,
  });
};