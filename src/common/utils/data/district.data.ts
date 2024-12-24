import { DISTRICT_ENUM } from "../../../types/enums";

export const districtData: Array<{ key: string; label: string }> = [
  {
    key: "ALA",
    label: DISTRICT_ENUM.ALA,
  },
  {
    key: "ERN",
    label: DISTRICT_ENUM.ERN,
  },
  {
    key: "IDU",
    label: DISTRICT_ENUM.IDU,
  },
  {
    key: "KAN",
    label: DISTRICT_ENUM.KAN,
  },
  {
    key: "KAS",
    label: DISTRICT_ENUM.KAS,
  },
  {
    key: "KOL",
    label: DISTRICT_ENUM.KOL,
  },
  {
    key: "KOT",
    label: DISTRICT_ENUM.KOT,
  },
  {
    key: "KOZ",
    label: DISTRICT_ENUM.KOZ,
  },
  {
    key: "MAL",
    label: DISTRICT_ENUM.MAL,
  },
  {
    key: "PAL",
    label: DISTRICT_ENUM.PAL,
  },
  {
    key: "PAT",
    label: DISTRICT_ENUM.PAT,
  },
  {
    key: "THI",
    label: DISTRICT_ENUM.THI,
  },
  {
    key: "THR",
    label: DISTRICT_ENUM.THR,
  },
  {
    key: "WAY",
    label: DISTRICT_ENUM.WAY,
  },
];

export const districtsWithCode: { [key: string]: string } = {
  ALA: DISTRICT_ENUM.ALA,
  ERN: DISTRICT_ENUM.ERN,
  IDU: DISTRICT_ENUM.IDU,
  KAN: DISTRICT_ENUM.KAN,
  KAS: DISTRICT_ENUM.KAS,
  KOL: DISTRICT_ENUM.KOL,
  KOT: DISTRICT_ENUM.KOT,
  KOZ: DISTRICT_ENUM.KOZ,
  MAL: DISTRICT_ENUM.MAL,
  PAL: DISTRICT_ENUM.PAL,
  PAT: DISTRICT_ENUM.PAT,
  THI: DISTRICT_ENUM.THI,
  THR: DISTRICT_ENUM.THR,
  WAY: DISTRICT_ENUM.WAY,
};
