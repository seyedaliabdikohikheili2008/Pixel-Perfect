import { useMutation } from "@tanstack/react-query";
import AddProfileImage from "../../../../services/user-panel/pofile/AddProfileImage";

export const useAddProfileImage = () => {
  return useMutation({
    mutationFn: (data) => AddProfileImage(data),
  });
};