import { useMutation } from "@tanstack/react-query";
import SelectProfileImage from "../../../../services/user-panel/pofile/SelectProfileImage";

export const useSelectProfileImage = () => {
  return useMutation({
    mutationFn: (data) => SelectProfileImage(data),
  });
};