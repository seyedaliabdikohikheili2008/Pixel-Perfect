import { useMutation } from "@tanstack/react-query";
import removeCourseFavorite from "../../../../../services/user-panel/favorites/course/removeCourseFavorite";

export const useRemoveCourseFavorite = () => {
  return useMutation({
    mutationFn: (data) => removeCourseFavorite(data),
  });
};