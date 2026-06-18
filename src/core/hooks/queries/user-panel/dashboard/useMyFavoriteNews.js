import { useQuery } from "@tanstack/react-query";
import { getMyFavoriteNews } from "../../../../services/user-panel/dashboard/getMyFavoriteNews";

export const useMyFavoriteNews = () => {
  return useQuery({
    queryKey: ["MyCFavoriteNews"],
    queryFn: () => getMyFavoriteNews(),
    retry:false,
  });
};