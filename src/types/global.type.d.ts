import { DISTRICT_ENUM, MODE_ENUM, TABLE_A_FIELDS } from "./enums";

type FieldImageThumbnailVariant = {
  url: string;
  width: number;
  height: number;
};

type FieldImage = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  thumbnails: {
    small: FieldImageThumbnailVariant;
    large: FieldImageThumbnailVariant;
    full: FieldImageThumbnailVariant;
  };
};

export type TableADataField = {
  [TABLE_A_FIELDS.id]: string;
  [TABLE_A_FIELDS.name]: string;
  [TABLE_A_FIELDS.image]: Array<FieldImage>;
  [TABLE_A_FIELDS.district]: string;
  [TABLE_A_FIELDS.type]: string;
  [TABLE_A_FIELDS.phone]: string;
  [TABLE_A_FIELDS.email]: string;
  [TABLE_A_FIELDS.otherContactDetails]: string;
  [TABLE_A_FIELDS.otherLinks]: string;
  [TABLE_A_FIELDS.mode]: MODE_ENUM;
  [TABLE_A_FIELDS.specialisation]: Array<string>;
  [TABLE_A_FIELDS.fee]: string;
};

export type TableADataRecord = {
  id: string;
  createdTime: string;
  fields: TableADataField;
};

export type TableAData = {
  records: Array<TableADataRecord>;
  offset: string;
};
