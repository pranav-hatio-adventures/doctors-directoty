import { tableABasePath } from ".";
import { customAxios } from "..";

export async function getTableAData() {
  return (await customAxios.get(`${tableABasePath}`)).data;
}
