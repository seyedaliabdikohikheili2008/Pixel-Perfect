import { useQuery } from "@tanstack/react-query";
import { getAllTechnologies } from "../../../services/technologies/getAllTechnologies";

export const useAllTechnologies = () => {
  return useQuery({
    queryKey: ["AllTechnologies"],
    queryFn: () => getAllTechnologies(),
  });
};