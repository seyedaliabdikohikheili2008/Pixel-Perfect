import { useQuery } from "@tanstack/react-query";
import { getProfileInfo } from "../../../../services/user-panel/dashboard/getProfileInfo";

export const useProfileInfo = () => {
  return useQuery({
    queryKey: ["ProfileInfo"],
    queryFn: () => getProfileInfo(),
  });
};