import { useQuery } from "@tanstack/react-query";
import { getAllTeacher } from "../../../services/teacher/getAllTeacher";

export const useAllTeacher = () => {
  return useQuery({
    queryKey: ["AllTeacher"],
    queryFn: () => getAllTeacher(),
  });
};