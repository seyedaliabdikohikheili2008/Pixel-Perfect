import { useQuery } from "@tanstack/react-query";
import { getAllNews } from "../../../services/news/getAllNews";

export const useAllNews = (params) => {
  return useQuery({
    queryKey: ["AllNews",params],
    queryFn: () => getAllNews(params),
    retry:false,
  });
};