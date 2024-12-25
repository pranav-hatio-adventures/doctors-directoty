import { useMutation } from "@tanstack/react-query";
import { getTableAData } from "./tableA.api";

export const useGetTableAData = () =>
  useMutation({
    mutationFn: (data: {
      selectedDistrictCode: string;
      selectedSpecialisation: Array<string>;
      offset?: string;
    }) =>
      getTableAData(
        data.selectedDistrictCode,
        data.selectedSpecialisation,
        data.offset
      ),
  });
