import { useQuery } from "@tanstack/react-query";
import { getAllNewsCategory } from "../../../services/news/getAllNewsCategory";

export const useAllNewsCategory = () => {
  return useQuery({
    queryKey: ["AllNewsCategory"],
    queryFn: () => getAllNewsCategory(),
    retry:false,
  });
};