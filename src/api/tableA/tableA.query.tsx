import { useQuery } from "@tanstack/react-query";
import { getTableAData } from "./tableA.api";

export const useGetTableAData = () =>
  useQuery({
    queryKey: ["table", "A", "data"],
    queryFn: getTableAData,
  });
