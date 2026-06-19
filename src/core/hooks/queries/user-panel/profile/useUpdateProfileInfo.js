import { useMutation } from "@tanstack/react-query";
import updateProfileInfoApi from "../../../../services/user-panel/pofile/updateProfileInfoApi";

export const useUpdateProfileInfo = () => {
  return useMutation({
    mutationFn: (data) => updateProfileInfoApi(data),
  });
};