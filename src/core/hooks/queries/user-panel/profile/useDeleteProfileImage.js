import { useMutation } from "@tanstack/react-query";
import DeleteProfileImage from "../../../../services/user-panel/pofile/DeleteProfileImage";

export const useDeleteProfileImage = () => {
  return useMutation({
    mutationFn: (data) => DeleteProfileImage(data),
  });
};