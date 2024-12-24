import { tableABasePath } from ".";
import { customAxios } from "..";
import { TABLE_A_FIELDS } from "../../types/enums";
import { TableAData } from "../../types/global.type";

export async function getTableAData(
  selectedDistrictCode: string,
  offset?: string
) {
  return (
    await customAxios.post(`${tableABasePath}/listRecords`, {
      offset: offset,
      pageSize: 3,
      fields: [
        TABLE_A_FIELDS.id,
        TABLE_A_FIELDS.name,
        TABLE_A_FIELDS.image,
        TABLE_A_FIELDS.district,
        TABLE_A_FIELDS.type,
        TABLE_A_FIELDS.type,
        TABLE_A_FIELDS.phone,
        TABLE_A_FIELDS.email,
        TABLE_A_FIELDS.otherContactDetails,
        TABLE_A_FIELDS.otherLinks,
        TABLE_A_FIELDS.mode,
        TABLE_A_FIELDS.specialisation,
        TABLE_A_FIELDS.fee,
      ],
      filterByFormula: `${TABLE_A_FIELDS.district} = "${selectedDistrictCode}"`,
    })
  ).data as TableAData;
}
