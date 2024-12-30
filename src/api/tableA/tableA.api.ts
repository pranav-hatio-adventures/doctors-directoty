import { tableABasePath } from ".";
import { customAxios } from "..";
import { TABLE_A_FIELDS } from "../../types/enums";
import { TableAData, TableADataField } from "../../types/global.type";

export async function getTableAData(
  selectedDistrictCode: string,
  selectedSpecialisation: Array<string>,
  offset?: string
) {
  function getFilterByFormula() {
    let filterByFormula = `${TABLE_A_FIELDS.district} = "${selectedDistrictCode}"`;
    if (selectedSpecialisation.length == 0) return filterByFormula;
    let OR_FILTER = "OR( ";
    selectedSpecialisation.forEach((spec, index) => {
      OR_FILTER += `FIND("${spec}",${TABLE_A_FIELDS.specialisation})${
        selectedSpecialisation.length - 1 == index ? "" : ","
      } `;
    });
    OR_FILTER += ")";
    let AND_FILTER = "AND( ";
    return (AND_FILTER += filterByFormula += `, ${OR_FILTER} )`);
  }

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
      filterByFormula: getFilterByFormula(),
    })
  ).data as TableAData;
}

export async function patchTableAData(data: Partial<TableAData>) {
  return (await customAxios.patch(tableABasePath, data)).data as TableAData;
}
