import { useMutation } from "@tanstack/react-query";
import { getTableAData, patchTableAData } from "./tableA.api";
import { TableAData } from "../../types/global.type";

export const useGetTableAData = () =>
  useMutation({
    mutationFn: (data: {
      selectedDistrictCode: string;
      // selectedSpecialisation: Array<string>;
      offset?: string;
    }) =>
      getTableAData(
        data.selectedDistrictCode,
        // data.selectedSpecialisation,
        data.offset
      ),
  });

export const usePatchTableAData = () =>
  useMutation({
    mutationFn: (data: Partial<TableAData>) => patchTableAData(data),
  });
