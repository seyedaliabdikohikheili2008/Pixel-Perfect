import { useQuery } from "@tanstack/react-query";
import { getMyNewsComments } from "../../../../../services/user-panel/comments/news/getMyNewsComments";

export const useMyNewsComments = () => {
  return useQuery({
    queryKey: ["MyNewsComments"],
    queryFn: () => getMyNewsComments(),
    retry:false,
  });
};