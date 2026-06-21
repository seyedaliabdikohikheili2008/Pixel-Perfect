import { useMutation } from "@tanstack/react-query";
import removeNewsFavorite from "../../../../../services/user-panel/favorites/news/removeNewsFavorite";

export const useRemoveNewsFavorite = () => {
  return useMutation({
    mutationFn: (data) => removeNewsFavorite(data),
  });
};